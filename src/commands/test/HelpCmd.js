const { MessageEmbed } = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand')

module.exports = class HelpCommand extends BaseCommand {
    constructor() {
        super('help', 'Utility', [], 'Shows help command')
    }
    run(client, message, args) {
        var categorys = []
            client.commands.forEach(cmd => {
            if(!categorys.includes(cmd.category)) {
                categorys.push(cmd.category)
            }
            
            });
        if(!args.length) {
            let embed = new MessageEmbed()
            .setTitle('Help Command')
            .setDescription('If you want help for a specific category do `c!help <category>`')
            .setColor('RANDOM')
            categorys.forEach(category => {
                embed.addField(category, `c!help ${category.toLowerCase()}`)
            })
            return message.channel.send(embed)
        }
        else {
            const lowercase = []
            categorys.forEach(category => lowercase.push(category.toLowerCase()))
            if(!lowercase.includes(args[0].toLowerCase())) return message.reply('That isn\'t a valid category.')
            var cmds = []
            let embed1 = new MessageEmbed()
            .setTitle('Commands of ' + args[0])
            client.commands.forEach(cmd => {
                if(cmd.category.toLowerCase() === args[0].toLowerCase() && !cmds.includes(cmd.name)) {
                    embed1.addField(cmd.name + ":", cmd.description)
                    cmds.push(cmd.name)
                }
            })
            return message.channel.send(embed1)
        }
        

    }
}