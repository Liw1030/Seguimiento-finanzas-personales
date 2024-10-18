import { createPool } from "mysql";

const pool = createPool({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'L1zeth.15*',
    database: 'Crudfinanzas'
});

export default pool; 