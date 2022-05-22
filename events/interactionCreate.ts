import { fetchTeamStats } from "../lib/fetchTeamStats";

module.exports = {
  name: "interactionCreate",
  async execute(interaction: any) {
    if (interaction.isCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);
      if (!command) return;
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }

    if (interaction.isSelectMenu()) {
      console.log(interaction);
      if (interaction.customId === "east" || interaction.customId === "west") {
        const team = await fetchTeamStats(interaction.values);
        await interaction.update({
          content: "Something was selected!",
          components: [],
        });
      }
    }
  },
};
