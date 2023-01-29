import {ChatInputCommandInteraction, Client, Collection, Events, GatewayIntentBits, Interaction} from "discord.js";
import { RegisteredSlashCommand } from "./commands/regsitered_slash_command";
import { getRegisteredCommands } from "./commands/utils";
import { getBotToken } from "./config/bot";
import { BotLog } from "./log";

const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });
let commands : Collection<string, RegisteredSlashCommand> | undefined;

client.on(Events.ClientReady, ()=>{
  BotLog.info("Bot connected to discord.");
});


// Ported partially from the Discord.JS docs' command handler.
client.on(Events.InteractionCreate, async (interaction: Interaction)=>{
  if(!interaction.isChatInputCommand()) return;

  if(commands == null){
    BotLog.error("Slash Commands are not registered, interaction failed.");
    return;
  }

  interaction = interaction as ChatInputCommandInteraction;

  const targetCommandName = interaction.commandName;
  const command = commands.get(targetCommandName);
  if(command == null){
    BotLog.warn(`Client attempted to request: ${targetCommandName} however it was not found.`);
    return;
  }

  try{
    await command.execute(interaction);
    BotLog.debug(`${targetCommandName} Interaction handled.`);
  }catch(err){
    BotLog.error(`Error executing: ${targetCommandName}`);
    BotLog.error(err);
  }

});

(async()=>{
  commands = await getRegisteredCommands();
  client.login(getBotToken());
})();