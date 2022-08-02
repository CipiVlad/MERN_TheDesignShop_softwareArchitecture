const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const {shopRouter} =require("./routes/shop-router.js")
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//ROUTES
app.get('/',(req, res) => {res.send('it works')})

//SHOP
app.use('/shop', shopRouter);

//404 not found
app.use((req, res)=>{
    res.status(404).json({error: '404 Not Found'});
})
app.listen(PORT, ()=> console.log('listening on port',PORT));