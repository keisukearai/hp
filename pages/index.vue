<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
            <div class="flex flex-wrap w-full my-5 lg:mb-16">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        弊社の主な事業内容
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    企業や組織のためにカスタムソフトウェアやアプリケーションの開発のお手伝いを行っております。
                    複数のシステムを統合し、一元的な管理ができるようにするアドバイス、改善提案を提供します。
                    データ管理のニーズに合わせて、データベースシステムの構築や運用を行います。
                </p>
            </div>
            <div class="flex flex-wrap -mx-4">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/undraw_programming_re_kg9v.svg" alt="content">
                        <div class="tracking-widest text-indigo-600 text-xs font-medium title-font">SUBTITLE</div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">受託開発</h2>
                        <p class="leading-relaxed text-base text-gray-700">
                            Webアプリケーション開発をメインに開発を行っております。
                            サーバーサイド言語は、Java、PHP、Python。フロントサイド言語は、HTML、CSS、JQuery、Vueとなります。
                            Linuxでサーバ構築を行います。
                        </p>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 shadow-md rounded-lg">
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/undraw_informed_decision_p2lh.svg" alt="content">
                        <div class="tracking-widest text-indigo-600 text-xs font-medium title-font">SUBTITLE</div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">ITコンサルティング</h2>
                        <p class="leading-relaxed text-base text-gray-700">
                            社内ITシステムに関するアドバイスや改善提案を行っております。
                            顧客のビジネス上の要件と技術的な要件をバランス良く満たす提案をモットーにしております。
                        </p>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-gray-100 p-6 shadow-md rounded-lg">
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="/image/undraw_educator_re_ju47.svg" alt="content">
                        <div class="tracking-widest text-indigo-600 text-xs font-medium title-font">SUBTITLE</div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">プログラミング教育</h2>
                        <p class="leading-relaxed text-base text-gray-700">
                            オンラインでのマンツーマンレッスンを行っております。開発未経験者にも丁寧に指導させて頂きます。
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
            title: 'トップ'
        }
    }
}
</script>

<style>
</style>
