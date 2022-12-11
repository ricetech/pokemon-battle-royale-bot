import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import Client from "./Client";

export interface SlashCommand {
  data: SlashCommandBuilder;
  execute: (client: Client, interaction: CommandInteraction) => Promise<void>;
}
