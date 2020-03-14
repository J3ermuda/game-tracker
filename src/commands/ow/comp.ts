import * as Commando from 'discord.js-commando'

export default class OWCompWiki extends Commando.Command {
  constructor(client: Commando.CommandoClient) {
    super(client, {
      name: 'ow comp',
      aliases: ['overwatch comp'],
      group: 'ow',
      memberName: 'ow comp',
      description: 'Displays competitive stats for the targeted user.',
      details: 'To specify the player, enter their battletag/GamerTag/PSN ID. You can also mention them and, if they linked their account to this bot, it will display their stats. If left blank, the bot will try to show your profile (if you `ow link`ed it).\nTo go to the online docs for this command, go to <https://game-tracker.js.org/#/ow/overwatch?id=ow-comp>',
      format: '{battletag#1234 | GamerTag | PSN ID | @mention} [platform: (pc | xbl | psn)]',
      examples: [
        '`ow comp EeveeA#1716` - Displays competitive stats for `EeveeA#1716` by searching them in the PC category.',
        '`ow comp FANKDA psn` - Displays competitive stats for `FANKDA` by searching them in the PlayStation Network.',
        '`ow comp @YoMama` - Displays competitive stats for the mentioned user, if their account is linked.',
        '`ow comp` - If your account is linked, displays your overwatch stats.'
      ],
      guildOnly: true
    })
  }
}
