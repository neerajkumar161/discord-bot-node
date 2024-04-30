import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Adds two numbers together')
    .addNumberOption(option =>
      option
        .setName('num1')
        .setDescription('The first number')
        .setRequired(true)
    )
    .addNumberOption(option =>
      option
        .setName('num2')
        .setDescription('The second number')
        .setRequired(true)
    ),
  async execute(interaction) {
    const num1 = interaction.options.getNumber('num1');
    const num2 = interaction.options.getNumber('num2');
    await interaction.reply(`The sum is ${num1 + num2}`);
  }
}
/* 
Equivalent to this JSON:
[
  {
    "options": [
      { "type": 10, "name": "num1", "description": "The first number", "required": true },
      { "type": 10, "name": "num2", "description": "The second number", "required": true }
    ],
    "name": "add",
    "description": "Adds two numbers together"
  },
  { "options": [], "name": "ping", "description": "Replies with Pong!" }
]; */