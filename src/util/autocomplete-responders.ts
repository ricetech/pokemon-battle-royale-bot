import Client from "../types/Client";
import { AutocompleteInteraction } from "discord.js";

export const autocompleteRespondToOne = async (
  client: Client,
  interaction: AutocompleteInteraction,
  choices: string[]
) => {
  const focusedValue = interaction.options.getFocused();
  const filtered = choices.filter((choice) => choice.startsWith(focusedValue));
  await interaction.respond(
    filtered.map((choice) => ({ name: choice, value: choice }))
  );
};
