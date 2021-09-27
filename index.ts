import express from "express";

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, msg: "TS - Open Source " });
});

app.post('/', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, msg: "Added Data " });
});

app.put('/:id', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, msg: "update successfully" });
});

app.delete('/:id', (req: express.Request, res: express.Response) => {
    return res.status(200).json({ success: true, msg: "delete successfully" });
});

const PORT: number = 5000
app.listen(PORT, () => {
    console.log(`server start at PORT ${PORT}`);
});