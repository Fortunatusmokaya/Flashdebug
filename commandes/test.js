"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/franceking1/Flash-Md';
var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';


    fetch(githubRepo)
        .then(response => response.json())
        .then(data => {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };

const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

const gitdata = `FLASH - MD
*Repository:* ${data.html_url}
✨ *Stars:* ${repoInfo.stars}
🧧 *Forks:* ${repoInfo.forks}
📅 *Release Date:* ${releaseDate}
🕐 *Last Update:* ${lastUpdateDate}
👨‍💻 *Owner:* ${repoInfo.owner}`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });


});

   /* let z = 'Hello This is  *FLASH-MD* \n\n ' + "The Following is *FLASH-MD Repo.*";
    let d = ' https://github.com/franceking1/Flash-Md';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
