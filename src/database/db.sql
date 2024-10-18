-- Crear base de datos
CREATE DATABASE Crudfinanzas;

-- Usar la base de datos
USE Crudfinanzas;


-- Crear tabla de gastos fijos
CREATE TABLE  gastos_fijos(
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada gasto fijo
    nombre_gastof VARCHAR(100) NOT NULL, -- Nombre del gasto
    valor_gastof DECIMAL(10, 2) NOT NULL, -- Cantidad del gasto
    fecha DATE NOT NULL, -- Fecha del gasto
    categoria ENUM('necesidad', 'deseo', 'ahorro') NOT NULL -- Categoría del gasto
);

CREATE TABLE gastos_variables (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único para cada gasto variable
    nombre_gastov VARCHAR(100) NOT NULL,        -- Nombre del gasto variable
    valor_gastov DECIMAL(10, 2) NOT NULL,      -- Precio del gasto variable
    fecha DATE NOT NULL,                  -- Fecha del gasto variable
    categoria ENUM('necesidad', 'deseo', 'ahorro') NOT NULL -- Categoría del gasto
);



-- Para ver las tablas SHOW TABLES;
-- Para describir las tablas describe (nombre de la tabla);
-- Para ver si tiene datos SELECT * FROM (nombre de la tabla); 
