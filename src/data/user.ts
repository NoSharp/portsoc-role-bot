/**
 * Handles the user data structure.
 */
export interface User {
  upNumber: number,
  roles: string[]
}

export async function getUser(upNumber: number): Promise<User> {
  throw new Error('Unimplemented.' + upNumber);
}
