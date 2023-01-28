const path = require("path");
const getAllFiles = require("./getAllFiles");

module.exports = (exceptions = []) => {
  let localCommands = [];

  const commandCatgories = getAllFiles(
    path.join(__dirname, "..", "commands"),
    true
  );

  for (const commandCategory of commandCatgories) {
    const commandCategoryFiles = getAllFiles(commandCategory);

    commandCategoryFiles.sort((a, b) => a > b);

    for (const commandCategoryFile of commandCategoryFiles) {
      const commandObject = require(commandCategoryFile);

      if (exceptions.includes(commandObject.name)) continue;

      localCommands.push(commandObject);
    }
  }

  return localCommands;
};
