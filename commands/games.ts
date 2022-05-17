import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { fetchGames } from "../lib/fetchGames";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("games")
    .setDescription("Replies with games and scores for the current day"),
  async execute(interaction: any) {
    const gameData = await fetchGames();

    const fieldsArray: any = [];
    gameData.forEach((game: any) => {
      fieldsArray.push([
        {
          name: `${game.teams.home.team.name} vs ${game.teams.away.team.name}`,
          value: `Start: 7:30PM : Time Remaining: 15:42, Game: 3, Score: ${game.teams.home.score} - ${game.teams.away.score}`,
        },
      ]);
    });

    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Hockey")
      // .setURL()
      .setAuthor({
        name: "Puckhead Developer",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
        url: "https://github.com/jdcheek",
      })
      .setDescription(
        "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved."
      )
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .addFields(fieldsArray.flat())
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });

    return interaction.reply({ embeds: [exampleEmbed] });
  },
};
