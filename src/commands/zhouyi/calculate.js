const {
  ApplicationCommandOptionType,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  name: "calculate",
  description: "Forcast the future by providing 3 3-digits numbers, eg (xxx)",
  options: [
    {
      name: "first-number",
      description: "Please enter the first number (Shang Gua)",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: "second-number",
      description: "Please enter the second number (Xia Gua)",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: "third-number",
      description: "Please enter the third number (Yao Ci)",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],
  callback: async (client, interaction) => {
    const firstNumber = interaction.options.get("first-number").value % 8;
    const secondNumber = interaction.options.get("second-number").value % 8;
    const thirdNumber = interaction.options.get("third-number").value % 6;

    // calculation algorithm

    const liteButton = new ButtonBuilder()
      .setCustomId("lite")
      .setLabel("Lite Version")
      .setStyle(ButtonStyle.Secondary);

    const fullButton = new ButtonBuilder()
      .setCustomId("full")
      .setLabel("Full Version")
      .setStyle(ButtonStyle.Primary);

    const resultCard = new EmbedBuilder()
      .setTitle("Show time [RESULT]")
      .setDescription(
        `It's time to show the forcast result, and you will be able to view the final result below ☯️: ${firstNumber}:${secondNumber}:${thirdNumber}`
      )
      .setColor("Random")
      .addFields(
        {
          name: "Top result (Shang Gua)",
          value: `${firstNumber}`,
        },
        {
          name: "Bottom result (Xia Gua)",
          value: `${secondNumber}`,
        },
        {
          name: "Variant result (Yao Ci)",
          value: `${thirdNumber}`,
        }
      );

    const actionRow = new ActionRowBuilder().addComponents([
      liteButton,
      fullButton,
    ]);

    await interaction.reply({ embeds: [resultCard], components: [actionRow] });
  },
};
