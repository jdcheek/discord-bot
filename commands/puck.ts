import { SlashCommandBuilder } from "@discordjs/builders";
import { gamesEmbed } from "../embeds/gamesEmbed";
import { teamsEmbed } from "../embeds/teamsEmbed";
import { fetchTeamSchedule } from "../lib/fetch/fetchTeamSchedule";
import { fetchLinescore } from "../lib/fetch/fetchLinescore";
import { fetchTeams } from "../lib/fetch/fetchTeams";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("puck")
    .setDescription("Enter available subcommand")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("games")
        .setDescription("Replies with NHL games and scores for the current day")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("teams")
        .setDescription("Replies with list of NHL teams and ID's")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("set")
        .setDescription(
          "Set a team to follow by entering team ID. Find your team's ID with `/puck teams`"
        )
        .addStringOption((option) =>
          option.setName("team").setDescription("Team").setRequired(true)
        )
    ),

  async execute(interaction: any) {
    if (interaction.options.getSubcommand() === "games") {
      const gameData = await fetchLinescore();
      const embed = gamesEmbed(gameData);
      return await interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === "teams") {
      const teamsData = await fetchTeams();
      const embed = teamsEmbed(teamsData);
      return await interaction.reply({ embeds: [embed] });
    }
    if (interaction.options.getSubcommand() === "set") {
      const team = interaction.options.getString("team");
      const teamSchedule = await fetchTeamSchedule(team);

      if (!teamSchedule.teams[0].nextGameSchedule.dates[0].date) {
        return await interaction.reply("There are no upcoming games scheduled");
      } else {
        // get user
        // watch linescore of game
        // message user when score occurs
        return await interaction.reply(
          `${interaction.user.username} is now following the ${teamSchedule.teams[0].name}. The next game date is: ${teamSchedule.teams[0].nextGameSchedule.dates[0].date}`
        );
      }
      // TODO: create embed for upcoming games, times, and opponents
      // TODO: get upcoming games for team, create game check logic, possibly store user choice in database
    }
  },
};
