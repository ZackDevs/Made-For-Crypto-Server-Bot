const BaseEvent = require('../../utils/structures/BaseEvent');


module.exports = class MemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    if(client.ids.includes(member.id)) {
        member.ban()
    }
  }
}