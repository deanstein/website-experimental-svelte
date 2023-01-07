import { writable } from 'svelte/store'
import { ObjectUtils } from '../../../utils'
import headerOptions from './../headerOptions'

const headerOptionsDefault = headerOptions

const { subscribe, update } = writable(headerOptionsDefault)

const updateOptions = (newOptions) => {
  update((currentOptions) => {
    return ObjectUtils.updateObject(currentOptions, newOptions)
  })
}

export default {
  subscribe,
  updateOptions,
  headerOptionsDefault,
}
