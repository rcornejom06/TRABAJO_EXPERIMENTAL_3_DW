# 🚀 API REST con Node.js, Express y PostgreSQL

Este proyecto implementa una **API REST básica** para gestionar usuarios.  
Fue desarrollada con **Node.js**, **Express** y **PostgreSQL**, como parte de la práctica de desarrollo web.

---

## 📦 Tecnologías utilizadas
- Node.js  
- Express  
- PostgreSQL  
- pg  
- cors  

---

## ⚙️ Instalación y configuración

### 1 Clonar el repositorio
```bash
git clone https://github.com/rcornejom06/TRABAJO_EXPERIMENTAL_3_DW.git
cd proyecto-api


### 2 Instalar dependencias
```bash
npm install

### 3  Crear la base de datos en PostgreSQL
CREATE DATABASE usuarios_db;
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  correo VARCHAR(100),
  contrasena VARCHAR(100)
);


#Configurar la conexión a PostgreSQL

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // tu usuario de PostgreSQL
  host: 'localhost',
  database: 'usuarios_db',  
  password: 'tu_contraseña', //Tu contraseña creada de Postgres
  port: 5432,
});

module.exports = pool;


###Ejecutar

npm run dev


