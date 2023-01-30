import { Envuments } from 'envuments';

export function getBotToken() : string {
  return Envuments.get('BOT_TOKEN');
}

export function getGuildId() : string {
  return Envuments.get('GUILD_ID');
}

export function getClientId() : string {
  return Envuments.get('BOT_CLIENT_ID');
}
