# Puckhead

A [Discord](https://discord.com/developers/docs/intro) bot for displaying NHL games and scores using the NHL api documented by [Drew Hines](https://gitlab.com/dword4/nhlapi) and [Discord.js](https://discord.js.org/)

## Installation

Clone repository

```bash
git clone https://github.com/jdcheek/discord-bot.git
```

Create a config.json in root directory

```bash
touch config.json
```

Add your bot token, guild id, and client id to config.json.

```javascript
{
"token": "your-bot-token-here",
"guildId": "guild-id",
"clientId": "client-id"
}
```

## Usage

```bash
# run dev server
npm run dev

# run build
npm run build

# run clean build
npm run clean

# start build
npm run start

# build and start
npm run deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
