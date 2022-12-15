import Client from "../types/Client";
import {
  Events,
  Interaction,
  CommandInteraction,
  AutocompleteInteraction,
} from "discord.js";

const registerInteractionCreateListener = async (client: Client) => {
  await client.on(
    Events.InteractionCreate,
    async (interaction: Interaction): Promise<void> => {
      if (interaction.isChatInputCommand()) {
        await handleSlashCommand(client, interaction);
      } else if (interaction.isAutocomplete()) {
        await handleAutocomplete(client, interaction);
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

const handleAutocomplete = async (
  client: Client,
  interaction: AutocompleteInteraction
): Promise<void> => {
  const command = client.commands.get(interaction.commandName);

  if (!command || !command.autocomplete) {
    console.error(
      `Error: The command '${interaction.commandName}' could not be found.`
    );
    return;
  }

  try {
    await command.autocomplete(client, interaction);
  } catch (e) {
    console.error(e);
  }
};

export default registerInteractionCreateListener;
