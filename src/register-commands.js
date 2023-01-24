require("dotenv").config();
const { ApplicationCommandOptionType, REST, Routes } = require("discord.js");

// define commands
const commands = [
  {
    name: "annie",
    description: "replies with annie special message",
  },
  {
    name: "add",
    description: "add 3 numbers",
    options: [
      {
        name: "first-number",
        description: "The first number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: "second-number",
        description: "The second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: "third-number",
        description: "The third number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
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

// Run the command by typing `node src/register-commands.js` to register the new discord bot command(s)
