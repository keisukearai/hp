<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full my-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        弊社からのお知らせ
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    最新のトピック、気になる技術情報をつぶやきます。気になる方はチェックしてみて下さい。
                </p>
            </div>
            <div class="flex justify-center">
                <article>
                    <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-xl ml-6 mb-10 w-11/12">
                        <div class="text-lg pb-3 font-bold">
                            {{ newsdetail.title }}<span class="text-sm px-3">{{ category.category_name }}</span>
                        </div>
                        <div v-html="newsdetail.content"></div>
                        <div class="flex justify-between mt-5">
                            <div>
                                {{ $dayjs(newsdetail.entry_date).format('YYYY/MM/DD HH:mm:ss') }}
                            </div>
                            <div class="ml-2">
                                <a href='/news' class="inline-block px-4 py-1 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">
                                    back
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'default',
    head() {
        return {
            title: 'ニュース詳細'
        }
    },
    async asyncData({ $axios, $config, params }) {
        console.dir("params:" + params.id);
        // 取得先のURL(nuxt.config.js)
        const url = `${ $config.API_URL_NEWS }/${ params.id }/`

        try {
            // console.log("axios start:" + url)
            // リクエスト
            const response = await $axios.$get(url)
            // console.log(response.newsdetail[0])
            // 返却 dataにマージ
            return {
                newsdetail: response.newsdetail[0],
                category: response.category[0]
            }
        } catch (e) {
            console.log("axios erorr")
            console.log(e)
            return
        }
    }
}
</script>