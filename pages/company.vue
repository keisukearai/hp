<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        弊社の会社概要
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    企業や組織のためにカスタムソフトウェアやアプリケーションの開発のお手伝いを行っております。
                    複数のシステムを統合し、一元的な管理ができるようにするアドバイス、改善提案を提供します。
                    データ管理のニーズに合わせて、データベースシステムの構築や運用を行います。
                </p>
            </div>
            <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        会社名
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.name }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        代表者
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.representative }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        設立
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.established }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        所在地
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        <p>{{ company.zip }}</p>
                        <p>{{ company.address }}</p>
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        事業内容
                    </h2>
                    <p class="leading-relaxed text-base mb-4 whitespace-pre-line">
                        {{ company.business_content }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        資本金
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.capital }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        取引銀行
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.business_bank }}
                    </p>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full mb-10 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                        決算期
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                        {{ company.accounting_period }}
                    </p>
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
            title: '会社概要'
        }
    },
    async asyncData({ $axios }) {
        // 取得先のURL(nuxt.config.js)
        const url = "/hp/company"

        try {
            console.log("axios start:" + url)
            // リクエスト
            const response = await $axios.$get(url)
            // 返却 dataにマージ
            return {
                company: response.company[0]
            }
        } catch (e) {
            console.log("axios erorr")
            console.log(e)
            return
        }
    }
}
</script>

<style>
</style>
