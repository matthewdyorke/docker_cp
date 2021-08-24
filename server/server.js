const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);

app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>{
    knex
    .select('first_column')
    .from('checkpoint_db')
    .where('id', 1)
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(404).json({
        message: 'nothing to be found'
        })
    );
})

app.listen(PORT, ()=>{
    console.log('We ouchyear listenin\'...on 8080')
})