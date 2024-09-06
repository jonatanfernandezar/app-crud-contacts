
## Demo parte 1 -> (2 min)

https://github.com/user-attachments/assets/e7eeddfd-17ba-45ed-a0be-97e36129fa3e

## Demo parte 2 -> (2 min)

https://github.com/user-attachments/assets/f3dcbf91-33ce-4f0c-8bf4-2bac06608a57

## Demo parte 3 -> (2 min)

https://github.com/user-attachments/assets/dc4ed1e9-908d-4526-9f59-cb9252606025

## Imagenes del proyecto:
Estas son las imagenes de la interfaz del proyecto hecho en Angular, Express y MySQL.

## Login: 
![LoginCRUD](https://github.com/user-attachments/assets/d492202a-de08-4132-a04a-0c77354b0687)

## Sign up:
![SignupCRUD](https://github.com/user-attachments/assets/2263b614-c9f9-4375-8377-e6fb78884e69)

## Dashboard:
![DashboardCRUD](https://github.com/user-attachments/assets/887d6100-2650-4c85-9d57-3347d9fa83f8)

## Crear contacto:
![CreateContactCRUD](https://github.com/user-attachments/assets/5f9bdf91-a9ee-4e6f-8824-5351bf942368)

## Editar contacto.
![EditContactCRUD](https://github.com/user-attachments/assets/f4ac7677-b6d6-43e4-9b66-3252c96237c1)
## Proyecto CRUD de Contacts con Angular y Express + MySQL

En este proyecto se desarrollo una aplicacion CRUD que crea, lee, actualiza y elimina contactos, es decir, le da la posibilidad a los usuarios de poder gestionar sus contactos telefonicos y tener una reseña de ellos.

## Funcionalidades de gestor de contactos.

Tiene Login, y SignUp para manejar el registro y la autenticacion de los usuarios.
Tiene una API hecha en Express que me guarda los usuarios registrados, y tiene una ruta para hacer un GET de dichos usuarios. También hace GET, POST, PUT y DELETE de los contactos que el usuario crea desde la interfax de Angular.

## Conceptos claves y fundamentos de Angular que se usaron:

Se usaron servicios para inyectar logica a los componentes, un servicio se ocupará de la auth de los usuarios, y el otro servicio se ocupara de los contactos.
Se usa navegación para el redireccionamiento entre las páginas Home, Login, SignUp y la Dashboard, observables de rxjs, interfaces para tipar los datos entre otras cosas.

## Pasos para inicializar el proyecto:

1. Clonar este repositorio.
2. Una vez clonado en su equipo local ingrese a la carpeta Backend con: cd Backend
3. Instala los paquetes con: npm install
4. Ejecuta el servidor con: node --watch src/server.js
5. Una vez ejecutado el servidor en el puerto 8000, vaya a la carpeta Frontend con cd.. y luego cd Frontend.
6. Instala las dependencias con npm install.
7. Ejecuta el proyecto por npm start en el puerto 4200.
