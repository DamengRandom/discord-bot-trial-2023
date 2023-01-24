require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// intents: refers to set of permisssion your bot can access to

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online ✅`);
});

client.on("messageCreate", (message) => {
  console.log(message?.content);

  if (message?.author?.bot) return; // if message is created by Bot, then stop it ..

  if (message?.content?.toLowerCase().includes("annie"))
    message.reply("Hey Annie ~~");
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);

  if (interaction.commandName === "annie") {
    interaction.reply("I love you annie !!");
  }

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    const num3 = interaction.options.get("third-number").value;

    interaction.reply(
      `Numbers mod results: ${num1 % 8}, ${num2 % 8}, ${num3 % 6}`
    );
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
