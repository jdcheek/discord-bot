import { MessageActionRow, MessageSelectMenu } from "discord.js";

export async function selectTeamsComponent(teamsData: any) {
  let eastConfArray: any = [];
  let westConfArray: any = [];

  teamsData.teams.forEach((team: any) => {
    // Select option total exceeds maximum of 25, split into conferences to prevent errors.
    if (team.conference.id === 5) {
      westConfArray.push({
        label: team.name,
        description: team.name,
        value: team.id.toString(),
      });
    } else {
      eastConfArray.push({
        label: team.name,
        description: team.name,
        value: team.id.toString(),
      });
    }
  });

  const east = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("east")
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
