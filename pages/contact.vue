<template>
    <div class="page_body">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <!-- form - start -->
            <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div>
                <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">お名前*</label>
                <input name="first-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div class="sm:col-span-2">
                <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
                <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div class="sm:col-span-2">
                <label for="subject" class="inline-block text-gray-800 text-sm sm:text-base mb-2">表題*</label>
                <input name="subject" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>

            <div class="sm:col-span-2">
                <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">内容*</label>
                <textarea name="message" class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
                <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-xs md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2">
                    送信する
                </button>
                <span class="text-gray-500 text-sm">*必須</span>
            </div>
            </form>
            <!-- form - end -->
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default'
}
</script>

<style>
</style>
