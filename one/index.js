"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    return res.status(200).json({ success: true, msg: "TS - Open Source " });
});
app.post('/', function (req, res) {
    return res.status(200).json({ success: true, msg: "Added Data " });
});
app.put('/:id', function (req, res) {
    return res.status(200).json({ success: true, msg: "update successfully" });
});
app.delete('/:id', function (req, res) {
    return res.status(200).json({ success: true, msg: "delete successfully" });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("server start at " + PORT);
});
