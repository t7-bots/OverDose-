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
if (message.content === '-t7') {

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

client.login('MTM3MDI1MzU5OTQ4OTI2MTY2OQ.GKslfr.REbKJ4dCtJ4FACCYftEt0cqxvcoApw60nZw0AY');