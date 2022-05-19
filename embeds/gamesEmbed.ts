import { MessageEmbed } from "discord.js";

export function gamesEmbed(gameData: any) {
  const fieldsArray: any = [];
  gameData.dates[0].games.forEach((game: any) => {
    fieldsArray.push([
      {
        name: `${game.teams.home.team.name} vs ${game.teams.away.team.name}`,
        value: `Start: ${game.gameDate} : Time Remaining: ${game.linescore.currentPeriodTimeRemaining}, Period: ${game.linescore.currentPeriodOrdinal}, Score: ${game.teams.home.score} - ${game.teams.away.score}`,
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
