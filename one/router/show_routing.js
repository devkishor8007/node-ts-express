"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    return res.status(200).json({ success: true, data: { "name": "TS - Open Source ", "appear": 2012, "advantages": "fast,easy and check error on Compile Time" } });
});
router.post('/', function (req, res) {
    return res.status(200).json({ success: true, data: "Added Data " });
});
router.put('/:id', function (req, res) {
    return res.status(200).json({ success: true, data: "update successfully" });
});
router.delete('/:id', function (req, res) {
    return res.status(200).json({ success: true, data: "delete successfully" });
});
module.exports = router;
