### Star-Cafe - Backend

Este repositorio contiene la API del backend para Star-Cafe, diseñada para gestionar el menú, precios y usuarios administradores. La aplicación está construida con Express.js y utiliza MongoDB como base de datos para almacenar productos y usuarios. También implementa autenticación con JWT y middleware para control de roles.

---

### Tecnologías Utilizadas

- **Express.js**: Framework de Node.js para construir la API.
- **MongoDB**: Base de datos NoSQL para gestionar los productos y usuarios.
- **Mongoose**: Librería para modelar los datos en MongoDB.
- **JWT (JSON Web Tokens)**: Autenticación segura para usuarios.
- **bcrypt**: Encriptación de contraseñas.
- **dotenv**: Manejo de variables de entorno.
- **cors**: Habilitación de peticiones de dominios cruzados.
- **nodemon**: Reinicio automático del servidor en desarrollo.

---

### Instalación y Uso

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/LukeLabruna/starcafe-back
   cd cafeteria-backend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:  
   Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

   ```
   SECRET_KEY_TOKEN
   DB_MONGO
   PASSWORD_MONGO
   USER_MONGO
   PORT
   ```

4. **Inicia el servidor**:

   ```bash
   npm start
   ```

   Para desarrollo con reinicio automático:
   ```bash
   npm run dev
   ```

---

### Rutas Disponibles

#### **Productos**

- `GET /api/products/`: Devuelve todos los productos del menú.
- `POST /api/products/`: Agrega un nuevo producto (requiere rol de `admin`).
- `PUT /api/products/`: Actualiza el precio de un producto (requiere rol de `admin`).

#### **Usuarios**

- `POST /api/user/register`: Registra un nuevo usuario.
- `POST /api/user/login`: Inicia sesión y devuelve un token JWT.
- `GET /api/user/isauth`: Verifica si el usuario está autenticado.
- `POST /api/user/logout`: Finaliza la sesión del usuario.

#### **Estado de la API**

- `GET /`: Verifica si la API está funcionando correctamente.

---

### Middleware

- **Autenticación**:  
  Verifica que el usuario esté autenticado utilizando un token JWT.

- **Control de Roles**:  
  Permite verificar si el usuario tiene el rol necesario para realizar ciertas acciones.

---

### Deploy

La API está desplegada en línea y lista para ser consumida por el frontend.

- **Deploy Backend**: [https://starcafe-back.vercel.app/](#)

---

### Frontend Asociado

El frontend que consume esta API está desarrollado con Vite y React. Permite a los clientes ver el menú, los precios, y contactarse por WhatsApp. También incluye un panel de administrador para gestionar los productos.

- **Repositorio Frontend**: [https://github.com/LukeLabruna/starcafe-front](#)
- **Deploy Frontend**: [https://starcafe.com.ar/](#)

---

### Características

- **Gestión de Productos**: Permite listar, agregar y modificar productos del menú.
- **Autenticación Segura**: Uso de JWT para autenticar a los usuarios.
- **Control de Roles**: Validación de permisos para administradores.
- **Escalabilidad**: Preparada para agregar nuevas funcionalidades fácilmente.

---

### Scripts Disponibles

- `npm start`: Inicia el servidor en producción.
- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run lint`: Ejecuta ESLint para mantener el código limpio.

---

© 2024 - Star-Cafe & Luke Labruna

