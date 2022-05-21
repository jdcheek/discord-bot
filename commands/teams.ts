import { SlashCommandBuilder } from "@discordjs/builders";
import { selectTeamsComponent } from "../components/selectTeam";
import { fetchTeams } from "../lib/fetchTeams";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("teams")
    .setDescription("Replies with dropdown of current NHL teams to view"),
  async execute(interaction: any) {
    const teamsData = await fetchTeams();
    const select = await selectTeamsComponent(teamsData);
    return await interaction.reply({
      content: "Select a team to view more information!",
      components: select,
    });
  },
};
