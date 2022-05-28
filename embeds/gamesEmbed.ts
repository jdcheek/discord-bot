import { MessageEmbed } from "discord.js";
import moment from "moment";

export function gamesEmbed(gameData: any) {
  const fieldsArray: any = [];
  gameData.dates[0].games.forEach((game: any) => {
    const startTime: Date = new Date(game.gameDate);
    fieldsArray.push([
      {
        name: `${game.teams.away.team.name} ${game.teams.away.score} at ${game.teams.home.team.name} ${game.teams.home.score}`,
        value: `Start: ${moment(startTime).format("LT")}, ${
          game.linescore.currentPeriodTimeRemaining
        } ${game.linescore.currentPeriodOrdinal}`,
      },
    ]);
  });

  const gamesEmbed = new MessageEmbed()
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

  return gamesEmbed;
}
