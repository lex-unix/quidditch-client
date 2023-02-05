import React from 'react'
import usePlayers from '@/hooks/use-players'
import PlayerCard from './player-card'

export default function PlayerList() {
  const { players } = usePlayers()

  return (
    <ul>
      {players?.map(player => {
        const src = `data:${player.avatar.type};base64,${player.avatar.data}`

        return (
          <PlayerCard
            key={player.id}
            id={player.id}
            firstname={player.firstname}
            lastname={player.lastname}
            playerType={player.playerType}
            age={player.age}
            src={src}
          />
        )
      })}
    </ul>
  )
}
