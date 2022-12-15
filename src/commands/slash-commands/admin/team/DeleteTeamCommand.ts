import { SlashCommand } from "../../../../types/SlashCommand";
import { SlashCommandBuilder } from "@discordjs/builders";
import { AutocompleteInteraction, CommandInteraction } from "discord.js";
import { ADMIN_COMMAND_PERMISSIONS_FLAG } from "../admin-permissions-flag";
import { db } from "../../../../state";
import { Team } from "../../../../state/Team";
import { autocompleteRespondToOne } from "../../../../util/autocomplete-responders";
import Client from "../../../../types/Client";

const DeleteTeamCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("deleteteam")
    .setDescription("Delete a team.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The team name.")
        .setRequired(true)
        .setAutocomplete(true)
    )
    .setDefaultMemberPermissions(ADMIN_COMMAND_PERMISSIONS_FLAG),
  async execute(client: Client, interaction: CommandInteraction) {
    if (interaction.isChatInputCommand()) {
      const name = interaction.options.getString("name");
      await interaction.deferReply();
      // Null checks
      if (!name) {
        await interaction.followUp(
          `Error: Name was not provided! Please try again.`
        );
        return;
      }
      try {
        let teamFound = false;
        await db.sequelize.transaction(async (transaction) => {
          const team = await Team.findOne({
            where: { name: name },
            transaction,
          });
          if (team) {
            teamFound = true;
            await team.destroy({ transaction });
          }
        });
        const response = teamFound
          ? `The team '${name}' was successfully deleted!`
          : `Error: The team '${name}' doesn't exist. Please try again.`;
        await interaction.followUp(response);
      } catch (e) {
        console.error(e);
        await interaction.followUp(
          `Error: Could not write to the database. Please contact the developer.`
        );
      }
    } else {
      await interaction.followUp(
        `Error: Interaction is not a command. Please contact the developer.`
      );
    }
  },
  async autocomplete(client: Client, interaction: AutocompleteInteraction) {
    const teams = await Team.findAll({ attributes: ["name"] });
    const choices = teams.map((team) => team.name);
    await autocompleteRespondToOne(client, interaction, choices);
  },
};

export default DeleteTeamCommand;
