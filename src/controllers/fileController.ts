import { FastifyRequest, FastifyReply } from 'fastify';
import File from '../models/fileModel';

interface CreateFileRequest {
  userId: string;
  fileName: string;
}

export const getFileById = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const fileId = request.params.id;
    const file = await File.findOne({ fileId });
    if (!file) {
      reply.status(404).send({ message: 'File not found' });
      return;
    }
    reply.send(file);
  } catch (error) {
    reply.status(500).send({ message: 'Internal Server Error' });
  }
};

export const getFileByUserId = async (request: FastifyRequest<{ Params: { userId: string } }>, reply: FastifyReply) => {
  try {
    const userId = request.params.userId;
    const files = await File.find({ userId });
    reply.send(files);
  } catch (error) {
    reply.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createFile = async (request: FastifyRequest<{ Body: CreateFileRequest }>, reply: FastifyReply) => {
  try {
    const { userId, fileName } = request.body;
    const file = new File({ userId, fileName });
    await file.save();
    reply.code(201).send(file);
  } catch (error) {
    reply.status(500).send({ message: 'Internal Server Error' });
  }
};

export const deleteFileById = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const fileId = request.params.id;
    const file = await File.findOneAndDelete({ fileId });
    if (!file) {
      reply.status(404).send({ message: 'File not found' });
      return;
    }
    reply.send({ message: 'File deleted successfully' });
  } catch (error) {
    reply.status(500).send({ message: 'Internal Server Error' });
  }
};
