"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("./entities/Post");
var path_1 = __importDefault(require("path"));
exports.default = {
    dbName: 'reddit',
    user: 'postgres',
    password: 'admin',
    type: 'postgresql',
    // debug: !__prod__,
    entities: [Post_1.Post],
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    }
};
