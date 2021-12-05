

<template>
<div class="my-2 sm:my-0 relative bg-gradient-to-r p-4 rounded text-white"
       :class="getBackground(character.vision)"
  >
  
    <div class="absolute top-2 right-2">
      <img class="rounded-full w-8 h-8" :src="elementIcon" alt="">
    </div>

    <div class="h-full flex justify-between flex-col">
      <div>
        <div class="bg-black bg-opacity-20 rounded-full mx-auto w-24 h-24 overflow-hidden">
          <img class="rounded-full" :src="image" alt="">
        </div>
        <div class="flex justify-center">
          <svg v-for="i in  character.rarity" :key="i + 'star'" xmlns="http://www.w3.org/2000/svg" class="opacity-70 h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div class="mt-4 capitalize font-black">{{character.name}}</div>
        <div class="opacity-75 italic text-xs">{{character.description}}</div>
      </div>
      
      <div class="mt-4 w-full">
         <button @click="$router.push({name: 'character', params: {id: character.id}})" class="w-full block bg-black rounded bg-opacity-20 hover:bg-opacity-40 py-2">
          See Details
        </button>
      </div>
    </div>
  </div>


</template>

<script>
import NationModal from './NationModal.vue'
export default{
  components: { NationModal },
  props:{
    character: {
      type: Object,
      required: true
    }
  },
  data(){
    return  {
      displayModal: false,
    }
  },
  computed:{
    image(){
      return `${import.meta.env.VITE_APP_GAME_API}/characters/${this.character.name.toLowerCase()}/icon-big`
    },
    elementIcon(){
      return this.character.vision ? `${import.meta.env.VITE_APP_GAME_API}/elements/${this.character.vision.toLowerCase()}/icon` : ''
    }
  },
  methods:{
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