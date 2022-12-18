const pool=require('../util/connection');
exports.login = (req, res, next) => {
    const data=req.body.data;

    pool.query(`select count(*) as cnt from user where email="${data.email}" and password="${data.password}";`,(err,result)=>{
        if(err){
            console.log(err);
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            // console.log(result[0].cnt);
            res.status(201).json({cnt:result[0].cnt});
        }
    });
}

exports.register = (req, res, next) => {
    const data=req.body.data;
    console.log("in register");

    pool.query(`insert into user values("${data.email}","${data.password}");`,(err,result)=>{
        if(err){
            res.json({err:err.sqlMessage,errno:err.errno});
        }else{
            res.status(201).json({msg:"inserted successful"})
        }
    });
   
    return;
}