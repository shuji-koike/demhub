import { Avatar, Box, Flex, Text, Truncate } from "@primer/components"
import React from "react"

import { SteamUser, teamColor, icon, armorIcon } from "."

export const PlayerCard: React.VFC<{
  player: Player
  steam?: SteamUser
}> = ({ player, steam }) => {
  return (
    <Flex>
      <Box>
        <a href={steam?.profileurl} rel="noopener noreferrer">
          <Avatar src={steam?.avatar} size={48} square />
        </a>
      </Box>
      <Box flexGrow={1}>
        <Flex style={{ gap: 8 }}>
          <Text fontWeight="bold">{player.Hp}</Text>
          <Truncate title={player.Name} style={{ flexGrow: 1 }}>
            <Text fontWeight="bold" color={teamColor(player.Team)}>
              {player.Name}
            </Text>
          </Truncate>
          <Text fontWeight="bold" textAlign="right" color="#131">
            ${player.Money}
          </Text>
        </Flex>
        <Flex flexWrap="wrap" style={{ gap: 8 }}>
          <img src={armorIcon(player)} />
          {player.Weapons?.filter((e) => e !== 405).map((e, i) => (
            <img
              key={i}
              style={{ height: 20, opacity: player.Weapon === e ? 1 : 0.5 }}
              src={icon(e)}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
