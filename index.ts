import fs from "node:fs";
import { Intents, Client, Collection } from "discord.js";
import { deployMods } from "./deploy-commands";
const { token } = require("./config.json");

declare module "discord.js" {
  export interface Client {
    commands: Collection<unknown, any>;
  }
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Puckhead is ready");
  deployMods();

  client.commands = new Collection();
  const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    console.log(client.commands);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

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
});

client.login(token);
