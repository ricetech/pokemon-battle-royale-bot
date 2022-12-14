import { SlashCommand } from "../../../../types/SlashCommand";
import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction } from "discord.js";
import { ADMIN_COMMAND_PERMISSIONS_FLAG } from "../admin-permissions-flag";
import { db } from "../../../../state";
import { Team } from "../../../../state/Team";

const CreateTeamCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("createteam")
    .setDescription("Create a team.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The team name.")
        .setRequired(true)
        .setMinLength(3)
    )
    .addStringOption((option) =>
      option
        .setName("color")
        .setDescription("A hex code (with #) for the team color.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(ADMIN_COMMAND_PERMISSIONS_FLAG),
  async execute(client: Client, interaction: CommandInteraction) {
    if (interaction.isChatInputCommand()) {
      const name = interaction.options.getString("name");
      const color = interaction.options.getString("color");
      await interaction.deferReply();
      // Null checks
      if (!name) {
        await interaction.followUp(
          "Error: Name was not provided! Please try again."
        );
        return;
      }
      if (!color) {
        await interaction.followUp(
          "Error: Color was not provided! Please try again."
        );
        return;
      }
      // Validation
      if (!color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        await interaction.followUp(
          "Error: The color provided is not a valid RGB hex code. Please try again using a hex code in the format `#ABCDEF`."
        );
      }
      try {
        await db.sequelize.transaction(async (transaction) => {
          return await Team.create(
            {
              name,
              color,
            },
            { transaction }
          );
        });
        await interaction.followUp(
          `The team '${name}' was successfully created with team color \`${color}\`!`
        );
      } catch (e) {
        console.error(e);
        await interaction.followUp(
          "Error: Could not write to the database. Please contact the developer."
        );
      }
    } else {
      await interaction.followUp(
        "Error: Interaction is not a command. Please contact the developer."
      );
    }
  },
};

export default CreateTeamCommand;
