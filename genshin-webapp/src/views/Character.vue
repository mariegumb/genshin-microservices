<template>
    <div v-if="character" class="-mt-12 w-96 mx-auto">
        <img :src="card" alt="">
    </div>
    <button @click="$router.push({name: 'characters'})" class="text-xs px-4  text-white bg-gray-800 rounded hover:bg-opacity-40 py-2">
          
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
          Back
        </button>
    <div class="mt-2 mb-24 relative bg-gradient-to-r p-4 rounded text-white" :class="getBackground(character.vision)" v-if="character">

        <div class="">
            <div class="flex justify-between w-full">
                <div class="text-xl capitalize font-bold">
                    {{character.name}}
                </div>
                <div>
                    <svg v-for="i in  character.rarity" :key="i + 'star'" xmlns="http://www.w3.org/2000/svg" class="opacity-70 h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
            </div>
           <div class="mt-6 opacity-70 italic text-sm">
               {{character.description}}
           </div>
           <div class="opacity-70 text-sm capitalize">
               Weapon : {{character.weapon}}
           </div>
           <div class="opacity-70 text-sm">
               Element : {{character.vision}}
           </div>
           <div v-if="character.nation" class="opacity-70 hover:opacity-100 cursor-pointer text-sm underline" @click="displayModal = true">
               Nation : {{character.nation.name}}
               <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
           </div>
           <div v-else class="opacity-70 text-sm italic">
               No nation found
           </div>
            <nation-modal v-if="character.nation" :nation="character.nation" @close="displayModal = false" v-show="displayModal"/>
        </div>
        <div class="flex justify-end">
            <button @click="$router.push({name: 'character-edit', params: {id: character.id}})" class="text-xs px-4 bg-black rounded bg-opacity-20 hover:bg-opacity-40 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          Edit
        </button>
        <button @click="remove()" class="text-xs ml-2 px-4 bg-black rounded bg-opacity-20 hover:bg-opacity-40 py-2">
          
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          Delete
        </button>
        </div>
    </div>
    
</template>

<script>
import NationModal from '../components/NationModal.vue'
import { getCharacter, removeCharacter } from '../services/characterService'
export default {
  components: { NationModal },
    data(){
        return {
            character: null,
            loading: true,
            displayModal: false
        }
    },
    computed:{
        card(){
            return this.character? `${import.meta.env.VITE_APP_GAME_API}/characters/${this.character.name.toLowerCase()}/gacha-splash`: ''
        },
    },
    created(){
        const id = this.$route.params.id
        if(!id){
            this.$router.push({name : 'characters'})
        } else {
            this.fetchCharacter(id)
        }
    },
    methods:{
        async fetchCharacter(id){
            this.character = await getCharacter(id)
            this.loading = false
        },
        async remove(){
            await removeCharacter(this.character.id)
            await this.$router.push({name: 'characters'})
        },
        getBackground(element){
            switch (element.toLowerCase()) {
                case 'geo':
                    return 'to-yellow-500 from-orange-500'
                case 'pyro':
                    return 'to-red-500 from-orange-500'
                case 'cryo':
                    return 'to-sky-500 from-cyan-500'
                case 'anemo':
                    return 'to-green-500 from-emerald-500'
                case 'hydro':
                    return 'to-blue-500 from-indigo-500'
                case 'electro':
                    return 'to-indigo-500 from-purple-500'
                default:
                    return 'to-gray-700 from-gray-800'
            }
        }
    }
}
</script>
