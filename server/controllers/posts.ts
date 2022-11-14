import { Request, Response } from "express";
import PostMessage from "../models/postMessage";
const getPosts = async (req: Request, resp: Response) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    resp.status(200).json(postMessages);
  } catch (err) {
    resp.status(404).json({ message: (err as Error).message });
  }
};

const createPost = async (req: Request, resp: Response) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    resp.status(201).json(newPost);
  } catch (err) {
    resp.status(409).json({ message: (err as Error).message });
  }
};

export { getPosts, createPost };
