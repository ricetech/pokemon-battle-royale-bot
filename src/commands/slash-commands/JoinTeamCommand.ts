import { SlashCommand } from "../../types/SlashCommand";
import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction } from "discord.js";

const JoinTeamCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("jointeam")
    .setDescription("Join a team."),
  async execute(client: Client, interaction: CommandInteraction) {
    await interaction.reply("Not implemented yet!");
  },
};

export default JoinTeamCommand;
