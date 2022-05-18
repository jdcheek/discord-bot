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
    gameData.forEach((game: any) => {
      fieldsArray.push([
        {
          name: `${game.teams.home.team.name} vs ${game.teams.away.team.name}`,
          value: `Start: ${game.gameDate} : Time Remaining: ${game.linescore.currentPeriodTimeRemaining}, Period: ${game.linescore.currentPeriodOrdinal}, Score: ${game.teams.home.score} - ${game.teams.away.score}`,
        },
      ]);
    });

    const gameEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Hockey")
      .setAuthor({
        name: "jdcheek@github",
        url: "https://github.com/jdcheek",
      })
      .setDescription(
        "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved."
      )
      .addFields(fieldsArray.flat())
      .setTimestamp()
      .setFooter({
        text: "View my source code!",
        iconURL: "https://github.com/jdcheek/discord-bot",
      });

    return interaction.reply({ embeds: [gameEmbed] });
  },
};
