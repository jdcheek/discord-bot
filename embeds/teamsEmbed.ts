import { MessageEmbed } from "discord.js";

export function teamsEmbed(teamsData: any) {
  const fieldsArray: any = [];
  teamsData.teams.forEach((team: any) => {
    fieldsArray.push([
      {
        name: `${team.name}: ${team.id.toString()}`,
        value: team.officialSiteUrl,
        inline: true,
      },
    ]);
  });

  const teamsEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("NHL Teams:")
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
      text: `${teamsData.copyright}`,
    });

  return teamsEmbed;
}
