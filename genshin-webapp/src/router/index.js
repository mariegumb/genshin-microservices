import Character from '../views/Character.vue'
import Characters from '../views/Characters.vue'
import CharacterForm from '../views/CharacterForm.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'characters', component: Characters },
    { path: '/:id', name: 'character', component: Character },
    { path: '/edit/:id', name: 'character-edit', component: CharacterForm },
]
  
export const router = createRouter({
    routes,
    history: createWebHashHistory(),
})