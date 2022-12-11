# Pokemon Battle Royale Bot

A custom Discord Bot to run the Pokémon Battle Royale game.

## Setup

You'll need to host your own instance of this bot in order to use it.

1. Download [Node.JS LTS](https://nodejs.org/en/).
2. Clone or download this repo.
3. Create a copy of `config-example.ts` named `config.ts`.
   Make sure the copy is in the same folder as the original.
4. Fill in all of the missing values in your copy of `config.ts`.
   Details are written in the file's comments.
   Do NOT edit `config-example.ts`! Only edit `config.ts`.
5. Open a terminal and `cd` into the folder where you've cloned the repository.
6. Run `npm i`.
7. Run `npm start:dev`.

### Creating the config file

BEFORE trying to run the bot for the first time,
you must create a copy of the file `config-example.ts` in the same folder.
Then, you should fill the fields using your values.
See the comments in `config-example.ts` for details.

### The `prod` flag

In development mode, the bot will run using `nodemon`.
For production, I suggest using the PM2 package to
automatically start the bot with your system.
To launch the bot using PM2, first follow the installation instructions
for PM2 (but don't run the PM2 command!)
[here](https://discordjs.guide/improving-dev-environment/pm2.html#setting-up-booting-with-your-system).
Then, run `npm start`.

## Usage

Coming soon!
