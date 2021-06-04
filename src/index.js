
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const mongo = require('./mongo');
const idsSchema = require('./schemas/ids-schema');
const client = new Client();
const guildId = "834008299778605078";
module.exports = client;

(async () => {
  await mongo()
  let finded = await idsSchema.findOne({ guildId }).catch(() => null)
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.ids = finded ? finded.ids : []
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
  await client.user.setActivity("scammers and messages 👀", { type: "WATCHING" });

  
  

  
})();
process.on('SIGINT', async () => {
  await idsSchema.findOneAndUpdate({
    guildId,
  }, {
    guildId,
    ids: client.ids
  }, {
    upsert: true
  })
})

