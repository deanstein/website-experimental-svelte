import { writable } from 'svelte/store';
import { ObjectUtils } from './../utils';

// export all the app options as one object
const appOptionsStore = {};

// fill the store with any data that might change state
import headerOptions from '../ui-modules/Header/headerOptions'

const headerOptionsOverrides = { 
    ...headerOptions,
    container: {
        styleOverrides: {
            paddingLeftRight: '2rem',
            backgroundColor: '#FAFAFA'
        }
      },
      logo: {
        show: true,
        src: './jdg-logo.jpg',
        alt: 'The work of Joshua Dean Goldstein',
        styleOverrides: {
            alignItems: 'center' /* vertically align the subtitle in the header */
        },
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
            alignItems: 'center', /* vertically align the navbar in the header */
            itemTextColor: 'black',
            itemTextHoverColor: 'gray',
            itemBackgroundColor: 'none',
            itemBackgroundColorHover: 'none',
      }
    }
 }

appOptionsStore['headerOptions'] = writable(headerOptionsOverrides);

const { subscribe, set, update } = writable(appOptionsStore);

const updateOptions = (newOptions) => {
    update(currentOptions => {
        return ObjectUtils.updateObject(currentOptions, newOptions);
    })
}

 export default {
     subscribe,
     updateOptions
 }