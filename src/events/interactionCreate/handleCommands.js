const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands();

  try {
    const commandObject = localCommands.find(
      (cmd) => cmd.name === interaction.commandName
    );

    if (!commandObject) return;

    if (commandObject.devOnly) {
      if (process.env.DISCORD_DEV_ID !== interaction.member.id) {
        interaction.reply({
          content: "Only developers are allowed to run this command.",
          ephemeral: true,
        });

        return;
      }
    }

    if (!!commandObject.permissionsRequired?.length) {
      for (const permission of commandObject.permissionsRequired) {
        if (!interaction.member.permissions.has(permission)) {
          interaction.reply({
            content: "Not enough permission for current member.",
            ephemeral: true,
          });
          break;
        }
      }
      return;
    }

    if (!!commandObject.botPermissions?.length) {
      const bot = interaction.guild.members.me;
      for (const permission of commandObject.botPermissions) {
        if (!bot.permissions.has(permission)) {
          interaction.reply({
            content: "Not enough permission for bot.",
            ephemeral: true,
          });
          break;
        }
      }
      return;
    }

    await commandObject.callback(client, interaction);
  } catch (error) {
    console.error(`There was an error running this command: ${error}`);
  }
};
