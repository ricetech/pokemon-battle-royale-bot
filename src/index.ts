import { Client, Events, GatewayIntentBits } from "discord.js";
import { DISCORD_TOKEN } from "./config";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(DISCORD_TOKEN);
