import { Events, GatewayIntentBits } from "discord.js";
import { DISCORD_TOKEN } from "./config";
import Client from "./types/Client";
import Commands from "./commands";
import registerInteractionCreateListener from "./listeners/InteractionCreateListener";
import { db } from "./state";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(DISCORD_TOKEN).then(async () => {
  // Load commands into Map
  for (const command of Commands) {
    client.commands.set(command.data.name, command);
  }

  await registerInteractionCreateListener(client);

  await db.initializeModels();
});
