function handleputrequest(req,res){
    res.send('This is a simple put request');
}

function handlecreateuser(req,res){
    try{
        const { email,password } = req.body;
        if(email){
            console.log('Email provided');
        } else{
            console.log('Email is not provided');
        }
        if(password){
            console.log('password provided');
        } else{
            console.log('password is not provided');
        }
        console.log(email,password);

        return res.send('user has been created');
    }
    catch(err){
        console.log(err);
        return res.send(err);
    }
} 
module.exports = { handleputrequest , handlecreateuser };