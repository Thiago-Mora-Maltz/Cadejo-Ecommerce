import imageVermu from '../assets/cadejoFoto.jpg'
import imageTamal from '../assets/tamal.jpg'
import imagePostre from '../assets/postre.jpg'
import imageTacos from '../assets/tacos.jpg'
import imageEnki from '../assets/enki.jpg'
import imageTacoCamaron from '../assets/tacoCamaron.jpg'

export const arrayItems = [
        {id: 1, categoria: 'bebida', nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, stock: 10, imagen: imageVermu},
        {id: 2, categoria: 'comida',nombre: 'Chuchito', descripcion: 'CHUCHITO: tamal de cerdo. Base de masa de maiz más un relleno de carne con salsa, envuelto en hoja de maiz y cocido al vapor. Tiene un relleno de cerdo con recado rojo (una salsa espesa hecha a base de tomate, morron, ajo y cebolla tatemada, chiles secos hidratados, achiote y frutos secos) y se sirve con una salsa roja, cebolla cruda y perejil y picante al gusto.', precio: `${500}$`, stock: 15, imagen: imageTamal},
        {id: 3, categoria: 'comida',nombre: 'Cadejo Vermú', descripcion: 'DORADOS AQUELARRE: Tacos dorados de cordero, ahumado y cocido en birria (guiso de chiles ahumados, y verduras asadas), puré de papa con salsa de tomate y morrón, cebolla, col en escabeche, perejil y salsa de maní.', precio: `${500}$`, stock: 10, imagen: imageTacos},
        {id: 4, categoria: 'comida',nombre: 'Cadejo Vermú', descripcion: 'Postre frío de garbanzos cocidos en almíbar de piloncillo de caña de azúcar, canela, clavo de olor, pimienta gorda y dátiles frescos.', precio: `${500}$`, imagen: imagePostre},
        {id: 5, categoria: 'comida',nombre: 'Cadejo Vermú', descripcion: 'TOSTADA ENKI: Tortilla crujiente de maíz, base de mayo de chipotle, rajas de palta, rebanadas de atún rojo macerado (salsa de soja, aceite de sésamo, lima y jengibre) con cilantro y verdeo, sésamo negro y una rodaja de ají.', precio: `${500}$`, stock: 10, imagen: imageEnki},
        {id: 6, categoria: 'comida',nombre: 'Cadejo Vermú', descripcion: 'Taco de camarón capado(un empanizado a base de cerveza y harina), palta, hojas de cilantro, repollo y una salsa marina de chipotle', precio: `${500}$`, stock: 10, imagen: imageTacoCamaron},
      ]

    
export  const getItems = new Promise((res)=>{
        setTimeout(()=>{
          res(arrayItems)
        }, 1500);
      });


