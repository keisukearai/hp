<template>
    <div>
        <nav class="bg-white p-2 mt-0 fixed w-full z-10 top-0">
            <div class="container mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/2 justify-center md:justify-start text-steam-black font-extrabold">
                    <a class="no-underline text-2xl hover:text-stj-mist" href="/">
                        <span class="pl-2"> 株式会社 XXX</span>
                    </a>
                </div>
                <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center text-sm lg:text-lg">
                        <li class="mr-3">
                            <a v-bind:class="[links['top'] == true ? 'header_link_active' : 'header_link_inactive']" href="/" v-cloak>トップ</a>
                        </li>
                        <li class="mr-3">
                            <a v-bind:class="[links['company'] == true ? 'header_link_active' : 'header_link_inactive']" href="company">会社概要</a>
                        </li>
                        <li class="mr-3">
                            <a v-bind:class="[links['news'] == true ? 'header_link_active' : 'header_link_inactive']" href="news" v-cloak>ニュース</a>
                        </li>
                        <li class="mr-3">
                            <a v-bind:class="[links['contact'] == true ? 'header_link_active' : 'header_link_inactive']" href="contact">問合せ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            links: {'top': false, 'news': false, 'company': false, 'contact': false}
        }
    },
    mounted() {
        // 現在のURL
        let urls = window.location.href.split("/");
        // console.log(urls);
        let nav = urls[3];
        // console.log("nav:" + nav);
        if (nav == '') {
            this.$set(this.links, 'top', true);
        } else if (nav == 'company') {
            this.$set(this.links, 'company', true);
        } else if (nav == 'news') {
            this.$set(this.links, 'news', true);
        } else if (nav == 'contact') {
            this.$set(this.links, 'contact', true);
        }
        // console.log("links:" + this.links);
    }
}
</script>

<style>
</style>