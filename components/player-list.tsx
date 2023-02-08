import React from 'react'
import usePlayers from '@/hooks/use-players'
import PlayerCard from './player-card'

export default function PlayerList() {
  const { players } = usePlayers()

  return (
    <ul className="mx-auto grid w-fit grid-cols-1 md:w-full md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
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
