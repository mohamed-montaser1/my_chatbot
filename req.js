const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

let custom_message = `
Hello I'm *Mohamed Montaser*, based in Egypt, *14 yeas old*.
I've 2 years of Experience in web development.

my social media:
*Linked in:* https://www.linkedin.com/in/mohamed-montaser-8a00a1230/
*Youtube:* https://www.youtube.com/channel/UC7MZbbuzrZl6qXTNUbdNt7A
*Twitter:* https://twitter.com/Mastro_Coding

*my projects on:*
*Github:* https://github.com/mohamed-montaser1
*My Portfolio:* https://mohamed-montaser1.github.io/my_awesome_portfolio/dist


Nice To See Want To Know More About Me 😀
`;

client.on("message", (message) => {
  if (message.body === "--info") {
    message.reply(custom_message);
  }
  console.log(message);
});

client.initialize();
