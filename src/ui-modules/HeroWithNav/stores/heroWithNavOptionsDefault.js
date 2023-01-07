import { writable } from 'svelte/store'
import { ObjectUtils } from '../../../utils'
import heroWithNavOptions from '../heroWithNavOptions'

const heroWithNavOptionsDefault = heroWithNavOptions

const { subscribe, set, update } = writable(heroWithNavOptionsDefault)

const updateOptions = (newOptions) => {
  update((currentOptions) => {
    return ObjectUtils.updateObject(currentOptions, newOptions)
  })
}

export default {
  subscribe,
  updateOptions,
  headerOptionsDefault: heroWithNavOptionsDefault,
}
