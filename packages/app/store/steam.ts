import firebase from "firebase/app"
import { useEffect, useState } from "react"

export interface SteamUser {
  steamid: string
  profileurl: string
  avatar: string
}

export type SteamUsers = Record<string, SteamUser>

export function useSteamUsers(ids: number[] = []): SteamUsers {
  const data = { steamids: [...new Set(ids)].sort() }
  const [state, setState] = useState<SteamUsers>({})
  useEffect(() => {
    getPlayerSummaries(data).then(setState)
  }, [ids.join(",")])
  return state
}

async function getPlayerSummaries(data: {
  steamids: number[]
}): Promise<SteamUsers> {
  const {
    data: { players },
  }: {
    data: { players?: SteamUser[] }
  } = await firebase.functions().httpsCallable("getPlayerSummaries")(data)
  if (!players) throw Error()
  return players.reduce((acc, e) => ({ ...acc, [e.steamid]: e }), {})
}
