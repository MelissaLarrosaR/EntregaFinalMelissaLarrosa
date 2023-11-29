import hojillas from './img/productos/hojillas.webp';
import sustrato from './img/productos/sustrato.jpeg';
import picador from './img/productos/picador.png';
import bong16 from './img/productos/Bong de vidrio de 16cm cultura dab.jpg';
import camiseta from './img/productos/CAMISETA LOGO DO-G NEGRA.jpg';
import carpa from './img/productos/Carpa De Cultivo Indoor 120x120x200 Garden Highpro.jpg';
import morral from './img/productos/COMBO MORRAL + BILLETERA YUYO BROTHERS.jpg';
import complete100 from './img/productos/Complete Mix 100 Litros.jpg';
import encendedor from './img/productos/Encendedor Clipper lote x 8 unidades de colores.jpg';
import lec315 from './img/productos/KIT ILUMINACIÓN LEC CMH 315W.jpg';
import bandejaocb from './img/productos/OCB Premium Metal Bandeja OCB con tapa hermética (19x14cm).jpg';
import gorra from './img/productos/THE BULLDOG GORRO ORIGINAL NEGRO.jpg';


const products = [
    {
        id: '1',
        name: 'Hojillas',
        price: 100,
        category: 'parafernalia',
        img: hojillas,
        stock: 178,
        description: 'Hojillas RAW de 1 1/4 cantidad 50 unidades'
    },
    {
        id: '2',
        name: 'Picador',
        price: 200,
        category: 'parafernalia',
        img: picador,
        stock: 53,
        description: 'Picador de metal de 3 partes con iman y rejilla para polen Bull Dog'
    },
    {
        id: '3',
        name: 'Sustrato',
        price: 300,
        category: 'paracultivo',
        img: sustrato,
        stock: 35,
        description: 'Sustrato para cultivo de cannabis CANNA 50L'
    },
    {
        id: '4',
        name: 'Bong de vidrio de 16cm',
        price: 1200,
        category: 'parafernalia',
        img: bong16,
        stock: 3,
        description: 'Bong de vidrio de 16cm cultura dab'
    },
    {
        id: '5',
        name: 'Camiseta',
        price: 25,
        category: 'indumentaria',
        img: camiseta,
        stock: 25,
        description: 'Camiseta negra con logo DO-G'
    },
    {
        id: '6',
        name: 'Carpa De Cultivo Indoor 120x120x200',
        price: 5000,
        category: 'paracultivo',
        img: carpa,
        stock: 10,
        description: 'Carpa de cultivo indoor 120x120x200 Garden Highpro'
    },
    {
        id: '7',
        name: 'Morral + Billetera',
        price: 80,
        category: 'indumentaria',
        img: morral,
        stock: 15,
        description: 'Combo morral + billetera Yuyo Brothers'
    },
    {
        id: '8',
        name: 'Complete Mix 100 Litros',
        price: 800,
        category: 'paracultivo',
        img: complete100,
        stock: 5,
        description: 'Sustrato completo para cultivo de 100 litros'
    },
    {
        id: '9',
        name: 'Encendedor Clipper lote x 8 unidades',
        price: 50,
        category: 'parafernalia',
        img: encendedor,
        stock: 40,
        description: 'Lote de 8 encendedores Clipper de colores'
    },
    {
        id: '10',
        name: 'KIT ILUMINACIÓN LEC CMH 315W',
        price: 1500,
        category: 'paracultivo',
        img: lec315,
        stock: 2,
        description: 'Kit de iluminación LEC CMH 315W para cultivo indoor'
    },
    {
        id: '11',
        name: 'OCB Premium Metal Bandeja OCB',
        price: 15,
        category: 'parafernalia',
        img: bandejaocb,
        stock: 20,
        description: 'Bandeja OCB Premium de metal con tapa hermética (19x14cm)'
    },
    {
        id: '12',
        name: 'THE BULLDOG GORRO ORIGINAL NEGRO',
        price: 30,
        category: 'indumentaria',
        img: gorra,
        stock: 12,
        description: 'Gorro original negro The Bulldog'
    },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500)
    })
}