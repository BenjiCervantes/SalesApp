import { Injectable } from '@angular/core';
import { Measurement, Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor() { }

  getProductList(){
    return this.productList;
  }

  getProductById( id: string ): Product{
    return this.productList.filter(p => p.id === id )[0];
  }

  productList: Product[] = [
    {
      id: 'vans1',
      name: 'Vans Old Skool',
      description: 'Tenis vans old skool color negro',
      price: 1599.00,
      trademark: 'Vans',
      content: 1,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/83411e81-ccde-497e-803a-fe9cdf618f40.7342bbeeb68882602cc8057a608099fb.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/1dc101c6-e51c-433e-86b4-535333dce1b6.6229acef93d648e769c35e79ed6f215a.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/979c9675-2139-4803-bcde-02faf661f134.0efeb9d23fab43682c356cd5bc4e83cf.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4d257073-20cd-469c-ab77-094ed4c50cd0.e4a4e04db8eb4648e4794c99b56dd426.jpeg'
      ],
      measurement: Measurement.pair
    },
    {
      id: 'vans2',
      name: 'Vans Authentic',
      description: 'Tenis vans authentic color rojo',
      price: 1299.00,
      trademark: 'Vans',
      content: 1,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2540a591-9bb2-4ed8-9a95-b4ba1f43bfa2.6fa5c3469c76a6d58747d3b76b02d5e6.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/ade16ad0-11f1-4f62-95e2-88b72a48ad97.40a516632ddd1619e1ecc76dc8dc4ca8.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/0a70e549-74ad-42d6-9f84-182008713b0b.383ca4c886f7e96b4145ce2ce8742a99.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/8723ab2f-c965-44ad-9ca0-fcbaf525d7f8.b34a0f4e65291ef806ef84c2a7bb9333.jpeg'
      ],
      measurement: Measurement.pair
    },
    {
      id: 'iphone15green',
      name: 'Iphone 15',
      description: 'Iphone 15 128gb color verde',
      price: 16999.00,
      trademark: 'Apple',
      content: 1,
      measurement: Measurement.piece,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/31d08f14-d12e-49d9-8b03-c0ebe5543492.8ea8173be2135ccc5c1a06eb205bb40b.jpeg'
      ]
    },
    {
      id: 'iphone15promaxmidnight',
      name: 'Iphone 15 Pro Max',
      description: 'Iphone 15 pro max 256gb color azul medianoche',
      price: 24999.00,
      trademark: 'Apple',
      content: 1,
      measurement: Measurement.piece,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/3d8ccc9d-d2a4-4476-8043-e2ed6a1cdaa3.3cf9ae41b6bfe40f4ca49b55c3779597.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e4c27615-9962-4d86-a8eb-7925814ac7a6.b9e3c87ad3c43358f3561fc37fd25a64.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/d1008341-a7d6-43ae-b5e9-db8ecc2827b5.0814f810551c1a7ccfbdc7e01cd4a2a6.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/37a8209d-6431-40ec-b06e-d3b53770b302.53dcb6130838cd77715cbca23a15344f.jpeg'
      ]
    },
    {
      id: 'tvsamsung75',
      name: 'Samsung Smart TV 75"',
      description: 'Smart TV de 75 pulgadas 4K UHD',
      price: 13999.00,
      trademark: 'Samsung',
      content: 1,
      measurement: Measurement.piece,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/ee0bdb93-fd10-46c3-a845-87c4d2aa95e8.e216222c6bebe31a017291bf7b1c1f74.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/88fd54e4-1a51-4fff-90ba-868d5df9e552.357d5633c499e06fb77fc59f820c4534.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/95e2a3be-9186-4178-bd67-61c36e504a50.c32d9fd3ed3e8eba6594cb563895ab0a.jpeg',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e24caabb-b2a5-4e36-a463-998e016ec044.5ea4f20a3ded51bfd9c9218bfb88fc2e.png',
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/8a16adb2-5cf5-40a0-9cd3-4cb5cf398e19.f9b7764425c65fe69c219e9c2b6f0c9f.jpeg'
      ]
    },
    {
      id: 'tvlg60',
      name: 'LG Smart TV 60 ThinQ"',
      description: 'Smart TV de 60 pulgadas 4K UHD',
      price: 9999.00,
      trademark: 'LG',
      content: 1,
      measurement: Measurement.piece,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609193482l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609193482-2l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609193482-3l.jpg'
        ],
      details: 'Procesador con Inteligencia Artificial 4K que ayuda a mejorar las imágenes'
      +'\nAI Sound crea un sonido envolvente con altos nítidos y diálogos claros'
      +'\nConecta barras de sonido y bocinas inalámbricas por medio de Bluetooth'
      +'\nCon LG webOS disfruta películas en Netflix y Disney+, videos en YouTube y mucho mas. 4K Active HDR optimiza cada escena, brindando detalles delicados y colores. El Modo Juego modifica el tiempo de respuesta para que no tengas desfase al jugar. Con AirPlay comparte fotos, videos o música desde tu iPhone, iPad o Mac a la pantalla. Una pantalla LED siempre tendrá la imagen perfecta con un consumo de energía bajo. Filmmaker Mode hace que las películas y series se puedan ver tal y como los directores las crearon. Con Inteligencia Artificial AI ThinQ controla los dispositivos inteligentes en tu hogar desde tu pantalla. Con Google Assistant y Alexa, controla funciones como el encendido, apagado, cambio de canal y volumen con la voz Navega dentro de tú tienda en línea para encontrar más variedad de equipos y accesorios.'
    },
    {
      id: 'legofender',
      name: 'Set Lego Ideas Fender',
      description: 'Set de lego Fender Stratocaster de 1074 piezas',
      price: 4896.00,
      trademark: 'Lego',
      content: 1074,
      measurement: Measurement.pieces,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341935033l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341935033-1l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341935033-2l.jpg'
        ],
      details:'Recrea una guitarra legendaria'
      +'\nPara construir y exhibir de una guitarra Fender Stratocaster de la década de 1970'
      +'\nUn amplificador Fender Princeton Reverb de 1965 construible'
      +'\nLa guitarra cuenta con palanca de trémolo articulada'
      +'\nCon selector de pastillas clavijas de afinación seis cuerdas'
      +'\nCon calcomanías con el logotipo de Fender y correa textil'
      +'\nLos bricks incluidos te permiten construir la guitarra en rojo o en negro.'
      +'\nLos paneles del amplificador se pueden quitar para ver la placa base'
      +'\nPuedes ver la unidad de reverb la bocina y otros detalles del interior'
      +'\nIncluye un soporte plegable para la guitarra'
      +'\nCon púas a la escala del modelo en 4 colores'
      +'\nMide aproximadamente 36 cm de longitud 11 cm de anchura y 3 cm de profundidad'
      +'\n\nTodos los juguetes que buscas los tienes solo en tu tienda en línea. Hacer compras en línea nunca había sido tan sencillo agrega a tu carrito lo que necesites ya que con nuestro servicio de entregas a domicilio tus productos llegarán hasta la puerta de tu hogar. Contamos con distintas formas de pago para que elijas la que más te convenga.'
    },
    {
      id: 'legoharry',
      name: 'Set Lego Harry Potter Hogwarts 76419',
      description: 'Set de lego Harry Potter castillo y terrenos de Hogwarts de 2660 piezas',
      price: 2999.00,
      trademark: 'Lego',
      content: 2660,
      measurement: Measurement.pieces,
      imgUrlList: [
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341937586l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341937586-1l.jpg',
        'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00067341937586-2l.jpg'
      ],
      details:'Disfruta de una hechizante aventura creativa con el set Castillo y Terrenos de Hogwarts \n\nEl primer modelo LEGO del conjunto de edificaciones y espacios al aire libre que conforman el famoso colegio \n\nAbstráete de todo sumergiéndote en una mágica experiencia creativa con el primer modelo LEGO del Castillo de Hogwarts y sus terrenos. Construye la Torre Central, la Torre de Astronomía, el Gran Comedor y mucho más. Explora icónicos espacios, como la Cámara Secreta y el Aula de Pociones. Añade la minifigura del arquitecto de Hogwarts, el Barco de Durmstrang y otros modelos reconocibles al instante, ¡y habrás completado tu encantadora pieza de exhibición!'
    }
  ]
}
