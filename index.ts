import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ success: true, msg: "TS - Open Source " });
});

app.post('/', (req, res) => {
    return res.status(200).json({ success: true, msg: "Added Data " });
});

app.put('/:id', (req, res) => {
    return res.status(200).json({ success: true, msg: "update successfully" });
});

app.delete('/:id', (req, res) => {
    return res.status(200).json({ success: true, msg: "delete successfully" });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server start at ${PORT}`);
});