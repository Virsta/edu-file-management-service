import { FastifyInstance } from 'fastify';
import { getFileById, getFileByUserId, createFile, deleteFileById } from '../controllers/fileController';

export default async function fileRoutes(fastify: FastifyInstance) {
  fastify.get('/files/:id', getFileById);
  fastify.get('/files/user/:userId', getFileByUserId);
  fastify.post('/files', createFile);
  fastify.delete('/files/:id', deleteFileById);
}
