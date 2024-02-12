const express = require('express');
const mongoose = require('mongoose')
const User = require('./models/User')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://rootadmin:m5NvavxMIOPodOKz@clusterrl.wd5fhyo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/users', async (req, res) => {
    try {
        // Read and parse the JSON file
        const userData = await fs.readFile('UserData.json', 'utf8');
        const users = JSON.parse(userData);

        // Insert each user object into the database
        const insertedUsers = await User.insertMany(users);

        res.status(201).send(insertedUsers);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});