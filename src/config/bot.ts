import { Envuments } from "envuments";

export function getBotToken() : string{
  return Envuments.get("BOT_TOKEN");
}