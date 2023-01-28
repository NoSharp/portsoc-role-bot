import {Client, GatewayIntentBits} from "discord.js";
import { getBotToken } from "./config/bot";
import { BotLog } from "./log";

const client = new Client({ intents: [GatewayIntentBits.GuildMembers] });

client.on('ready', ()=>{
  BotLog.info('Bot connected to discord.');
});

client.login(getBotToken());