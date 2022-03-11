export interface FetchUserApiResponse {
  type: 'user'
  id: string
  attributes: {
    username: string
    image: string | null
    master: boolean
    player: boolean
    admin: boolean
  }
}
