# Proyecto de React

Este es un proyecto basado en React.

## Instalación

Para instalar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la carpeta raíz del proyecto y proporciona la información necesaria para mayor seguridad. Asegúrate de no compartir esta información confidencial.

## Proyecto de React

Este es un proyecto basado en React.

## Instalación
Para instalar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.

2. Abre una terminal en la carpeta raíz del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias:

    ```bash
    npm install
    ```
4. Crea un archivo .env en la carpeta raíz del proyecto con la información que se te enviará. Asegúrate de no compartir esta información confidencial.

## Estructura del Proyecto

El código fuente se encuentra en la carpeta src, la cual contiene las siguientes subcarpetas:

1. components: Contiene componentes reutilizables utilizados en diferentes partes de la aplicación.

2. context: Contiene el archivo CartContext.js, donde se gestiona la lógica del carrito de compras.

3. pages: Contiene componentes que actúan como páginas individuales de la aplicación.

4. services: Contiene servicios externos, como la configuración de Firebase.

## Navegación

La aplicación utiliza BrowserRouter y Routes para la navegación. Las rutas se definen en el archivo App.js.

## Firebase

Firebase se utiliza para la persistencia de datos. Asegúrate de proporcionar las credenciales de Firebase de forma segura y separada, posiblemente utilizando un archivo .env.

## Notas Adicionales

La lógica del carrito se encuentra en el archivo CartContext.js dentro de la carpeta context. Este archivo gestiona la adición, eliminación y total de los productos en el carrito