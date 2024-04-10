import { createPinia } from 'pinia'
import { usePublicStore } from './publicStore'

const pinia = createPinia()
export default pinia

export { usePublicStore }
