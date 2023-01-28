import { Envuments } from "envuments";

export function shouldDebugLog() : Boolean{
  return Envuments.getBoolean("DEBUG_LOG", false);
}