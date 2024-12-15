import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const pages = [
    {
      id: 0,
      pagePath: '',
      pageName: 'Home',
    },
    {
      id: 1,
      pagePath: 'about',
      pageName: 'About',
    },
  ]

  return { pages }
})
