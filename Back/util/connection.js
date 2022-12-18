const {createPool}=require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"evital",
    connectionLimit:10
});

pool.getConnection((err,connection)=>{
    if(err) throw err;
    else console.log("connected");
})
// console.log(pool);

module.exports = pool;
