import { SlashCommandBuilder } from "@discordjs/builders";
import { gamesEmbed } from "./gamesEmbed";
import { fetchLinescore } from "../../lib/fetchLinescore";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("games")
    .setDescription("Replies with games and scores for the current day"),
  async execute(interaction: any) {
    const gameData = await fetchLinescore();
    const embed = gamesEmbed(gameData);
    return interaction.reply({ embeds: [embed] });
  },
};
