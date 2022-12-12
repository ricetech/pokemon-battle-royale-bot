import { SlashCommand } from "../types/SlashCommand";
import CreateTeamCommand from "./slash-commands/admin/CreateTeamCommand";
import JoinTeamCommand from "./slash-commands/public/JoinTeamCommand";

const Commands: SlashCommand[] = [CreateTeamCommand, JoinTeamCommand];
export default Commands;
