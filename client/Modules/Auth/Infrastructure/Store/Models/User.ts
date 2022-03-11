export type Id = string
type Name = string

export interface User {
  id: Id
  name: Name
  master: boolean
  player: boolean
  admin: boolean
}
