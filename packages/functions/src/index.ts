import axios from "axios"
import * as functions from "firebase-functions"

const { logger } = functions

export const helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((req, res) => {
    logger.debug(req.headers)
    logger.info("Hello logs!", { structuredData: true })
    logger.error("error!!!")
    res.send("Hello from Firebase!")
  })

export const getPlayerSummaries = functions
  .region("asia-northeast1")
  .https.onCall(async ({ steamids }) => {
    logger.debug(steamids)
    const { data } = await axios.get(
      "https:/api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
      {
        params: { steamids, key: process.env["STEAM_API_KEY"] },
      }
    )
    logger.debug(data)
    return data
  })
