import Container from '@/components/container'
import PlayerList from '@/components/player-list'

export default function PlayersPage() {
  return (
    <Container title="players">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">All players</h1>
      <p className="mb-6 text-lg text-gray-500 md:text-xl">
        You can find every player who takes part in Quidditch here
      </p>
      <PlayerList />
    </Container>
  )
}
