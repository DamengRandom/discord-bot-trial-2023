require("dotenv").config();
const { REST, Routes } = require("discord.js");

// define commands
const commands = [
  {
    name: "annie",
    description: "replies with annie special message",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_BOT_TOKEN
);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_CUILD_ID
      ),
      { body: commands }
    );
    console.log("slash commands were registered successfully ~~");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();
