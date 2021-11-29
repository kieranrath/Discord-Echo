**WARNING**
Self-Bots are against Discords Terms of Service - Use At Your Own Risk!
https://i.imgur.com/brdTWGN.png

# DISCORD ECHO 
- A simple discord.js self-bot that can echo the messages from a specified Discord channel to your own Server, returning the messages to you and others in a clean format. 

Use 
- To relay/echo the messages from a specific/private discord channel to another desired channel. 

REQUIREMENTS:
- A Discord Account token which has developer tools enabled and has access to the desired channel you wish to echo 
- A Discord Account which has server permissions to create webhooks 
- Discord.js @V11 **IMPORANT** Self-bots are no longer supported with more recent versions of discord. Discord.js@v11 is required for this program to work
- Node.js installed - https://nodejs.org/en/


**INSTRUCTIONS / HOW TO USE**

1. Clone Or Download this repository (if you are prompted to install dependencies use "npm install discord.js@11")

2. Open the config.json and fill the required fields (see below and the config.json.example for help)

3. Either use the provided launchecho.bat or run "node echo.js" to start the bot

**FILLING OUT THE JSON FIELDS**

token - The discord token of the account which has access to the desired channel to echo. See the FAQ for how to   
       find your discord account token.

channelID - The channel ID number of the discord text channel you want to echo
          - To find a channel ID you need to enable developer mode under the "Advanced" Tab in your discord settings.
          Once enabled you will can right click any text channel on discord and "COPY ID". Copy the desired text channels ID and post it in the channelID field

webhookURL - The Url of the webhook where you want the echoed messages to show up to create a webhook 
           - To create a webhook, right click a discord channel which you have permissions to edit, select "Edit Channel" option. Once in the settings click the "Integrations" tab. From there you can click on the "create webhook" button and copy the URL into the webHookURL field


FAQ:

HOW TO FIND YOUR DISCORD TOKEN:
https://www.youtube.com/watch?v=3qzpmTIQ-Gs

HOW TO ENABLE DEVELOPER TOOLS 
https://www.youtube.com/watch?v=_2gpDnAdkbo

Q: I'm getting a 'node' is not recognized as an internal or an external command error when trying to start the script
A: Ensure node.js is installed and the node.js environment variable exists

