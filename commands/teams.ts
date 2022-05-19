import { SlashCommandBuilder } from "@discordjs/builders";
import { teamsEmbed } from "../embeds/teamsEmbed";
import { fetchTeams } from "../lib/fetchTeams";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("teams")
    .setDescription("Replies with list of current NHL teams"),
  async execute(interaction: any) {
    const teamsData = await fetchTeams();
    const embed = teamsEmbed(teamsData);
    return interaction.reply({ embeds: [embed] });
  },
};
