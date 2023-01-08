import { writable } from 'svelte/store'

const appOptionsStore = {}

const appWideStyles = {
  headerFooterBaseColor: '#FAFAFA',
  buttonColor: '#7C7C7C',
  accentColors: {
    jdg: '#8CA9D3',
    pmx: '#F26659',
    pla: '#EBC999',
    hst: '#F0EFF4',
    sft: '#8CA9D3',
  },
}

import headerOptions from '../ui-modules/Header/headerOptions'
const headerOptionsOverrides = {
  ...headerOptions,
  container: {
    styleOverrides: {
      ...headerOptions.container.styleOverrides,
      paddingLeftRight: '2rem',
      backgroundColor: appWideStyles.headerFooterBaseColor,
      backgroundOpacity: '80%',
    },
  },
  logo: {
    show: true,
    src: './jdg-logo.jpg',
    alt: 'The work of Joshua Dean Goldstein',
    styleOverrides: {
      alignItems: 'center' /* vertically align the subtitle in the header */,
    },
    subtitle: {
      show: true,
      text: 'J. DEAN GOLDSTEIN',
    },
  },
  nav: {
    show: true,
    items: [
      { name: 'HOME', page: 'home.html' },
      { name: 'ABOUT', page: 'about.html' },
      { name: 'CONTACT', page: 'contact.html' },
    ],
    styleOverrides: {
      alignItems: 'center' /* vertically align the navbar in the header */,
      itemTextColor: 'black',
      itemTextHoverColor: 'gray',
      itemBackgroundColor: 'none',
      itemBackgroundColorHover: 'none',
    },
  },
}

import heroWithNavOptions from '../ui-modules/HeroWithNav/heroWithNavOptions'
const heroWithProjectTypeOverrides = {
  ...heroWithNavOptions,
  img: {
    src: './hero.jpg',
    styleOverrides: {
      height: '100vh',
    },
  },
  nav: {
    items: [
      {
        name: 'SOFTWARE',
        itemBackgroundColor: appWideStyles.accentColors.sft,
        page: 'home.html',
      },
      {
        name: 'PRODUCTS',
        itemBackgroundColor: appWideStyles.accentColors.pmx,
        page: 'about.html',
      },
      {
        name: 'PLACES',
        itemBackgroundColor: appWideStyles.accentColors.pla,
        page: 'contact.html',
      },
    ],
    styleOverrides: {
      itemTextColor: 'white',
      itemTextHoverColor: 'white',
      itemBackgroundColorHover: 'black',
    },
  },
}

appOptionsStore['appWideStyles'] = appWideStyles
appOptionsStore['headerOptions'] = headerOptionsOverrides
appOptionsStore['heroWithNavOptions'] = heroWithProjectTypeOverrides

export const appOptions = writable(appOptionsStore)
