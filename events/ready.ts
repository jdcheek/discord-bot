import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
const { clientId, guildId, token, status } = require("../config.json");

module.exports = {
  name: "ready",
  once: true,
  execute(client: any, commands: any) {
    console.log("Puckhead is ready");

    const rest = new REST({ version: "9" }).setToken(token);
    (async () => {
      try {
        if (status === "production") {
          await rest.put(Routes.applicationCommands(clientId), {
            body: commands,
          });
          console.log("Successfully registered application global commands.");
        } else {
          await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: commands,
          });
          console.log("Successfully registered application guild commands.");
        }
      } catch (error) {
        console.log("Failed to deploy commands: ", error);
      }
    })();
  },
};
