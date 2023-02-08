import Container from '@/components/container'
import PlayerCard from '@/components/player-card'
import Team from '@/components/team'
import useTeams from '@/hooks/use-teams'

export default function TeamsPage() {
  const { teams, isLoading } = useTeams()

  console.log(teams)
  if (isLoading || !teams) return null

  return (
    <Container title="Teams">
      {teams.map(team => (
        <Team teamName={team.name} key={team.id}>
          {team.players.map(player => {
            const src = `data:${player.avatar.type};base64,${player.avatar.data}`
            return (
              <PlayerCard
                key={player.id}
                id={player.id}
                firstname={player.firstname}
                lastname={player.lastname}
                age={player.age}
                playerType={player.playerType}
                src={src}
              />
            )
          })}
        </Team>
      ))}
    </Container>
  )
}
