import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { fetchLinescore } from "../lib/fetchLinescore";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("games")
    .setDescription("Replies with games and scores for the current day"),
  async execute(interaction: any) {
    const gameData = await fetchLinescore();

    const fieldsArray: any = [];
    gameData.dates[0].games.forEach((game: any) => {
      fieldsArray.push([
        {
          name: `${game.teams.home.team.name} vs ${game.teams.away.team.name}`,
          value: `Start: ${game.gameDate} : Time Remaining: ${game.linescore.currentPeriodTimeRemaining}, Period: ${game.linescore.currentPeriodOrdinal}, Score: ${game.teams.home.score} - ${game.teams.away.score}`,
        },
      ]);
    });

    const gameEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Current NHL Games:")
      .setAuthor({
        name: "jdcheek@github",
        url: "https://github.com/jdcheek",
      })
      .setDescription(
        "[View my source code!](https://github.com/jdcheek/discord-bot)"
      )
      .addFields(fieldsArray.flat())
      .setTimestamp()
      .setFooter({
        text: `${gameData.copyright}`,
      });

    return interaction.reply({ embeds: [gameEmbed] });
  },
};
