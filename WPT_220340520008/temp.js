const express = require("express");
const app = express();

const mysql = require('mysql2');
 app.use(express.static("sf"));
 app.listen(550);

 let databaseparameters ={
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'aditya',
	port:3306

 }
 
    const connection = mysql.createConnection(databaseparameters);

    let output = { status:false,book:{bookid:0,bookname:"",price:0}}

    connection.query("select * from book where bookid = ?", [bookid], (err, res1) => {
        if (err) {
           
			console.log("trouble " + err);
        } else {
            if(res1.length>0){
            output.status =true;
			output.book=res1[0];
        }
		else{
            console.log("book not found");
        }
    }
        resp.send(output);
    });

    