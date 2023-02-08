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
            <!-- search area start -->
            <div class="flex md:justify-center mb-6">
                <div class="w-3/5 md:w-2/5">
                    <select v-model="selected_category"
                        v-on:change="searchNews"
                        class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 select_class"
                    >
                        <option></option>
                        <option v-for="category in newsCategory" v-bind:value="category.id" v-bind:key="category.id">
                            {{ category.category_name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex md:justify-center mb-8">
                <div class="flex md:w-2/5">
                    <input type="text"
                        v-model="word"
                        placeholder="キーワード"
                        class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                    <span class="ml-2">
                        <button
                            type="button"
                            v-on:click="searchNews"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded px-5 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" />
                            </svg>
                            <span class="inline-flex items-center justify-center w-6 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-md">
                                {{ newsCount }}件
                            </span>
                        </button>
                    </span>
                </div>
            </div>
            <!-- search area end -->
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
                                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 ml-6 mb-10">
                                    <div class="flex justify-between pb-5">
                                        <nuxt-link v-bind:to="'/newsdetail/' + article.id + '/'" class="font-medium text-gray-600 hover:text-gray-700 focus:text-gray-800 duration-300 transition ease-in-out text-sm">
                                            【{{ article.title }}<span class="text-sm px-3">{{ article.category_name }}</span>
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
                <div class="text-center" v-if="newsCount != 0">
                    <sliding-pagination
                        v-bind:current="currentPage"
                        v-bind:total="totalPages"
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
            currentPage: 1,
            word: '',
            selected_category: ''
        }
    },
    head() {
        return {
            title: 'ニュース'
        }
    },
    async asyncData({ $axios, $config }) {
        // URL
        const url = $config.API_URL_NEWS

        try {
            // console.log("axios news start:" + url)
            // リクエスト
            const response = await $axios.$get(url)
            // console.log(response)
            // 返却 dataにマージ
            return {
                news: response.news,
                totalPages: response.total_pages,
                newsCount: response.news_count,
                newsCategory: response.news_category,
            }
        } catch (e) {
            console.log("axios erorr")
            console.log(e)
            return
        }
    },
    methods: {
        async paginatioHandler(selectedPage) {
            // ページ設定
            this.currentPage = selectedPage
            // URL
            const url = this.$config.API_BASE_URL + this.$config.API_URL_NEWS + "?page=" + selectedPage + "&word=" + this.word
            console.log("paginatioHandler url:" + url)
            const response = await fetch(
                url
            ).then(res => res.json()
            ).catch((error) => {
                console.log(error)
            })
            // console.log(response)

            // 一覧反映
            this.news = response.news
        },
        async searchNews() {
            // URL
            const url = this.$config.API_BASE_URL + this.$config.API_URL_NEWS + "?word=" + this.word + "&category=" + this.selected_category
            console.log("searchNews url:" + url)
            const response = await fetch(
                url
            ).then(res => res.json()
            ).catch((error) => {
                console.log(error)
            })
            // console.log(response)

            // 反映
            this.news = response.news
            this.totalPages = response.total_pages
            this.newsCount = response.news_count
        }
    }
}
</script>

<style>
.c-sliding-pagination__list-element {
    padding: 0.6rem 1rem !important;
    margin-right: 1rem !important;
    background-color: #718096 !important;
}
.c-sliding-pagination__list-element--active {
    background: #1F2937 !important;
}
.c-sliding-pagination__list-element:hover {
    background: #9CA3AF !important;
}
.c-sliding-pagination__list-element--disabled {
    background: #ffffff !important;
}
.select_class {
    padding-top: 0.45rem !important;
    padding-bottom: 0.45rem !important;
}
</style>
