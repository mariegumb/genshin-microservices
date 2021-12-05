<template>
    <div class="flex justify-between items-center">
      <h1 class="text-white font-bold text-xl">Genshin Characters List</h1>
      <div>
        <button :disabled="characters.length || loading" @click="initDb" class="text-xs bg-indigo-500 text-white rounded py-2 px-4 disabled:opacity-20 disabled:cursor-default disabled:text-gray-900">Init Database</button>
        <button :disabled="!characters.length || loading" @click="flush" class="ml-2 text-xs bg-red-500 text-white rounded py-2 px-4 disabled:opacity-20 disabled:cursor-default disabled:text-gray-900">Flush Database</button>
      </div>
    </div>
    <div v-if="loading" class="mt-6 mb-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid gap-4">
      <skeleton v-for="i in 8" :key="i + 'skeleton'"/>
    </div>
    <div v-else-if="!loading && characters.length" class="mt-6 mb-32 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <character-item :character="character" v-for="character in characters" :key="character.id"/>
    </div>
    <div class="mt-24 text-center text-white italic" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="">
          No characters found
        </span> 
    </div>
</template>

<script>
import axios from 'axios'
import CharacterItem from '../components/CharacterItem.vue'
import {flushCharacters, loadCharactersFromGameAPI} from '../services/characterService'
import Skeleton from '../components/Skeleton.vue'

export default {
    components: { CharacterItem, Skeleton },
  data(){
    return {
      characters: [],
      loading: true
    }
  },
  created(){
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters(){
      const res = await axios.get(`${import.meta.env.VITE_APP_CHARACTER_API}/characters`)
      this.characters = res.data
      this.loading = false
    },
    async initDb(){
      this.loading = true
      await flushCharacters()
      await loadCharactersFromGameAPI()
      await this.fetchCharacters()
    },
    async flush(){
      await flushCharacters()
      this.fetchCharacters()
    },
  }
}
</script>
