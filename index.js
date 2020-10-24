const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

{
client.on("message", msg => {
  if (msg.content === "/help") {
    msg.reply(
      "catJAM, blipblip, poonz, mxmtoom, toom, toob, koorl, wilm, big brain, wap, tommy rage, tommy stroke, graces bitch, unfunny, doge eat, fundy no, tubbox, pain pog, im literally photosynthesizing, fetus gogy, climb aboard, your mother is a, crabinnit, pet nose, pet mariam, pet merna, pet grace, pet mr javier, pet mr furnace, objects, mc pickup line, deploy the birthday wishes, stfu, impression (name) /help impression for options, where is george, shut up girl i will stab you, im fine i promise, quackimaid, dream bonk, where is tommy, langwij, dream pain, no thoughts head empty, 'tommy, innit?', goorg, soopnoop, yore ma gearlfrwend, quoockity");
  }
});
//catJAM, toom, toob, koorl, objects, mc pickup line, nicki minaj, cardi b, stfu, doja cat, poo, i-, chile, chile anyways so, minecraft, fortnite, impression (name) /help impression for options
client.on("message", msg => {
  if (msg.content === "catJAM") {
    msg.reply(
      "https://tenor.com/view/cat-jam-gif-18110512"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "where is george") {
    msg.reply(
      "https://tenor.com/view/georgenotgound-sneeze-george-sneeze-gif-18361531");
      msg.reply( ":boom:"
     );
  }
});
client.on("message", msg => {
  if (msg.content === "shut up girl i will stab you") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881804466847744/1.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "im fine i promise") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881805104644106/2.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "quackimaid") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881806132117504/3.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "dream bonk") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881807860564008/4.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "where is tommy") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881809168531506/5.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "langwij") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881812302463016/7.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "dream pain") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881812591214612/6.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "no thoughts head empty") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881814474588220/8.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "tommy, innit?") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881815972741150/9.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "goorg") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881817796345916/10.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "soopnoop") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881846981099570/11.jpg"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "yore ma gearlfrwend") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881880560435210/12.png"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "quoockity") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/768881757726179358/768881886633525248/13.png"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "tommy rage") {
    msg.reply(
      "https://media.tenor.co/videos/f9486d7f13acfd21a36138babeeb9416/mp4"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "big brain") {
    msg.reply(
      "https://media.discordapp.net/attachments/762663240605761557/765252140003885097/20201010_105240.png"
    );
  }
});
client.on("message", async msg => {
  if (msg.content === "unfunny") {
    msg.reply(
      "that was unfunny as hell").then((msg)=>{
        setTimeout(() => {
          msg.edit("damn bro that shit was so funny, my laugh will arrive in 3-5 business days.");
        }, 3000).then((msg).react('766292438238494741')
        .catch(none)
      )})}});

client.on("message", msg => {
  if (msg.content === "wap") {
    msg.reply(
      "https://media.discordapp.net/attachments/382192841406808075/765252482657157140/unknown.png"
    );
    msg.reply(
      "worship and prayer"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "climb aboard") {
    msg.reply(
      "https://tenor.com/view/buscatjam-bus-cat-catjam-gif-18587571"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "doge eat") {
    msg.reply(
      "https://cdn.discordapp.com/attachments/262319460461838336/717612193998438437/doge1.gif https://cdn.discordapp.com/attachments/262319460461838336/717612203762647060/doge2.gif https://cdn.discordapp.com/attachments/262319460461838336/717621512051490927/image0-2-3.gif" 
 ); }
});

client.on("message", msg => {
  if (msg.content === "blipblip") {
    msg.reply(
      "https://tenor.com/view/pingu-al-contrario-sottotitolato-wurfenkopf-pingu-sottotitolato-linguaccia-pingu-gif-13228270"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "tommy stroke") {
    msg.reply(
      "https://media.tenor.co/videos/25deeea954bdfed45f4de0c7d1809711/mp4"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet mariam") {
    msg.reply(
      "https://tenor.com/view/gif-18735651"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "fundy no") {
    msg.reply(
      "https://media.tenor.co/videos/a13a209220b61430d419d71ac9b579e2/mp4"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "your mother is a") {
    msg.reply(
      "https://imgur.com/ScCSfwx"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet pingu") {
    msg.reply(
      "https://tenor.com/view/gif-18763667"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet merna") {
    msg.reply(
      "https://media1.tenor.com/images/4e2ff2184f30f4a22ded0cf4d9d767a7/tenor.gif"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "fetus gogy") {
    msg.reply(
      "https://imgur.com/pNNE3ND"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "im literally photosynthesizing") {
    msg.reply(
      "https://imgur.com/vPdjzaP"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "penguin") {
    msg.reply(
      "https://media.discordapp.net/attachments/382192841406808075/764828995224338442/Screen_Shot_2020-10-11_at_3.36.44_PM.png"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "tubbox") {
    msg.reply(
      "https://imgur.com/Rncf8wY"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "mxmtoom") {
    msg.reply(
      "https://imgur.com/mfqYFvx"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "poonz") {
    msg.reply(
      "https://imgur.com/qcyxJE0"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "crabinnit") {
    msg.reply(
      "https://imgur.com/CfuRgtL"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pain pog") {
    msg.reply(
      "https://imgur.com/p4blCwv"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "wilm") {
    msg.reply(
      "https://imgur.com/SayZlld"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet mr javier") {
    msg.reply(
      "https://tenor.com/view/gif-18735712"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet grace") {
    msg.reply(
      "https://tenor.com/view/gif-18735724"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet nose") {
    msg.reply(
      "https://media1.tenor.com/images/ed14532842b22b563671fee03fda9cfa/tenor.gif?itemid=18745461"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "pet mr furnace") {
    msg.reply(
      "https://tenor.com/view/gif-18735742"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "toob") {
    msg.reply(
      "toob. https://imgur.com/Wu0vF81"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "toom") {
    msg.reply(
      "toom. https://imgur.com/xqfIbZB"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "koorl") {
    msg.reply(
      "koorl. https://imgur.com/aSCzrEx"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "/help impression") {
    msg.reply(
      "impression dareen, impression mariam, impression jana, impression pietra, impression grace, impression merna, impression ayman, impression keiffer, impression brenda, impression aiyana"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "nicki minaj") {
    msg.reply("we all have different taste in music and thats completely okay, did u rlly type this command thinking i was gonna diss u");
  }
});

client.on("message", msg => {
  if (msg.content === "cardi b") {
    msg.reply("we all have different taste in music and thats completely okay, did u rlly type this command thinking i was gonna diss u");
  }
});


client.on("message", msg => {
  if (msg.content === "stfu") {
    msg.reply("no u");
  }
});
client.on("message", msg => {
  if (msg.content === "doja cat") {
    msg.reply("we all have different taste in music and thats completely okay, did u rlly type this command thinking i was gonna diss u");
  }
});
client.on("message", msg => {
  if (msg.content === "poo") {
    msg.reply(
      "bro did u not learn abt sumthin called hygiene u disgusting ass"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "i-") {
    msg.reply("YOU WHAT HUH SAY IT SPIT IT THE FUCK OUT STOP STUTTERING");
  }
});
client.on("message", msg => {
  if (msg.content === "chile") {
    msg.reply("WHAT ABOUT CHILE HUH? U DISSSING WESTERN SOUTH AMERICA????");
  }
});
client.on("message", msg => {
  if (msg.content === "chile anyways so") {
    msg.reply("WHAT ABOUT CHILE HUH? U DISSSING WESTERN SOUTH AMERICA????");
  }
});
client.on("message", msg => {
  if (msg.content === "minecraft") {
    msg.reply("LETS GOOOOOOOOOOOOOOOOOOOOOOOOO");
  }
});
client.on("message", msg => {
  if (msg.content === "impression dareen") {
    msg.reply("niCkI mINAj niCKi mInAJ NICKI MINAJ");
  }
});
client.on("message", msg => {
  if (msg.content === "impression mariam") {
    msg.reply("hAhA yOU plAy mINEcrAft tOo? LETs pLAy a gAmE foR 7 yeAr OlDS");
  }
});
client.on("message", msg => {
  if (msg.content === "impression grace") {
    msg.reply(
      "gUYS guyS anImE diD yOu knOW AnImE chAeActErS pLAy vOllEybAlL oMg iSNt hE sO CuTE lEt mE SPEnD the nExt 10 yEARs oN fAnarT"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "impression jana") {
    msg.reply("mINEcRAft hAhA guYS diD yoU knOw IM a gAMER GiRrLLL???");
  }
});
client.on("message", msg => {
  if (msg.content === "impression keiffer") {
    msg.reply(
      "gUYS WhAT tHE hELl IS SlEEP i knoW evERYonES sEcrEtS boW doWn tO mE hAhA yEaH gUYS i sToLE 10 RIyAlS FRoM a tEaChER hOW COOl Am I"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "impression ayman") {
    msg.reply(
      "haHA guYs do YOU liKE fOoTbALl And oaSiS?? HAHA jaNa sOUnDS liKe vAginA iM bRi-iSh"
    );
  }
});
client.on("message", msg => {
  if (msg.content === "impression pietra") {
    msg.reply("haHA guYs dID yOU KnoW iM alSo A gMAER gIRl hHAHA");
  }
});

client.on("message", msg => {
  if (msg.content === "impression aiyana") {
    msg.reply("hAhA whAt iS a soCIAl lIFe");
  }
});
client.on("message", msg => {
  if (msg.content === "fortnite") {
    msg.reply("fortshite");
  }
});
client.on("message", msg => {
  if (msg.content === "impression merna") {
    msg.reply("*bIRd nOiSEs*");
  }
});
client.on("message", msg => {
  if (msg.content === "impression brenda") {
    msg.reply("*quiet art noises*");
  }
});
}
client.on("message", msg => {
  if (msg.content === "graces bitch") {
    msg.reply(randomMessage());
function randomMessage() {
  var randomNumber = Math.round(Math.random() * 13);
  switch (randomNumber) {
    case 0:
      return "https://media.discordapp.net/attachments/516969917543612416/765823469035585546/image0.jpg?width=490&height=488";
    case 1:
      return "https://media.discordapp.net/attachments/516969917543612416/765823469204013066/image1.jpg?width=502&height=488";
    case 2:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765823469437845514/image2.jpg";
    case 3:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765823469602340884/image3.jpg";
    case 4:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765823676331327499/image0.jpg";
    case 3:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824262426198026/A00A5FCF-2B21-4821-B9FD-3C9199AAD9DB.png";
    case 5:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824262714949673/B257F95A-4EDD-4B6B-B7D6-DD9CF8F64999.jpeg";
    case 6:
      return "https://media.discordapp.net/attachments/516969917543612416/765824264245870592/E33F24D5-CEAF-4449-B489-D2A1B3788866.jpeg?width=488&height=488";
    case 7:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824266745806878/2426391E-20BB-47D3-A89C-FF61DA272533.jpeg";
    case 8:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824655785197628/D5D99BEC-E65D-488F-9E7A-FBB7B3E719AA.jpeg";
    case 9:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824658192203817/4FACF531-3E56-40D6-8981-17AF9ADF0741.jpeg";
    case 10:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824658934726676/C68B992A-4E5B-40A6-93B9-2A60A5ECA2B7.jpeg";
    case 11:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824659106299954/652B573D-3853-4D55-BAEA-C124DD4116C8.jpeg";
    case 12:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824662549954560/36B15973-9FC7-4A73-A055-A926DD01B743.jpeg";
    case 13:
      return "https://cdn.discordapp.com/attachments/516969917543612416/765824663380426772/9DDB5DC2-904C-4DA2-89D7-5DDDE8266FFD.jpeg"; 
  }}}});

client.on("message", msg => {
  if (msg.content === "mc pickup line") {
    msg.reply(randomMessage());
function randomMessage() {
  var randomNumber = Math.round(Math.random() * 67);
  switch (randomNumber) {
    case 0:
      return "Are you a block of dirt? Because I dig you.	";
    case 1:
      return "Are you a chest? Because I've got a lot to put in you.";
    case 2:
      return "Are you a creeper? Because you make my heart explode	";
    case 3:
      return "Are you a diamond pickaxe? Because I'm harder than obsidian	";
    case 4:
      return "Are you a lever? Because you turn me on.	";
    case 3:
      return "Are you a pig? Because I could put a saddle on u and ride u all night.	";
    case 5:
      return "Are you a pig? Because I wanna ride you.	";
    case 6:
      return "Are you a pumpkin? Because enderman loves you.	";
    case 7:
      return "Are you a redstone torch? Because you're activating my sticky piston	";
    case 8:
      return "Are you a skeleton? Because your so thin	";
    case 9:
      return "Are you a slimeball? Because you make my piston sticky	";
    case 10:
      return "Are you a torch? Because you light up my world.	";
    case 11:
      return "Are you a Witch? Because I'm under your spell	";
    case 12:
      return "Are you an enderman? Because I wanna look at your eyes	";
    case 13:
      return "Are you bone meal? Because you make my wood grow!	";
    case 14:
      return "Are you diamond armor? Because im into you!	";
    case 15:
      return "Are you glowstone baby? Because you light up my world!	";
    case 16:
      return "Are you Gravel? Because im falling for you!	";
    case 17:
      return "Are you Steve? Because you're so cute	";
    case 18:
      return "Are you the End? Because you're out of this world!	";
    case 19:
      return "Are you the nether? Because you're hot	";
    case 20:
      return "Baby you're my mob grinder!	";
    case 21:
      return "Baby, I'm a creeper and you're the moon. I'm gonna cry, because you're gonna leave me soon.	";
    case 22:
      return "Can I tame you and ride your forever?	";
    case 23:
      return "Did i mention youre looking opti-FINE tonight.	";
    case 24:
      return "Do you have a Diamond Pickaxe? Because I'm as hard as Obsidian.	";
    case 25:
      return "Do you want to come over and play some Minecraft on Saturday night?	";
    case 26:
      return "Girl are you obsidian? Because I heard you like it hard	";
    case 27:
      return "Hey baby, let's go to my house and change your spawn location.	";
    case 28:
      return "Hey baby, wanna come back to my base and let me explode my creeper in your mine tunnel?	";
    case 29:
      return "Hey Girl! Are u a tree farm? Because every time I see you I get wood.	";
    case 30:
      return "Hey, baby. Let's make like a couple of NPCs on the set of Minecraft Monster's, Inc.	";
    case 31:
      return "I am falling in love with you. Let's meet up. I swear I am not a crazy old man.	";
    case 32:
      return "I am not a professional miner, but I can make your bed-rock	";
    case 33:
      return "I know I'm not an Endermen but I just want to pick you up and take you away with me.	";
    case 34:
      return "I must be gravel, because I'm falling for you.	";
    case 35:
      return "I will do all the digging; you just sit back and relax.	";
    case 36:
      return "I will let you chop my wood with your mouth	";
    case 37:
      return "I will need a pickaxe to dig the diamond out of your eyes.	";
    case 38:
      return "I'd like to fertilize your crops with my bonemeal.	";
    case 39:
      return "I'm like a zombie and you're like the sun - you light me on fire!	";
    case 40:
      return "I'm a pig… You've got a saddle… What are we waiting for?	";
    case 41:
      return "I'm like a zombie and you're like the sun.. You light me on fire.	";
    case 42:
      return "I'm like TNT… Touch me and I go boom.	";
    case 43:
      return "If I was a creeper, I'd go to your bedroom and explode all over you.	";
    case 44:
      return "If you are an enderdragon, can I take care for your egg	";
    case 45:
      return "If you were ore, I'd mine you all night long!	";
    case 46:
      return "Is that a creeper in your pants or are you just happy to see me?";
    case 47:
      return "Let's enter the love mode and breed.	";
    case 48:
      return "Let's explore new territory together!	";
    case 49:
      return "Lets go back to my place , I will show you my biome.	";
    case 50:
      return "MY FACE IS UP HERE! But my diamond sword is down here	";
    case 51:
      return "My love for you is like the creeper. I will chase you down until I explode.	";
    case 52:
      return "No I'm not dirt. I'm gravel, because I'm falling for you.	";
    case 53:
      return "Redstone is red, Lapis is blue. I would sacrifice my diamonds just to be with you.	";
    case 54:
      return "Speaking of pistons are you a slime ball cause you're making my piston sticky.	";
    case 55:
      return "Want me to touch your fuel rod?	";
    case 56:
      return "Whats up girl wanna go strip mining?	";
    case 57:
      return "When I saw you, my Sapling grew!	";
    case 58:
      return "Why dont you take off that armor and lets see what your skin looks like.	";
    case 59:
      return "Will you go on a date with me? Come over to my place, I will prepare a feast of roasted pork and golden apples.	";
    case 60:
      return "You are about to make my creeper explode!	";
    case 61:
      return "You have beautiful skin.	";
    case 62:
      return "You must be a pressure plate, because you turn me on.	";
    case 63:
      return "You must be a redstone torch, because you're extending my piston!	";
    case 64:
      return "You must be a torch, because you light up my cave.	";
    case 65:
      return "You must be from nether, because you are out of this world.	";
    case 66:
      return "You must be ice, because I've been waiting to pick you up for a long time.	";
    case 67:
      return "You must be made of bonemeal, because baby you make me grow 10 feet tall	";
  }
}}
});


client.on("message", msg => {
  if (msg.content === "deploy the birthday wishes") {
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
    msg.reply("HAPPY BIRTHDAY!");
  }
});

client.login(process.env.BOT_TOKEN);