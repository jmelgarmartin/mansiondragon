export class UserId {
  private constructor (private _userId: string) {}

  public static make (userId: string): UserId {
    return new this(userId)
  }
}
