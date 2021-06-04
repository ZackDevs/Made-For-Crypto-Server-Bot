const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js')
const sourcebin = require('sourcebin')

module.exports = class IdsCommand extends BaseCommand {
  constructor() {
    super('ids', 'Auto-Ban', [], 'Shows Ids');
  }

  async run(client, message, args) {
    if(message.member.permissions.has('ADMINISTRATOR') || message.author.id === '359731859409862656') {
      
    
    const array = []
    var bin 
    client.ids.forEach(element => {
      if(!array.includes(element)) {
        array.push(element)
      }
    });
    const ids = array.join('\n')
    if(ids.length < 2048) {
    let embed = new MessageEmbed()
    .setTitle('ID\'s saved in the Database')
    .setDescription(ids ? ids : 'None')
    .setFooter(`Coded by ${client.guilds.cache.get('399529631734169610').members.cache.get('359731859409862656').user.tag}`)
    return message.channel.send(embed)
    }
    else {
      await sourcebin.create(
        [
        {	
              content: ids,
              language: 'javascript',
        },
        ],
        {
        title: 'ID\'s banned',
        description: 'This are all the id\'s that are banned',
        },
        ).then(res => {bin = res.url}).catch(err => bin = null)
        if(!bin) {
          message.reply(`There was an error, please report to ` + client.guilds.cache.get('399529631734169610').members.cache.get('359731859409862656').user.tag)
        }
        

        let embed1 = new MessageEmbed()
        .setTitle('ID\'s stored in the Database')
        .setDescription(`Please click the link | ${array.length} ids banned \n[Link](${bin})`)
        .setFooter(`Coded by ${client.guilds.cache.get('399529631734169610').members.cache.get('359731859409862656').user.tag}`)
        return message.channel.send(embed1)
      }
    }
    else {
      return message.reply('You don\'t have perms to run that command')
    }
  }
}