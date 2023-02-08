import Container from '@/components/container'
import PlayerCard from '@/components/player-card'
import usePlayers from '@/hooks/use-players'

export default function PlayersPage() {
  const { players, isLoading } = usePlayers()

  return (
    <Container title="players">
      <h1 className="mb-2 font-cinzel text-2xl font-bold md:text-3xl">
        All players
      </h1>
      <p className="mb-6 text-lg text-gray-500 md:text-xl">
        You can find every player who takes part in Quidditch here
      </p>
      <ul className="mx-auto grid w-fit grid-cols-1 md:w-full md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {players &&
          !isLoading &&
          players.map(player => {
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
    </Container>
  )
}
