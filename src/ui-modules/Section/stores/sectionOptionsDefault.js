import { writable } from 'svelte/store'
import sectionOptions from './../sectionOptions'

export const sectionOptionsDefault = writable(sectionOptions)
