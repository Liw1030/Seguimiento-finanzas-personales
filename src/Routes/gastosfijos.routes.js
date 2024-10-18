import { Router } from "express";
import pool from '../Connection.js';

const router = Router();

router.get('/list_gastos_fijos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gastos_fijos'); // Espera la consulta
        res.render('Gastos_Fijos/list_gastos_fijos.hbs', { gastos_fijos: result }); // Ajusta según la salida de tu biblioteca de base de datos
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
