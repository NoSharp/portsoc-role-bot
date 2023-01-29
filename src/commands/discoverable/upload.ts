import { SlashCommandBuilder } from "discord.js";
import { RegisteredSlashCommand } from "../regsitered_slash_command";

export default {
  commandData: new SlashCommandBuilder()
    .setName("upload")
    .setDescription("**__OVERWRITES__** the current CSV database, that's being used to give new users their roles.")
    .addAttachmentOption((option)=>
      option
        .setRequired(true)
        .setName("file")
        .setDescription("The new CSV database.")
    ),
  execute : async (interaction) => {
    await interaction.reply("Pong!");
  }
} as RegisteredSlashCommand;