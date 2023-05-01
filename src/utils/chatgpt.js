require("dotenv").config();
const { Headers } = require("node-fetch");
const fetch = require("node-fetch");

var options = {
  Authorization: process.env.OPENAI_API_KEY,
};

var myHeaders = new Headers(options);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function getAIAnswer(gua) {
  try {
    const response = await fetch(
      `https://gpt-2023-trial-ui.vercel.app/api/gpt?words=周易${gua}卦解释`,
      requestOptions
    );

    const text = response.text();

    return text;
  } catch (error) {
    console.error("ChatGPT Error Response: ", error);
    return error;
  }
}

module.exports = {
  getAIAnswer,
};
