import { writable } from 'svelte/store';
import { ObjectUtils } from '../../../utils';
import heroOptions from './../heroOptions';

const heroOptionsDefault = heroOptions;

const { subscribe, set, update } = writable(heroOptionsDefault);

const updateOptions = (newOptions) => {
    update(currentOptions => {
        return ObjectUtils.updateObject(currentOptions, newOptions);
    })
}

 export default {
     subscribe,
     updateOptions,
     heroOptionsDefault
 }