<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
            <div class="flex flex-wrap w-full my-5 lg:mb-16">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        おすすめサイトリンク
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    弊社がおすすめするサイトのリンクです。
                </p>
            </div>
            <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                <div v-for="site in sitelink" v-bind:key="site.id">
                    <a v-bind:href="site.url" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {{ site.title }}
                        </h5>
                        <hr class="my-3" />
                        <p class="font-normal text-gray-700 whitespace-pre-line"><!--
                            -->{{ site.content }}<!--
                        --></p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'default',
    head() {
        return {
            title: 'サイトリンク'
        }
    },
    async asyncData({ $axios }) {
        // URL
        const url = "/hp/sitelink"
        console.log(url)

        try {
            // リクエスト
            const response = await $axios.$get(url)
            console.log(response)
            // 返却 dataにマージ
            return {
                sitelink: response.sitelink
            }
        } catch (e) {
            console.log("axios erorr")
            console.log(e)
            return
        }
    },
}
</script>

<style>
</style>
