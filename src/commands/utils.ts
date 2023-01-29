import { Collection, SlashCommandBuilder } from "discord.js";
import { BotLog } from "../log";
import { RegisteredSlashCommand } from "./regsitered_slash_command";
import path from "path";
import fs from "fs";

const discoverableFolder = path.join(__dirname, "discoverable")

export async function getRegisteredCommands() : Promise<Collection<string, RegisteredSlashCommand>>{
  const commandCollection = new Collection<string, RegisteredSlashCommand>();
  const files = fs.readdirSync(discoverableFolder);
  for(const file of files){
    const data : RegisteredSlashCommand = (await import(path.join(discoverableFolder, file)))?.default ?? {}; 
    if(data.commandData == null){
      BotLog.error(`Command File: "${file}" does not export "commandData"`);
      continue;
    }

    if(data.execute == null){
      BotLog.error(`Command File: "${file}" does not export "execute"`);
      continue;
    }
    const commandName = data.commandData.name;

    commandCollection.set(commandName, data);
    
    BotLog.info(`Succesfully registered command: ${commandName}.`);
  }
  return commandCollection;
}
