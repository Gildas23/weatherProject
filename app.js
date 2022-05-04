const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=yaounde&appid=dd9a63ac6ac459d8b25561bb68870ebd&units=metric";


  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      var wDescription = weatherData.list[0].weather[0].description;
      console.log(wDescription);

    });

  });

  res.send("server is up and running");
});





app.listen(3000,function(){
  console.log("server running on port 3000");
});
