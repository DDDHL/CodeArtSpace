import { defineStore } from 'pinia'
import { publicStoreType } from '@/types'

export const usePublicStore = defineStore('publicStore', {
  state: (): publicStoreType => ({}),
  actions: {},
})
