const {
  ApplicationCommandOptionType,
  EmbedBuilder,
  hyperlink,
} = require("discord.js");
const {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  answers,
} = require("../../utils/zhouyi");

function request(data) {
  // calculate the gua & yao
  const xiaGua = convertToGua(data["xia"] % 8);
  const shangGua = convertToGua(data["shang"] % 8);
  const yaoCi = convertToYao(data["yao"] % 6);

  // convert gua & yao to one of 64 varients
  const gua = allGuas(`${shangGua}-${xiaGua}`);
  const yao = allYaos(gua)?.[yaoCi - 1];

  // release final result answer
  // const finalResult = answer(`${gua}${yao}`); // single result
  return answers(`${gua}${yao}`); // multiple results
}

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
    const result = request({
      xia: firstNumber,
      shang: secondNumber,
      yao: thirdNumber,
    });

    const zhouYiLink = hyperlink("周易数字卦", "https://zhouyi.netlify.app/");

    const resultCard = new EmbedBuilder()
      .setTitle("此卦爻为 [结果]")
      .setDescription(
        `易经数字卦是一种占问的方式\n(请务必做到 不诚不占 不义不占 不疑不占) ☯️☯️☯️`
      )
      .setAuthor({
        name: "Damengrandom",
        url: "https://github.com/DamengRandom",
      })
      .setColor("Random")
      .addFields(
        {
          name: "卦名",
          value: `${result.gua}`,
        },
        {
          name: "爻辞",
          value: `${result.yao}`,
        },
        {
          name: "大象",
          value: `${result.daXiang}`,
        },
        {
          name: "小象",
          value: `${result.xiaoXiang}`,
        },
        {
          name: "原文",
          value: `${result.origin}`,
        },
        {
          name: "解释",
          value: `${result.meaning}`,
        },
        {
          name: "网站",
          value: zhouYiLink,
        }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [resultCard] });
  },
};
