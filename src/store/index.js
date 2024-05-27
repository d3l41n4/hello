import { proxy } from 'valtio' ;

const state = proxy({
    intro: true, //flag for on the homepage or not?
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTextures: false, 
    logoDecal: './profilpic.jpg',
    fullDecal: './profilpic.jpg' ,
});

export default state;