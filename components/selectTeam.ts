import { MessageActionRow, MessageSelectMenu } from "discord.js";

export async function selectTeamsComponent(teamsData: any) {
  let eastConfArray: any = [];
  let westConfArray: any = [];

  teamsData.teams.forEach((team: any) => {
    if (team.conference.id === 5) {
      westConfArray.push({
        label: team.name,
        description: team.id.toString(),
        value: team.id.toString(),
      });
    } else {
      eastConfArray.push({
        label: team.name,
        description: team.id.toString(),
        value: team.id.toString(),
      });
    }
  });

  const east = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Eastern Conference")
      .addOptions(eastConfArray)
  );

  const west = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("west")
      .setPlaceholder("Western Conference")
      .addOptions(westConfArray)
  );
  return [east, west];
}
