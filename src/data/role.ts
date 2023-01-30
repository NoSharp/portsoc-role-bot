export interface RoleAssociation {
  discordRoleName: string,
  universityCourse: string
}

export async function putRoleAssociation(roleName: string, universityCourse: string): Promise<RoleAssociation> {
  throw new Error('Unimplemented.' + roleName + universityCourse);
}

export async function getRoleByCourse(universityCourse: string): Promise<RoleAssociation> {
  throw new Error('Unimplemented.' + universityCourse);
}

export async function deleteRoleAssociation(): Promise<RoleAssociation> {
  throw new Error('Unimplemented.');
}
