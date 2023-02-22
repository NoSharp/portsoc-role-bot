import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export interface RegisteredSlashCommand {
  commandData: SlashCommandBuilder,
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>
}
