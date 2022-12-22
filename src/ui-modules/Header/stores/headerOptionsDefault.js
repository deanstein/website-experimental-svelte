 import { writable } from 'svelte/store';

 import { ObjectUtils } from '../../../utils';

 const headerOptions = {
    container: {
        styleOverrides: {
            backgroundColor: 'gray',
        }
    },
    logo: {
        show: true,
        src: './src/ui-modules/Header/img/defaultLogo.png',
        alt: 'A logo for this website',
        subtitle: {
            show: false,
            text: 'An optional subtitle for this website'
        }
    },
    nav: {
        show: true,
        items: [
            {name: 'Home', page: 'home.html'}, 
            {name: 'About', page: 'about.html'}, 
            {name: 'Contact', page: 'contact.html'}
            ],
        styleOverrides: {
            itemTextColor: 'white',
            itemTextHoverColor: 'white',
            itemBackgroundColor: 'darkGray',
            itemBackgroundColorHover: 'black'
        }
    },
}

const { subscribe, set, update } = writable(headerOptions);

const updateOptions = (newOptions) => {
    update(currentOptions => {
        return ObjectUtils.updateObject(currentOptions, newOptions);
    })
}

 export default {
     subscribe,
     updateOptions
 }