import { API_TOKEN, API_URL } from './constants'
import { Player } from './types'

export const createAvatar = async (data: FormData) => {
  return fetch(`${API_URL}/files/upload`, {
    method: 'POST',
    headers: {
      Authorization: API_TOKEN
    },
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
      'Content-Type': 'application/json',
      Authorization: API_TOKEN
    },
    body: JSON.stringify({
      ...player,
      avatar: {
        id: avatarId
      }
    })
  })
}
