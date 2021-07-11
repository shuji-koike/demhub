import { Avatar } from "@material-ui/core"
import { Box, Flex, FlexProps, Text, Truncate } from "@primer/components"
import React from "react"
import styled from "styled-components"

import { SteamUser, teamColor, icon, armorIcon } from "."

const PlayerCardBase: React.VFC<
  FlexProps & {
    player: Player
    steamUser?: SteamUser
  }
> = ({ player, steamUser, ...props }) => {
  return (
    <Flex {...props} alignItems="center" style={{ gap: 8 }}>
      <a href={steamUser?.profileurl} rel="noopener noreferrer">
        <Avatar src={steamUser?.avatar} />
      </a>
      <Box flexGrow={1}>
        <Flex style={{ gap: 8 }}>
          <Text fontWeight="bold">{player.Hp}</Text>
          <Truncate
            title={player.Name}
            style={{ flexGrow: 1 }}
            color={teamColor(player.Team)}
            fontWeight="bold"
            maxWidth={100}
          >
            {player.Name}
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

export const PlayerCard = styled(PlayerCardBase)``
