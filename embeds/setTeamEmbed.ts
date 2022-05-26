import { MessageEmbed } from "discord.js";

export function setTeamEmbed(teamData: any) {
  const teamsEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Username's Teams")
    .setDescription(
      "These are the current teams you are following. To unset teams, use the `/puck unset {teamId}`"
    )
    .addFields(
      { name: "Team 1", value: "Some value here" },
      { name: "Team 2", value: "Some value here" }
    )
    .setTimestamp()
    .setFooter({
      text: "This is footer text",
    });

  return teamsEmbed;
}
