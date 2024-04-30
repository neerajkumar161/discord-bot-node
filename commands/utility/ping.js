// https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files
// https://discord.gg/v75v3mqy  [Discord channel]
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
}

  