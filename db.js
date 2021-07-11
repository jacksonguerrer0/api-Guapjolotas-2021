/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");
 
module.exports = () => {
  const data = {
    "productos":[
        {
            "id": 1,
            "nombre": "Guajolota de Tamal Verde",
            "precio": 25,
            "categoria": "Guajolotas",
            "nombreCorto": "Verde",
            "tipoSabor": "tamal",
            "sabor": "Verde",
            "imagen": "https://i.imgur.com/d6pZWfx.png",
            "cantidad": 1
        },
        {
            "id": 2,
            "nombre": "Guajolota de Tamal de Mole",
            "precio": 25,
            "categoria": "Guajolotas",
            "nombreCorto": "Mole",
            "tipoSabor": "tamal",
            "sabor": "Mole",
            "imagen": "https://i.imgur.com/tyguOVl.png",
            "cantidad": 1
        },
        {
            "id": 3,
            "nombre": "Guajolota de Tamal de Guayaba",
            "precio": 25,
            "categoria": "Guajolotas",
            "nombreCorto": "Guayaba",
            "tipoSabor": "tamal",
            "sabor": "Guayaba",
            "imagen": "https://i.imgur.com/KUmNnBE.png",
            "cantidad": 1
        },
        {
            "id": 4,
            "nombre": "Guajolota de Tamal de Piña",
            "precio": 25,
            "categoria": "Guajolotas",
            "nombreCorto": "Piña",
            "tipoSabor": "tamal",
            "sabor": "Piña",
            "imagen": "https://i.imgur.com/LvqTDsV.png",
            "cantidad": 1
        },
        {
            "id": 5,
            "nombre": "Guajolota de Tamal de Pasas",
            "precio": 25,
            "categoria": "Guajolotas",
            "nombreCorto": "Pasas",
            "tipoSabor": "tamal",
            "sabor": "Pasas",
            "imagen": "https://i.imgur.com/AWbJ84D.png",
            "cantidad": 1
        },
        {
            "id": 6,
            "nombre": "Champurrado",
            "precio": 12,
            "categoria": "Bebidas",
            "nombreCorto": "Champurrado",
            "tipoSabor": "bebida",
            "sabor": "Champurrado",
            "imagen": "https://i.imgur.com/ponHz9P.png",
            "cantidad": 1
        },
        {
            "id": 7,
            "nombre": "Atole de Arroz con Leche",
            "precio": 12,
            "categoria": "Bebidas",
            "nombreCorto": "Atole de Arroz",
            "tipoSabor": "bebida",
            "sabor": "Arroz con Leche",
            "imagen": "https://i.imgur.com/agIVB1f.png",
            "cantidad": 1
        },
        {
            "id": 8,
            "nombre": "Chocolate Caliente",
            "precio": 12,
            "categoria": "Bebidas",
            "nombreCorto": "Chocolate",
            "tipoSabor": "bebida",
            "sabor": "Chocolate",
            "imagen": "https://i.imgur.com/mPDvTzX.png",
            "cantidad": 1
        },
        {
            "id": 9,
            "nombre": "Café Negro",
            "precio": 12,
            "categoria": "Bebidas",
            "nombreCorto": "Café Negro",
            "tipoSabor": "bebida",
            "sabor": "Cafe",
            "imagen": "https://i.imgur.com/VCZLFyC.png",
            "cantidad": 1
        },



        {
            "id": 10,
            "nombre": "Tamal Verde",
            "precio": 14,
            "categoria": "Tamales",
            "nombreCorto": "Tamal Verde",
            "tipoSabor": "tamal",
            "sabor": "Verde",
            "imagen": "https://i.imgur.com/DXF7NXF.png",
            "cantidad": 1
        },
        {
            "id": 11,
            "nombre": "Tamal de Mole",
            "precio": 14,
            "categoria": "Tamales",
            "nombreCorto": "Tamal de Mole",
            "tipoSabor": "tamal",
            "sabor": "Mole",
            "imagen": "https://i.imgur.com/w1PGV4A.png",
            "cantidad": 1
        },
        {
            "id": 12,
            "nombre": "Tamal de Guayaba",
            "precio": 14,
            "categoria": "Tamales",
            "nombreCorto": "Tamal de Guayaba",
            "tipoSabor": "tamal",
            "sabor": "Guayaba",
            "imagen": "https://i.imgur.com/vAW114x.png",
            "cantidad": 1
        },
        {
            "id": 13,
            "nombre": "Tamal de Piña",
            "precio": 14,
            "categoria": "Tamales",
            "nombreCorto": "Tamal de Piña",
            "tipoSabor": "tamal",
            "sabor": "Piña",
            "imagen": "https://i.imgur.com/7ll741z.png",
            "cantidad": 1
        },
        {
            "id": 14,
            "nombre": "Tamal de Pasas",
            "precio": 14,
            "categoria": "Tamales",
            "nombreCorto": "Tamal de Pasas",
            "tipoSabor": "tamal",
            "sabor": "Pasas",
            "imagen": "https://i.imgur.com/mCO47N7.png",
            "cantidad": 1
        }
    ],
    "sabores":[
        {        
        "tamal": [
            {
                "id": 1,
                "sabor": "Verde",
                "imagenSabor": "https://i.imgur.com/3AyHYPu.png"
            },
            {
                "id": 2,
                "sabor": "Mole",
                "imagenSabor": "https://i.imgur.com/oN0t4nw.png"
            },
            {
                "id": 3,
                "sabor": "Guayaba",
                "imagenSabor": "https://i.imgur.com/GMvWkzv.png"
            },
            {
                "id": 4,
                "sabor": "Piña",
                "imagenSabor": "https://i.imgur.com/CEn2bpp.png"
            },
            {
                "id": 5,
                "sabor": "Pasas",
                "imagenSabor": "https://i.imgur.com/J45fALf.png"
            },
            {
                "id": 6,
                "sabor": "Rajas",
                "imagenSabor": "https://i.imgur.com/V09ndnD.png"
            }
        ],
        "bebida": [
            {
                "id": 1,
                "sabor": "Champurrado",
                "imagenSabor": "https://i.imgur.com/8Ozi2d7.png"
            },
            {
                "id": 2,
                "sabor": "Arroz con Leche",
                "imagenSabor": "https://i.imgur.com/9sLEWS5.png"
            },
            {
                "id": 3,
                "sabor": "Chocolate",
                "imagenSabor": "https://i.imgur.com/uzW5HRg.png"
            },
            {
                "id": 4,
                "sabor": "Cafe",
                "imagenSabor": "https://i.imgur.com/zFdj5zd.png"
            }
        ]
        },
    ],
    "usuarios":[
        {
            "id": 1,
            "username": "juancamilo",
            "password": "amarillo"
        },
        {
            "id": 2,
            "username": "jackson",
            "password": "guerrero"
        },
        {
            "id": 3,
            "username": "pepe",
            "password": "perez"
        },
        {
            "id": 4,
            "username": "jorge",
            "password": "vega"
        },
        {
            "id": 5,
            "username": "juan",
            "password": "velasquez"
        }
    ]
}
   return data;
};
  
