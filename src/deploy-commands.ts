import Commands from "./commands";
import { REST, Routes } from "discord.js";
import { CLIENT_ID, DISCORD_TOKEN, GUILD_ID } from "./config";
import commands from "./commands";

interface RestReturn {
  length: number;
}

const commandData = [];

for (const command of Commands) {
  commandData.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );
    const data = (await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commandData }
    )) as RestReturn;
    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (e) {
    console.error(e);
  }
})();
