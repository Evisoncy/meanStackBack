require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello wolrd');
});

app.listen(process.env.HOST_PORT, ()=>{
    console.log('Listening ');
});
