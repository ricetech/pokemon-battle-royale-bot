# Pokemon Battle Royale Bot

A custom Discord Bot to run the Pokemon Battle Royale game.

## Setup

You'll need to host your own instance of this bot in order to use it.

1. Download [Node.JS LTS](https://nodejs.org/en/).
2. Clone or download this repo.
3. Set up the `.env` file as detailed below.
4. Open a terminal and `cd` into the folder where you've cloned the repository.
5. Run `npm i`.
6. Run `npm start:dev`.

### Creating a `.env` file

You will need to create a `.env` file in the root folder with the following format:

```
DISCORD_TOKEN=your-bot-token-here
CLIENT_ID=your-client-id-here
PROD=false
```

You'll need to set up a bot application to get a token and client ID by following the instructions [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### The `prod` flag

In the `.env` file, PROD is false by default, which means the bot will run using `nodemon`. For production, I suggest using the PM2 package to manage the bot. To launch the bot using PM2, first follow the installation instructions for PM2 (but don't run the PM2 command!) [here](https://discordjs.guide/improving-dev-environment/pm2.html#setting-up-booting-with-your-system). Then, change the `PROD` flag in `.env` to `true`. Finally, run `npm start`.

## Usage

Coming soon!
