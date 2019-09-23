"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var testMiddleware_1 = require("./middlewares/testMiddleware");
var app = express_1.default();
app.use(testMiddleware_1.testMiddleware);
var PORT = 4000;
app.listen(PORT, function () { return console.log("Listening on port " + PORT); });
