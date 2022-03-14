# comics
Proyecto Vuejs, para consultar api de cómics y calificarlos.

El propósito del repositorio es consultar una api de cómics e ir mostrando un cómic aleatoriamente, dar la opción de calificar,
se van sumando los puntos y se muestra la tabla de puntuación.

**Requisitos**
* Se debe tener instalado NodeJS (versión mas reciente), Npm (versión más reciente) y VueJs (versión 2.6 o superior, pero inferior a la 3).

**Instrucciones para ejecutar el proyecto**
* Clonar el proyecto o descargarlo.
* Abrir una terminal y dirigirse a la carpeta del proyecto.
* Ejecutar el comando: "npm install" para instalar las dependecias.
* Ejecutar el comando: "npm run serve" para iniciar la aplicación.
* En la terminal debe salir un recuadro con lo siguiente " App running at: - Local http://localhost:PORT/"
* Abrir "http://localhost:PORT/" en el navegador para usar la aplicación.


**Como usar la aplicación**
* Se mostrará el titulo, la imagen del cómic que se cargará aleatoriamente de la api "https://xkcd.com/json.html".
* Debajo del titulo del cómic hay un panel con estrellas para calificar, se debe seleccionar una cantidad de estrellas para realizar la calificación.
* Luego se mostrará otro cómic aleatorio.
* Si un cómic se califica por primera vez, se agrega al panel lateral izquierdo con su puntuación.
* Si un cómic se califica y no es la primera vez, es decir, ya se calificó antes, al volverlo a calificar se acumulan los puntos nuevos con lo que ya tenía y se vé reflejado el cambio en el panel lateral izquierdo.
* El usuario no está obligado a calificar el comic.
* El usuario puede nevegar y visualizar otro comic.

**NOTAS**
* Hay problemas con la API "https://xkcd.com/json.html", no tiene los CORS necesarios para acceder los endpoints.
* En ambiente DEV el proxy es a nivel de front para poder realizar la comunicación de la aplicación con la API.
* En ambiente PROD se usa un proxy en php, ubicado en https://novumcolombia.com/proxy.php  para poder realizar la comunicación de la aplicación con la API.
* La aplicación se puede visualizar en ambiente productivo en https://vgualdron.github.io/comic
* El proyecto tiene CI/CD, al hacer push a la rama master, se realiza la integración y el despliegue automatizado.