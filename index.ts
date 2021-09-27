import express from "express";

const app: express.Application = express();

app.use('/', require('./router/show_routing'));

const PORT: number = 5000

app.listen(PORT, () => {
    console.log(`server start at PORT ${PORT}`);
});