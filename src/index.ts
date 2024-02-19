import fastify from 'fastify';
import connectDB from './services/dbService';
import fileRoutes from './routes/fileRoutes';

const app = fastify({ logger: true });

// Registering routes
app.register(fileRoutes);

// Connecting to the database
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start the server after the database connection is established
    return app.listen(3000);
  })
  .then(address => {
    console.log(`Server listening at ${address}`);
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
