const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const commando = require("discord.js-commando");
const bot = new commando.Client();

bot.on("message", function(message) {
  if (message.content == "!factionsattack") {
    message.reply("Listing suitable **attacking** factions: \n\n<:r2arverni:721268309630124093> Arverni \n<:r2athens:721268309416345672> Athens\n<:r2bactria:721268309701689354> Bactria \n<:r2boii:721268309319876639> Boii \n<:r2carthage:721268309496168468> Carthage \n<:r2epirus:721268309093253212> Epirus \n<:r2galatia:721268309521203210> Galatia \n<:r2getae:721268309613609082> Getae \n<:r2kush:721268309357625355> Kush \n<:r2macedon:721268309672198205> Macedon \n<:r2masaesyli:721268309458419742> Masaesyli \n<:r2massilia:721268478367105054> Massilia \n<:r2nervii:721268309626191942> Nervii \n<:r2egypt:721268309382660208> Egypt \n<:r2selecuid:721268309252898868> Seleucid \n<:r2suebi:721268309949022248> Suebi \n<:r2syracuse:721268309521072178> Syracuse \n<:r2tylis:721268309626191932> Tylis \n\n*(This is not meant as a definitive list as one could attack with any faction in theory. These factions do however provide certain qualities that make them suitable for siege attacks. Some will be harder to play than others, but all are viable attacking options in the end.)* \n\n```If you have any questions on how to best utilize a specific faction, feel free to reach out to more experienced players (look for players who have the Strategist role).```");
  }
  if (message.content == "!factionsdefend") {
    message.reply("Listing suitable **defending** factions: \n\n<:r2ardiaei:721268309621735488> Ardeai \n<:r2arevaci:721268309416476753> Arevaci \n<:r2arverni:721268309630124093> Arverni \n<:r2athens:721268309416345672> Athens\n<:r2bactria:721268309701689354> Bactria \n<:r2boii:721268309319876639> Boii \n<:r2carthage:721268309496168468> Carthage \n<:r2cimmeria:721268309689106493> Cimmeria \n<:r2epirus:721268309093253212> Epirus \n<:r2galatia:721268309521203210> Galatia \n<:r2getae:721268309613609082> Getae \n<:r2iceni:721268309990834216> Iceni \n<:r2kush:721268309357625355> Kush \n<:r2lusitani:721268309504426024> Lusitani \n<:r2macedon:721268309672198205> Macedon \n<:r2masaesyli:721268309458419742> Masaesyli \n<:r2massilia:721268478367105054> Massilia \n<:r2nabatea:721268309349236746> Nabatea \n<:r2nervii:721268309626191942> Nervii \n<:r2odryssia:721268309873524786> Odryssia \n<:r2parthia:721268309055635489> Parthia \n<:r2pergamon:721268309433253888> Pergamon \n<:r2pontus:721268309215019049> Pontus \n<:r2egypt:721268309382660208> Egypt \n<:r2saba:721268309932376104> Saba \n<:r2selecuid:721268309252898868> Seleucid \n<:r2sparta:721268309386985572> Sparta \n<:r2suebi:721268309949022248> Suebi \n<:r2syracuse:721268309521072178> Syracuse \n<:r2tylis:721268309626191932> Tylis \n\n*(This is not meant as a definitive list as one could defend with any faction in theory. These factions do however provide certain qualities that are useful in siege defenses. Some will be harder to play than others, but all are viable defending options in the end.)* \n\n```If you have any questions on how to best utilize a specific faction, feel free to reach out to more experienced players (look for players who have the Strategist role).```");
  }
  if (message.content == "!rollfaction") {
    var rollrandom = Math.floor(Math.random() * 33) + 1;
    if (rollrandom == 1) {
      var rollrandtext = "<:r2ardiaei:721268309621735488> **Ardeai**"
    }
    if (rollrandom == 2) {
      var rollrandtext = "<:r2arevaci:721268309416476753> **Arevaci**"
    }
    if (rollrandom == 3) {
      var rollrandtext = "<:r2armenia:721268309970124801> **Armenia**"
    }
    if (rollrandom == 4) {
      var rollrandtext = "<:r2arverni:721268309630124093> **Arverni**"
    }
    if (rollrandom == 5) {
      var rollrandtext = "<:r2rome:721268309131001968> **Rome**"
    }
    if (rollrandom == 6) {
      var rollrandtext = "<:r2athens:721268309416345672> **Athens**"
    }
    if (rollrandom == 7) {
      var rollrandtext = "<:r2bactria:721268309701689354> **Bactria**"
    }
    if (rollrandom == 8) {
      var rollrandtext = "<:r2boii:721268309319876639> **Boii**"
    }
    if (rollrandom == 9) {
      var rollrandtext = "<:r2carthage:721268309496168468> **Carthage**"
    }
    if (rollrandom == 10) {
      var rollrandtext = "<:r2cimmeria:721268309689106493> **Cimmeria**"
    }
    if (rollrandom == 11) {
      var rollrandtext = "<:r2colchis:721268310049816626> **Colchis**"
    }
    if (rollrandom == 12) {
      var rollrandtext = "<:r2epirus:721268309093253212> **Epirus**"
    }
    if (rollrandom == 13) {
      var rollrandtext = "<:r2galatia:721268309521203210> **Galatia**"
    }
    if (rollrandom == 14) {
      var rollrandtext = "<:r2getae:721268309613609082> **Getae**"
    }
    if (rollrandom == 15) {
      var rollrandtext = "<:r2iceni:721268309990834216> **Iceni**"
    }
    if (rollrandom == 16) {
      var rollrandtext = "<:r2kush:721268309357625355> **Kush**"
    }
    if (rollrandom == 17) {
      var rollrandtext = "<:r2lusitani:721268309504426024> **Lusitani**"
    }
    if (rollrandom == 18) {
      var rollrandtext = "<:r2macedon:721268309672198205> **Macedonia**"
    }
    if (rollrandom == 19) {
      var rollrandtext = "<:r2masaesyli:721268309458419742> **Masaesyli**"
    }
    if (rollrandom == 20) {
      var rollrandtext = "<:r2massilia:721268478367105054> **Massilia**"
    }
    if (rollrandom == 21) {
      var rollrandtext = "<:r2nabatea:721268309349236746> **Nabatea**"
    }
    if (rollrandom == 22) {
      var rollrandtext = "<:r2nervii:721268309626191942> **Nervii**"
    }
    if (rollrandom == 23) {
      var rollrandtext = "<:r2odryssia:721268309873524786> **Odryssia**"
    }
    if (rollrandom == 24) {
      var rollrandtext = "<:r2parthia:721268309055635489> **Parthia**"
    }
    if (rollrandom == 25) {
      var rollrandtext = "<:r2pergamon:721268309433253888> **Pergamon**"
    }
    if (rollrandom == 26) {
      var rollrandtext = "<:r2pontus:721268309215019049> **Pontus**"
    }
    if (rollrandom == 27) {
      var rollrandtext = "<:r2egypt:721268309382660208> **Egypt**"
    }
    if (rollrandom == 28) {
      var rollrandtext = "<:r2saba:721268309932376104> **Saba**"
    }
    if (rollrandom == 29) {
      var rollrandtext = "<:r2selecuid:721268309252898868> **Seleucid**"
    }
    if (rollrandom == 30) {
      var rollrandtext = "<:r2suebi:721268309949022248> **Suebi**"
    }
    if (rollrandom == 31) {
      var rollrandtext = "<:r2syracuse:721268309521072178> **Syracuse**"
    }
    if (rollrandom == 32) {
      var rollrandtext = "<:r2tylis:721268309626191932> **Tylis**"
    }
    if (rollrandom == 33) {
      var rollrandtext = "<:r2sparta:721268309386985572> **Sparta**"
    }
    var rollatt = Math.floor(Math.random() * 18) + 1;
    if (rollatt == 1) {
      var rollatttext = "<:r2arverni:721268309630124093> **Arverni**"
    }
    if (rollatt == 2) {
      var rollatttext = "<:r2athens:721268309416345672> **Athens**"
    }
    if (rollatt == 3) {
      var rollatttext = "<:r2bactria:721268309701689354> **Bactria**"
    }
    if (rollatt == 4) {
      var rollatttext = "<:r2boii:721268309319876639> **Boii**"
    }
    if (rollatt == 5) {
      var rollatttext = "<:r2carthage:721268309496168468> **Carthage**"
    }
    if (rollatt == 6) {
      var rollatttext = "<:r2epirus:721268309093253212> **Epirus**"
    }
    if (rollatt == 7) {
      var rollatttext = "<:r2galatia:721268309521203210> **Galatia**"
    }
    if (rollatt == 8) {
      var rollatttext = "<:r2getae:721268309613609082> **Getae**"
    }
    if (rollatt == 9) {
      var rollatttext = "<:r2kush:721268309357625355> **Kush**"
    }
    if (rollatt == 10) {
      var rollatttext = "<:r2macedon:721268309672198205> **Macedonia**"
    }
    if (rollatt == 11) {
      var rollatttext = "<:r2masaesyli:721268309458419742> **Masaesyli**"
    }
    if (rollatt == 12) {
      var rollatttext = "<:r2massilia:721268478367105054> **Massilia**"
    }
    if (rollatt == 13) {
      var rollatttext = "<:r2nervii:721268309626191942> **Nervii**"
    }
    if (rollatt == 14) {
      var rollatttext = "<:r2egypt:721268309382660208> **Egypt**"
    }
    if (rollatt == 15) {
      var rollatttext = "<:r2selecuid:721268309252898868> **Seleucid**"
    }
    if (rollatt == 16) {
      var rollatttext = "<:r2suebi:721268309949022248> **Suebi**"
    }
    if (rollatt == 17) {
      var rollatttext = "<:r2syracuse:721268309521072178> **Syracuse**"
    }
    if (rollatt == 18) {
      var rollatttext = "<:r2tylis:721268309626191932> **Tylis**"
    }
    var rolldef = Math.floor(Math.random() * 30) + 1;
    if (rolldef == 1) {
      var rolldeftext = "<:r2ardiaei:721268309621735488> **Ardeai**"
    }
    if (rolldef == 2) {
      var rolldeftext = "<:r2arevaci:721268309416476753> **Arevaci**"
    }
    if (rolldef == 3) {
      var rolldeftext = "<:r2arverni:721268309630124093> **Arverni**"
    }
    if (rolldef == 4) {
      var rolldeftext = "<:r2athens:721268309416345672> **Athens**"
    }
    if (rolldef == 5) {
      var rolldeftext = "<:r2bactria:721268309701689354> **Bactria**"
    }
    if (rolldef == 6) {
      var rolldeftext = "<:r2boii:721268309319876639> **Boii**"
    }
    if (rolldef == 7) {
      var rolldeftext = "<:r2carthage:721268309496168468> **Carthage**"
    }
    if (rolldef == 8) {
      var rolldeftext = "<:r2cimmeria:721268309689106493> **Cimmeria**"
    }
    if (rolldef == 9) {
      var rolldeftext = "<:r2epirus:721268309093253212> **Epirus**"
    }
    if (rolldef == 10) {
      var rolldeftext = "<:r2galatia:721268309521203210> **Galatia**"
    }
    if (rolldef == 11) {
      var rolldeftext = "<:r2getae:721268309613609082> **Getae**"
    }
    if (rolldef == 12) {
      var rolldeftext = "<:r2iceni:721268309990834216> **Iceni**"
    }
    if (rolldef == 13) {
      var rolldeftext = "<:r2kush:721268309357625355> **Kush**"
    }
    if (rolldef == 14) {
      var rolldeftext = "<:r2lusitani:721268309504426024> **Lusitani**"
    }
    if (rolldef == 15) {
      var rolldeftext = "<:r2macedon:721268309672198205> **Macedonia**"
    }
    if (rolldef == 16) {
      var rolldeftext = "<:r2masaesyli:721268309458419742> **Masaesyli**"
    }
    if (rolldef == 17) {
      var rolldeftext = "<:r2massilia:721268478367105054> **Massilia**"
    }
    if (rolldef == 18) {
      var rolldeftext = "<:r2nabatea:721268309349236746> **Nabatea**"
    }
    if (rolldef == 19) {
      var rolldeftext = "<:r2nervii:721268309626191942> **Nervii**"
    }
    if (rolldef == 20) {
      var rolldeftext = "<:r2odryssia:721268309873524786> **Odryssia**"
    }
    if (rolldef == 21) {
      var rolldeftext = "<:r2parthia:721268309055635489> **Parthia**"
    }
    if (rolldef == 22) {
      var rolldeftext = "<:r2pergamon:721268309433253888> **Pergamon**"
    }
    if (rolldef == 23) {
      var rolldeftext = "<:r2pontus:721268309215019049> **Pontus**"
    }
    if (rolldef == 24) {
      var rolldeftext = "<:r2egypt:721268309382660208> **Egypt**"
    }
    if (rolldef == 25) {
      var rolldeftext = "<:r2saba:721268309932376104> **Saba**"
    }
    if (rolldef == 26) {
      var rolldeftext = "<:r2selecuid:721268309252898868> **Seleucid**"
    }
    if (rolldef == 27) {
      var rolldeftext = "<:r2suebi:721268309949022248> **Suebi**"
    }
    if (rolldef == 28) {
      var rolldeftext = "<:r2syracuse:721268309521072178> **Syracuse**"
    }
    if (rolldef == 29) {
      var rolldeftext = "<:r2tylis:721268309626191932> **Tylis**"
    }
    if (rolldef == 30) {
      var rolldeftext = "<:r2sparta:721268309386985572> **Sparta**"
    }
    message.reply( "I rolled the following factions: \n" + rollrandtext + " — *Random option* \n" + rollatttext + " — *Attacking option* \n" + rolldeftext + " — *Defending option*" ) 
    }
  }
  
);

bot.on("ready", () => {
  console.log(`Logged in`);
});

bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});



bot.login(process.env.TOKEN);
