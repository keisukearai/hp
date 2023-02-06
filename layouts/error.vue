<template>
  <div class="container px-5 pt-24 pb-16 mx-auto">
      <div class="flex flex-wrap w-full my-5 lg:mb-16">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    {{ error.statusCode }}エラー
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                {{ error.message }}
            </div>
      </div>
  </div>
</template>

  <script>
  export default {
    props: ['error'],
    layout: 'default'
  }
  </script>