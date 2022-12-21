 import { writable } from 'svelte/store';

 const headerOptions = {
    data: {
        logo: {
            src: 'https://github.com/deanstein/website-experimental-svelte/src/ui-modules/Header/img/logo.png',
            alt: 'Logo alt text'
        },
        nav: {
            items: [
                {name: 'Home', page: 'home.html'}, 
                {name: 'About', page: 'about.html'}, 
                {name: 'Contact', page: 'contact.html'}
            ] 
        },
    },
    style: {
        container: {
            backgroundColor: '#FAFAFA',
        },
        nav: {
            itemBackgroundColor: 'darkGray',
            itemBackgroundColorHover: 'red',
            itemTextColor: 'blue'
        }
    }
}

const { subscribe, set, update } = writable(headerOptions);

const updateOptions = (newOptions) => {
    update(currentOptions => {
        return {...currentOptions, ...newOptions}
    })
}

 export default {
     subscribe,
     updateOptions
 }