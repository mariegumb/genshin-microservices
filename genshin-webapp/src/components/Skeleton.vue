

<template>
  <div class="my-2 sm:my-0 relative bg-gray-800 animate-pulse p-4 rounded">
    <div class="absolute top-2 right-2">
      <div class="rounded-full w-8 h-8" ></div>
    </div>

    <div class="h-full flex justify-between flex-col">
      <div>
        <div class="bg-gray-900 rounded-full mx-auto w-24 h-24 overflow-hidden">
          <div class="rounded-full"></div>
        </div>
        <div class="flex justify-center">
          <svg v-for="i in  5" :key="i + 'star'" xmlns="http://www.w3.org/2000/svg" class="text-gray-900 h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div class="mt-4 w-24 h-4 bg-gray-900 rounded"></div>
        <div class="mt-2 w-full h-12 bg-gray-900"></div>
      </div>
      
      <div class="mt-4 w-full">
        <button  class="cursor-default w-full block h-8 bg-gray-900 rounded  py-2">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
}
</script>