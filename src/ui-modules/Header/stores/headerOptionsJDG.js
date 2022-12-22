 import { writable } from 'svelte/store';

 import { ObjectUtils } from '../../../utils';

 const headerOptions = {
    container: {
        styleOverrides: {
          backgroundColor: '#FAFAFA'
        }
      },
      logo: {
        show: true,
        src: './src/assets/img/jdg-logo.jpg',
        alt: 'The work of Joshua Dean Goldstein',
        subtitle: {
            show: true,
            text: 'J. DEAN GOLDSTEIN'
          },
      },
      nav: {
        show: true,
        items: [
            {name: 'HOME', page: 'home.html'}, 
            {name: 'ABOUT', page: 'about.html'}, 
            {name: 'CONTACT', page: 'contact.html'}
        ],
        styleOverrides: {
            itemTextColor: 'black',
            itemTextHoverColor: 'gray',
            itemBackgroundColor: 'none',
            itemBackgroundColorHover: 'none',
      }
    }
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