"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const postMessage_1 = __importDefault(require("../models/postMessage"));
const getPosts = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMessages = yield postMessage_1.default.find();
        console.log(postMessages);
        resp.status(200).json(postMessages);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
});
exports.getPosts = getPosts;
const createPost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    const newPost = new postMessage_1.default(post);
    try {
        yield newPost.save();
        resp.status(201).json(newPost);
    }
    catch (err) {
        resp.status(409).json({ message: err.message });
    }
});
exports.createPost = createPost;
