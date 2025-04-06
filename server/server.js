const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { connectToMongoDB } = require('./database');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

async function startServer() {
    try {
        await connectToMongoDB();
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();