"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMiddleware = function (req, res, next) {
    console.log('test middleware');
    next();
};
