import Client from "../types/Client";
import { Events, Interaction, CommandInteraction } from "discord.js";

const registerInteractionCreateListener = (client: Client) => {
  client.on(
    Events.InteractionCreate,
    async (interaction: Interaction): Promise<void> => {
      if (interaction.isChatInputCommand()) {
        await handleSlashCommand(client, interaction);
      }
    }
  );
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const command = client.commands.get(interaction.commandName);

  if (!command) {
    await interaction.followUp({
      content: `Error: The command '${interaction.commandName}' could not be found. Contact the developer.`,
    });
    return;
  }

  try {
    await command.execute(client, interaction);
  } catch (e) {
    console.error(e);
    await interaction.reply({
      content: `There was an error while executing this command. Contact the developer.`,
      ephemeral: true,
    });
  }
};

export default registerInteractionCreateListener;
