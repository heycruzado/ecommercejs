import mysql from "serverless-mysql";

export const conn = mysql({
    config:{
        host: 'localhost',
        user: 'root',
        port: 3306,
        database: 'nextmysql'
    }
});