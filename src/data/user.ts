/**
 * Handles the user data structure.
 */
export interface User {
  upNumber: number,
  roles: string[]
}

export async function getUser(): Promise<User> {
  return {
    upNumber: 0,
    roles: [],
  };
}
