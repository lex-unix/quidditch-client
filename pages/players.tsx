import Container from '@/components/container'
import PlayerForm from '@/components/player-form'
import PlayerList from '@/components/player-list'
import usePlayers from '@/hooks/use-players'

export default function PlayersPage() {
  const { players } = usePlayers()
  return (
    <Container title="players">
      <PlayerList />
      <PlayerForm />
    </Container>
  )
}
