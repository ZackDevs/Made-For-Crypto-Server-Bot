const { MessageEmbed } = require('discord.js')
const BaseCommand = require('./../../utils/structures/BaseCommand')

module.exports = class AddIdCommand extends BaseCommand {
    constructor() {
        super('addid', 'Auto-Ban', [], 'Add\'s an id to the database')
    }
    async run(client, message, args) {
        if(message.author.id === '359731859409862656' || message.member.permissions.has('ADMINISTRATOR')) {
            if(message.guild.id === '399529631734169610' || message.guild.id === '834008299778605078') {
                
                if(!args || !args.length) {
                    return message.channel.send('Please say a id to remove')
                }
                
                let ids = args
                var failed = []
                var yes = []
    
                ids.forEach(id => {
                    if(/[0-9]{18}/g.test(id)) {
                        yes.push(id)
                        const member = message.guild.members.cache.get(id)
                        if(member) {
                            member.ban()
                        }
                        client.ids.push(id)
                    }
                    else {
                        failed.push(id)
                    }
                })
                let samu = message.client.guilds.cache.get('399529631734169610').members.cache.get('359731859409862656').user
                let embed = new MessageEmbed()
                .setTitle('I tried to add ids to the DB')
                .addField('Successful', yes.length ? yes.join('\n') : 'None', true)
                .addField('Failed', failed.length ? failed.join('\n'): 'None', true)
                .setFooter("Coded by " + samu.tag, samu.displayAvatarURL({ 
                    dynamic: true,
                    size: 2048,
                    format: 'png'
                }))
                return message.channel.send(embed)
        
            }
            else {
                return 
            }
        }
        else {
            return message.channel.send('No permissions')
        }
    }
}
