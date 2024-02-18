
const express = require("express");

const application = express();

application.get("/", (request, response) =>
{
    response.send("Hello, world!");
});

const server = application.listen(process.env.PORT || 3030, () =>
{
    const serverAddress = server.address().address;
    const serverPort = server.address().port;
    
    console.log(`Client is working on ${serverAddress}:${serverPort}`);
});