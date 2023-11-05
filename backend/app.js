const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
dotenv.config({ path: 'config/config.env' });


app.use(express.json());
app.use(cors({
    origin: [`http://localhost:3000`],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());


mongoose.connect(process.env.DBURL)
    .then(res => server)
    .catch(err => console.log(`Error in server: ${err}`))

const userRoutes = require('./routes/userRoute');

app.use('/api/v1', userRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
})



