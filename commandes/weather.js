const axios = require('axios');
const fs = require('fs');
const {zokou} = require('../framework/zokou');
const { writeFile } = require('fs/promises')

zokou({nomCom : "weather" , categorie : "NEW"},async (dest , zk , commandeOptions)=>{
  const {ms,repondre,arg} = commandeOptions ;

      const question = arg.join(' ');
if (!question) return repondre("Give me location...");

await fetch(`https://api.openweathermap.org/data/2.5/weather?q=question&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
  .then(response => response.json())
  .then(data => {
    const { weather, main, wind, coord } = data;
    const { description, main: weatherMain } = weather[0];


await repondre(`Description: ${description}\nMain: ${weatherMain}\nTemperature: ${main.temp}\nFeels Like: ${main.feels_like}\nHumidity: ${main.humidity}\nWind Speed: ${wind.speed}\nLatitude: ${coord.lat}`);

  })
  .catch(error => console.error('Error fetching data:', error));

            

        });
