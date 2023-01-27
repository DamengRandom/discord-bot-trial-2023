const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "support",
  description: "Please support me if you like this server ~~",
  callback: (client, interaction) => {
    const supportCard = new EmbedBuilder()
      .setTitle("Support Server Owner")
      .setDescription("$5 = ❤️")
      .setColor("Random")
      .addFields(
        {
          name: "Payment Link",
          value: "https://buy.stripe.com/eVag2X8lC3xscDedQQ",
        },
        {
          name: "Word From Server Owner",
          value:
            "Thank you for considering a donation to our organization. Your support will help us to make a positive impact in the community. We appreciate your generosity and look forward to your contribution.",
        }
      );

    interaction.reply({ embeds: [supportCard] });
  },
};
