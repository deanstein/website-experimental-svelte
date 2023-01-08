import { writable } from 'svelte/store'
import headerOptions from './../headerOptions'

export const headerOptionsDefault = writable(headerOptions)
