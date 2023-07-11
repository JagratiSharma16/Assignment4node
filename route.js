const express = require('express');
const router = express.Router();
const models = require('./model');


router.get('/', async (req, res) => {
    try {
        const db = await models.find();
        res.json(db);
    } catch (err) {
        res.send('Error' + err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const db1 = await models.findById(req.params.id);
        res.json(db1);
    } catch (err) {
        res.send('Error' + err);
    }
})

router.post('/', async (req, res) => {
    const db = new models({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const a1 = await db.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const db1 = await models.findById(req.params.id);
        db1.password = req.body.password;
        const a1 = await db1.save();
        res.json(a1);
    }catch{
        res.send('error');
    }
})


module.exports = router;

// function handlegetrequest(req,res){
//     try{

//     }catch(err){
//         res,se nd('Error'+err);
//     }
    // res.send ('get request...');
// }

