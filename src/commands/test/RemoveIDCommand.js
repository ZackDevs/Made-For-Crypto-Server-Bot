const BaseCommand = require('../../utils/structures/BaseCommand')

module.exports = class RemoveIdCommand extends BaseCommand {
    constructor() {
        super('removeid', 'Auto-Ban', ['rmvid'], 'Removes Id from Database');
    }

    async run(client, message, args) {
        if(message.author.id === '359731859409862656' || message.member.permissions.has('ADMINISTRATOR')) {
            if(message.guild.id === '399529631734169610' || message.guild.id === '834008299778605078') {
                if(!args || !args.length) {
                    return message.channel.send('Please say a id to remove')
                }
                if(!/[0-9]{18}/g.test(args[0]) || !client.ids.includes(args[0])) {
                    return message.channel.send('Please send a valid id or a id that is in the database')
                }
        
                const array = []
        
                client.ids.forEach(id => {
                    if(id !== args[0]) {
                        array.push(id)
                    }
                });
                client.ids = array
        
                return message.channel.send(`The id ${args[0]} was removed from the database`)
                }
                else {
                    return
                }
            }
            
        
        
        else {
            return message.reply('You don\'t have perms to run that command')
        }
    }
}