import { API_URL } from './constants'
import { Player } from './types'

export const createAvatar = async (data: FormData) => {
  return fetch(`${API_URL}/files/upload`, {
    method: 'POST',
    body: data
  })
}

type PlayerWihtoutAvatarAndId = Omit<Player, 'avatar' | 'id' | 'age'> & {
  age: string
}

export const createPlayer = async (
  avatarId: string,
  player: PlayerWihtoutAvatarAndId
) => {
  return fetch(`${API_URL}/players/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...player,
      avatar: {
        id: avatarId
      }
    })
  })
}
