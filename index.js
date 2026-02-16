const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!hello') {
    message.reply('هلا والله 👋');
  }

  if (message.content === '!server') {
    message.reply(`اسم السيرفر: ${message.guild.name}`);
  }
if (message.content === '-dj') {

  // نتأكد إن الشخص داخل روم صوتي
  const channel = message.member.voice.channel;

  if (!channel) {
    return message.reply('❌ لازم تدخل روم صوتي أول!');
  }

  // يدخل البوت نفس الروم
  joinVoiceChannel({
    channelId: channel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });

  message.reply('✅ دخلت الروم!');
}
});

client.login('MTI4NDcyMDU1Nzk3MTA4MzQwNQ.G9cijv.lJJ7Pb5ibIHCNBh9HYadutID2aDK6gGOMBK_iQ');