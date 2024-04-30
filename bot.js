import { Client, Events, GatewayIntentBits } from 'discord.js';
import * as AddCommands from './commands/utility/add.js';
import * as PingCommands from './commands/utility/ping.js';
import { TOKENS } from './env.js';
import { generateGif } from './tenor.js';

/** 
 * Use npm run command or cmd + shift + B to exectue file
 * use npm run deploy to deploy the commands to discord server
*/

const client = new Client({ intents: [GatewayIntentBits.Guilds, 'Guilds', 'GuildMessages'] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.login(TOKENS.BOT_TOKEN);

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {  // ping.js
    await PingCommands.default.execute(interaction);
  }

  if (interaction.commandName === 'add') {
    await AddCommands.default.execute(interaction);
  }

  if (interaction.commandName === 'gen-gif') {
    const query = interaction.options.getString('query');
    const gifUrl = await generateGif(query);
    await interaction.reply(gifUrl);
  }
})
