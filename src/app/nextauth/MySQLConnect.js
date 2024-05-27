import React from 'react'
import mysql from 'mysql2/promise';

const executeQuery = async (query, data) => {

    try {
        const db = await mysql.createConnection({
            host: "localhost",
            port: "3310",
            database: "logindb",
            user: "root",
            password: ""
        })
        const [result] = await db.execute(query, data);
        db.end();
        return result;
    } catch (err) {
        return null;
    }
 
}

export default executeQuery

