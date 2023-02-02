<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 pb-16 mx-auto">
            <div class="flex flex-wrap w-full my-5 lg:mb-16">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        弊社の会社概要
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    <div class="inline-flex">
                        Mission：ITシステムを通じて世界をよりよくする。
                    </div>
                    <div class="inline-flex">
                        Vision：お客様のご要望に答え続ける。
                    </div>
                    <div class="inline-flex">
                        Value：スピード感を大切にしてお客様に寄り添う。
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">会社名</h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.name }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    代表者
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.representative }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    設立
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.established }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    所在地
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            <p>{{ company.zip }}</p>
                            <p>{{ company.address }}</p>
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    事業内容
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base whitespace-pre-line">
                            {{ company.business_content }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    資本金
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.capital }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    取引銀行
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.business_bank }}
                        </p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 md:w-1/2 p-3">
                    <div class="border border-gray-200 p-6 rounded-lg shadow-sm">
                        <div class="flex">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                                </svg>
                            </div>
                            <div class="inline-flex pt-2 mx-5">
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                                    決算期
                                </h2>
                            </div>
                        </div>
                        <p class="leading-relaxed text-base">
                            {{ company.accounting_period }}
                        </p>
                    </div>
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
