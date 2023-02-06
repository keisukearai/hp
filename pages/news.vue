<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
            <div class="flex flex-wrap w-full my-5 lg:mb-16">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        弊社からのお知らせ
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    最新のトピック、気になる技術情報をつぶやきます。気になる方はチェックしてみて下さい。
                </p>
            </div>
            <div class="text-lg">全{{ newsCount }}件</div>
            <!-- <input type="text"
                model="word"
                placeholder="hogehoge"
            /> -->
            <div class="flex justify-center">
                <ol>
                    <div v-for="article in news" v-bind:key="article.id">
                        <li class="border-l-2 border-gray-600 mb-10">
                            <div class="md:flex flex-start">
                                <div class="bg-gray-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                </div>
                                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-xl ml-6 mb-10 w-11/12">
                                    <div class="flex justify-between mb-4">
                                        <nuxt-link v-bind:to="'/newsdetail/' + article.id + '/'" class="font-medium text-gray-600 hover:text-gray-700 focus:text-gray-800 duration-300 transition ease-in-out text-sm">
                                            {{ article.title }}
                                        </nuxt-link>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="font-medium text-gray-600 duration-300 transition ease-in-out text-sm pr-5">
                                            {{ $dayjs(article.updatedAt).format('YYYY/MM/DD') }}
                                        </div>
                                        <nuxt-link v-bind:to="'/newsdetail/' + article.id + '/'" class="inline-block px-4 py-1 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">
                                            Preview
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ol>
            </div>
            <client-only>
                <div class="text-center">
                    <sliding-pagination
                        :current="currentPage"
                        :total="totalPages"
                        @page-change="paginatioHandler"
                    />
                </div>
            </client-only>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            // word: 'ニュース',
            currentPage: 1
        }
    },
    head() {
        return {
            title: 'トップ'
        }
    },
    async asyncData({ $axios }) {
        // 取得先のURL(nuxt.config.js)
        const url = "/hp/news"

        try {
            console.log("axios news start:" + url)
            // リクエスト
            const response = await $axios.$get(url)
            // console.log(response)
            // 返却 dataにマージ
            return {
                news: response.news,
                totalPages: response.total_pages,
                newsCount: response.news_count,
            }
        } catch (e) {
            console.log("axios erorr")
            console.log(e)
            return
        }
    },
    methods: {
        async paginatioHandler(selectedPage) {
            // console.log("selectedPage:" + selectedPage)
            // console.log("word:" + this.word)
            this.currentPage = selectedPage

            // URL
            const url = this.$CONST.API_BASE_URL + this.$CONST.API_URL_NEWS + "?page=" + selectedPage
            console.log("url:" + url)
            const response = await fetch(
                url
            ).then(res => res.json())
            // console.log(response)
            // 一覧反映
            this.news = response.news
        }
    }
}
</script>

<style>
.c-sliding-pagination__list-element {
    padding: 0.6rem 1rem;
    margin-right: 1rem;
    background-color: #718096;
}
.c-sliding-pagination__list-element--active {
    background: #1F2937;
}
.c-sliding-pagination__list-element:hover {
    background: #9CA3AF;
}
.c-sliding-pagination__list-element--disabled {
    background: #ffffff;
}
</style>
