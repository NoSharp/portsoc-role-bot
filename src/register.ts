import { REST, Routes } from "discord.js";
import { getRegisteredCommands } from "./commands/utils";
import { getBotToken, getClientId } from "./config/bot";
import { BotLog } from "./log";

const rest = new REST({version: "10"}).setToken(getBotToken());

(async ()=>{
  const registeredCommands = await getRegisteredCommands();
  
  const commands = [];

  for(const command of registeredCommands){
    commands.push(command[1].commandData.toJSON());
  }

  try{
    await rest.put(Routes.applicationCommands(getClientId()), {
      body: commands
    }); 
    BotLog.info(`Successfully registered discord slash commands.`);
  }catch(err){
    BotLog.error("Failed to register discord slash commands", err);
  }

})();