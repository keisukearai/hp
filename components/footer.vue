<template>
    <div class="">
        <footer class="bg-stj-mist p-10 text-steam-black main_body">
            <div class="flex mb-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                {{ footer.zip }} {{ footer.address }}
            </div>
            <div class="flex">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                {{ footer.mail }}
            </div>
            <div class="grid md:grid-cols-5 gap-4 my-8">
                <div>
                    <a class="underline" href="/">トップ</a>
                </div>
                <div>
                    <a class="underline" href="/company">会社概要</a>
                </div>
                <div>
                    <a class="underline" href="/news">ニュース</a>
                </div>
                <div>
                    <a class="underline" href="/contact">問合せ</a>
                </div>
                <div class="animate-bounce">
                    <a class="underline" href="/sitelink">サイト</a>
                </div>
            </div>
            <div class="flex justify-end">
                <small>2023 KOTORA, Inc. All Rights Reserved</small>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footer: null
        }
    },
    async fetch() {
        // URL
        const url = this.$config.API_BASE_URL + this.$config.API_URL_COMPANY
        const response = await fetch(
            url
        ).then(res => res.json()
        ).catch((error) => {
            console.log(error)
        })
        // console.log(response)
        this.footer = response.company[0];
    }
}
</script>

<style>
</style>