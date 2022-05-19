import { SlashCommandBuilder } from "@discordjs/builders";
import { gamesEmbed } from "../embeds/gamesEmbed";
import { fetchLinescore } from "../lib/fetchLinescore";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("games")
    .setDescription("Replies with NHL games and scores for the current day"),
  async execute(interaction: any) {
    const gameData = await fetchLinescore();
    const embed = gamesEmbed(gameData);
    return interaction.reply({ embeds: [embed] });
  },
};
