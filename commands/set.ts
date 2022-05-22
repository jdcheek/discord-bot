import { SlashCommandBuilder } from "@discordjs/builders";
import { fetchSchedule } from "../lib/fetchSchedule";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("set")
    .setDescription("Sets team to follow"),
  async execute(interaction: any) {
    console.log(interaction);

    // return interaction.reply({ embeds: [] });
    // Set team to follow
    // Check for live games
    // Get gamePk and get live game
    // Check game score every 60 seconds
    // if score reply with new score and goal description
    // after 10 minutes check content feed with gamePk for video clip and reply with clip if available
  },
};
