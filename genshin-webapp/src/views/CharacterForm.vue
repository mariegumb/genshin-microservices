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
    <div class="mt-4 mb-24  relative bg-gradient-to-r p-4 rounded text-white" :class="getBackground(character.vision)" v-if="character">

        <div class="">
            <div class="flex justify-between w-full">
                    <div>
                        <label for="name" class="block text-sm font-medium text-white">Name</label>
                        <div class="mt-1">
                            <input v-model="character.name" type="text" name="name" id="name" class="bg-black bg-opacity-20 placeholder-white focus:ring-gray-900  block w-full sm:text-sm border-0 rounded-md" placeholder="John Smith">
                        </div>
                    </div>
                    <div>
                        <label for="rarity" class="block text-sm font-medium text-white">Rarity</label>
                        <div class="mt-1">
                            <input v-model="character.rarity" type="number" min="1" max="5" name="rarity" id="rarity" class="bg-black bg-opacity-20 placeholder-white focus:ring-gray-900  block w-full sm:text-sm border-0 rounded-md" placeholder="5">
                        </div>
                    </div>
            </div>
           <div class="mt-6 r">
               <div>
                        <label for="description" class="block text-sm font-medium text-white">Description</label>
                        <div class="mt-1">
                            <textarea v-model="character.description" type="text"  name="description" id="description" class="bg-black bg-opacity-20 placeholder-white focus:ring-gray-900  block w-full sm:text-sm border-0 rounded-md" placeholder="description"></textarea>
                        </div>
                    </div>
           </div>
           <div class="mt-2 text-sm capitalize">
               <div>
                        <label for="weapon" class="block text-sm font-medium text-white">Weapon</label>
                        <div class="mt-1">
                            <input v-model="character.weapon" type="text" name="weapon" id="weapon" class="bg-black bg-opacity-20 placeholder-white focus:ring-gray-900  block w-full sm:text-sm border-0 rounded-md" placeholder="Sword">
                        </div>
                    </div>
           </div>
           <div class="mt-2 text-sm">
               <div>
                        <label for="vision" class="block text-sm font-medium text-white">Element</label>
                        <div class="mt-1">
                            <input v-model="character.vision" type="text" name="vision" id="vision" class="bg-black bg-opacity-20 placeholder-white focus:ring-gray-900  block w-full sm:text-sm border-0 rounded-md" placeholder="Electro, Hydro, Anemo ...">
                        </div>
                    </div>
           </div>
        </div>
        <div class="mt-4 flex justify-end">
        <button @click="save()" class="text-xs ml-2 px-4 bg-black rounded bg-opacity-20 hover:bg-opacity-40 py-2">
          
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          Save changes
        </button>
        </div>
    </div>
    
</template>

<script>
import NationModal from '../components/NationModal.vue'
import { getCharacter, updateCharacter } from '../services/characterService'
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
        async save(){
            await updateCharacter(this.character)
            await this.$router.push({name: 'character', params: {id: this.character.id}})
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
