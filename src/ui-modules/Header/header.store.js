 import { writable } from 'svelte/store';

 import { ObjectUtils } from '../../utils';

 const headerOptions = {
    data: {
        logo: {
            src: 'https://github.com/deanstein/website-experimental-svelte/blob/main/src/ui-modules/Header/img/logo.png?raw=true',
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
        return ObjectUtils.updateObject(currentOptions, newOptions);
    })
}

 export default {
     subscribe,
     updateOptions
 }