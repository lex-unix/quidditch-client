import Container from '@/components/container'
import PlayerForm from '@/components/player-form'
import PostForm from '@/components/post-form'
import UserForm from '@/components/user-form'
import { admin } from '@/store/admin'
import { useAtom } from 'jotai'

export default function AdminPage() {
  const [isLogged, setIsLogged] = useAtom(admin)

  return (
    <Container title="Admin">
      <h1 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">
        Adim Panel
      </h1>
      {isLogged ? (
        <>
          <div className="mb-8 md:mb-10">
            <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-xl">
              Create new post
            </h2>
            <PostForm />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
              Create new Player
            </h2>
            <PlayerForm />
          </div>
        </>
      ) : (
        <div>
          <h2 className="mb-4 text-center text-lg font-bold md:mb-6 md:text-xl">
            Login to use the panel
          </h2>
          <UserForm loginUser={() => setIsLogged(true)} />
        </div>
      )}
    </Container>
  )
}
