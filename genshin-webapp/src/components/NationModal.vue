<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div
    :class="getBackground(nation.element)"
     class="inline-block align-bottom bg-gradient-to-r  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-black bg-opacity-20">
          <!-- Heroicon name: outline/check -->
          <img :src="icon" alt="">
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-white" id="modal-title">
            {{ nation.name }}
          </h3>
          <div class="mt-2">
            <p class="text-sm text-white">
              {{nation.element}} nation ruled by {{nation.archon}}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <button @click="$emit('close')" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black bg-opacity-20 text-base font-medium text-white hover:bg-opacity-40 focus:outline-none sm:text-sm">
         Close
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "NationModal",
    emtis: ['close'],
    props: {
        nation: {
            type:Object,
            required: true
        }
    },
    computed: {
        icon(){
            return `${import.meta.env.VITE_APP_GAME_API}/nations/${this.nation.name.toLowerCase()}/icon`
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
