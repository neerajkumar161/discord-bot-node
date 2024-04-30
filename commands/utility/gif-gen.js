import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('gen-gif')
    .setDescription('Generate a gif with text search or random gif')
    .addStringOption(option =>
      option
        .setName('query')
        .setDescription('Search text query')
    ),
  async execute(interaction) {
    const num1 = interaction.options.getNumber('num1');
    const num2 = interaction.options.getNumber('num2');
    await interaction.reply(`The sum is ${num1 + num2}`);
  }
}