import { SlashCommand } from "./SlashCommand";
import { Client as DiscClient } from "discord.js";

class Client extends DiscClient {
  commands: SlashCommand[] = [];
}

export default Client;
