import { writable } from 'svelte/store';

import { ObjectUtils } from './../utils';


// export all the app options as one object
const appOptionsStore = {};

// fill the store with any data that might change state
import headerOptions from '../ui-modules/Header/headerOptions'
const newHeaderOptions = Object.assign({}, headerOptions);
newHeaderOptions.container.styleOverrides.paddingLeftRight = '2rem';
newHeaderOptions.container.styleOverrides.backgroundColor = '#FAFAFA';
newHeaderOptions.logo.show = true;
newHeaderOptions.logo.src = './jdg-logo.jpg';
newHeaderOptions.logo.alt = 'The work of Joshua Dean Goldstein';
newHeaderOptions.logo.styleOverrides.alignItems = 'center'; // vertically align the subtitle in the header
newHeaderOptions.logo.subtitle.show = true;
newHeaderOptions.logo.subtitle.text = 'J. DEAN GOLDSTEIN';
newHeaderOptions.nav.show = true;
newHeaderOptions.nav.items = [
    {name: 'HOME', page: 'home.html'}, 
    {name: 'ABOUT', page: 'about.html'}, 
    {name: 'CONTACT', page: 'contact.html'}
];
newHeaderOptions.nav.styleOverrides = {
    alignItems: 'center', /* vertically align the navbar in the header */
    itemTextColor: 'black',
    itemTextHoverColor: 'gray',
    itemBackgroundColor: 'none',
    itemBackgroundColorHover: 'none'
};

appOptionsStore['headerOptions'] = writable(newHeaderOptions);

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