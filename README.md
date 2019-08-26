
Mensajeria Cesar

Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

https://camo.githubusercontent.com/1f58a3f3b2ea49950a3109fd3f0d63e708c00857/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f322f32622f436165736172332e7376672f3230303070782d436165736172332e7376672e706e67

más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

La letra A se cifra como D.
La palabra CASA se cifra como FDVD.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación,como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Definición del producto

Se basa en una aplicación web que servirá para que el usuario pueda cifrar y descifrar un texto mediante una clave (offset) definida por el mismo, basada en números positivos. La información a cifrar/descifrar abarca letras mayusculas  que seran devueltos en el mismo orden del texto original.

Va dirigido a adolencentes y adultos que tengan la necesidad de intercambiar a diario información relevante y sensible por medios no tan seguros como correo u otras aplicaciones de mensajeria que pudieran requerir un mayor nivel de seguridad de la información, personas que manejan datos y/o archivos que deben mantener protegidos antes ataques de seguridad; permitiendo al usuario manejar dicha información con la confianza que genera un encriptado.



Interfaz de usuario (UI)

Una interfaz básica: 

Visualización de información cifrada/descifrada a la mano.
Clave númerica definida por el usuario para mayor identidad con la misma.
Facilidad de uso y manipulación por parte del usuario.
Enfoque en la finalidad de la aplicación, sin distracciones innesarias.

https://irenemonzon.github.io/SCL011-Cipher/src/index.html
https://irenemonzon.github.io/SCL011-Cipher/src/index.html
https://irenemonzon.github.io/SCL011-Cipher/src/index.html

Consideraciones Técnicas

La lógica del proyecto esta implementada completamente en JavaScript (ES6) , HTML  y CSS.

El boilerplate contiene una estructura de archivos así como toda la configuración de dependencias y tests:

./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html


Para acceder a la aplicación debes copiar la siguiente dirección en cualquier navegador:
https://github.com/irenemonzon/SCL011-Cipher

https://irenemonzon.github.io/SCL011-Cipher/src/index.html
