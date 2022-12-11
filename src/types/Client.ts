import { SlashCommand } from "./SlashCommand";
import { Client as DiscClient } from "discord.js";

class Client extends DiscClient {
  commands = new Map<string, SlashCommand>();
}

export default Client;
