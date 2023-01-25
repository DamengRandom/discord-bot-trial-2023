require("dotenv").config();

const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");

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

  client.user.setActivity({
    // name: "ai-bot",
    // type: ActivityType.straming,
    // url: "https://www.youtube.com/watch?v=rUxyKA_-grg",
    name: "ai-bot",
    type: ActivityType.Custom,
    url: "https://damengrandom.vercel.app/",
  });
});

client.on("messageCreate", (message) => {
  console.log(message?.content);

  if (message?.author?.bot) return; // if message is created by Bot, then stop it ..

  if (message?.content?.toLowerCase().includes("annie"))
    message.reply("Hey Annie ~~");
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return; // detect if comamnd is generated by bot, stop it ~~

  console.log(interaction.commandName);

  if (interaction.commandName === "annie") {
    interaction.reply("I love you annie !!");
  }

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    const num3 = interaction.options.get("third-number").value;

    const resultCard = new EmbedBuilder()
      .setTitle("Result board:")
      .setDescription(
        "This is the final result based on the numbers you have entered ~"
      )
      .setColor("Random")
      .addFields(
        {
          name: "1st Field",
          value: `Result is: ${num1 % 8}`,
        },
        {
          name: "2nd Field",
          value: `Result is: ${num2 % 8}`,
        },
        {
          name: "3rd Field",
          value: `Result is: ${num3 % 6}`,
        }
      );

    interaction.reply({ embeds: [resultCard] });
  }

  // if (interaction.commandName === "embed") {
  //   const embed = new EmbedBuilder()
  //     .setTitle("Embed title")
  //     .setDescription("This is an embed description")
  //     .setColor("Random")
  //     .addFields({
  //       name: "Field title",
  //       value: "Some random value",
  //     });

  //   interaction.reply({ embeds: [embed] });
  // }

  if (interaction.commandName === "support") {
    // Stripe URL: https://buy.stripe.com/eVag2X8lC3xscDedQQ
    const moneyCard = new EmbedBuilder()
      .setTitle("Please help")
      .setDescription("Thank you very much for your help 🙏🙏🙏🙏")
      .setColor("Random")
      .addFields(
        {
          name: "The Payment link",
          value: "https://buy.stripe.com/eVag2X8lC3xscDedQQ",
        },
        {
          name: "The description",
          value:
            "This donated money will be forwarded to Red Cross, because the server owner wants to help more people who needs to be helped. Mega thanks.",
        }
      );

    interaction.reply({ embeds: [moneyCard] });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
