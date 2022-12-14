import { SlashCommand } from "../types/SlashCommand";
import CreateTeamCommand from "./slash-commands/admin/CreateTeamCommand";
import DeleteTeamCommand from "./slash-commands/admin/DeleteTeamCommand";
import JoinTeamCommand from "./slash-commands/public/JoinTeamCommand";

const Commands: SlashCommand[] = [
  CreateTeamCommand,
  DeleteTeamCommand,
  JoinTeamCommand,
];
export default Commands;
