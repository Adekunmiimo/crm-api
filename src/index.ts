import { MongoClient } from "mongodb";
import express from "express";

async function start() {
    try {
        const app = express();
        const mongoClient = await MongoClient.connect('mongodb://localhost:27017/crm-api');
        const db = mongoClient.db(); // Get the database instance

        // Middleware to inject the database
        app.use((req, res, next) => {
            req.db = db; // Attach db to request object
            next();
        });

        // JSON parser middleware
        app.use(express.json({ limit: '500kb' }));

        // Routes
        app.use('/customers', require('./routes/customers'));

        // Start server
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error(error);
    }
}

start();
