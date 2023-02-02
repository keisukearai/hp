<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
            <div class="flex flex-wrap w-full my-5 lg:mb-16">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        お問合せフォーム
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">
                    お困りごとがあれば、なんなりとお申し付け下さい。
                </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <!-- 正常メッセージエリア -->
                <div class="sm:col-span-2 pb-10" v-if="info_msg_area">
                    <div class="flex w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <div class="flex items-center justify-center w-12 bg-blue-500">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                            </svg>
                        </div>
                        <div class="px-4 py-2 -mx-3">
                            <div class="mx-3">
                                <span class="font-semibold text-blue-500 dark:text-blue-400">Info</span>
                                <p class="text-sm text-gray-600 dark:text-gray-200">しばらくお待ち下さい。担当者から連絡致します。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- エラーメッセージエリア -->
                <div class="sm:col-span-2 pb-10" v-if="error_msg_area">
                    <div class="flex w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <div class="flex items-center justify-center w-12 bg-red-500">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                            </svg>
                        </div>
                        <div class="px-4 py-2 -mx-3">
                            <div class="mx-3">
                                <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                                <p class="text-sm text-gray-600 dark:text-gray-200">
                                    入力エラーがあります。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">名前</label>
                            <input type="text" id="name"
                                class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                v-model="name"
                                v-bind:class="{ 'inuput_error': valid_name }"
                            />
                            <span v-text="msg_name" class="text-red-500 text-sm"></span>
                        </div>
                    </div>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-600">メールアドレス</label>
                            <input type="email" id="email"
                                class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                v-model="mail"
                                v-bind:class="{ 'inuput_error': valid_mail }"
                            />
                            <span v-text="msg_mail" class="text-red-500 text-sm"></span>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-600">表題</label>
                            <input type="text" id="title"
                                class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                v-model="title"
                                v-bind:class="{ 'inuput_error': valid_title }"
                            />
                            <span v-text="msg_title" class="text-red-500 text-sm"></span>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="content" class="leading-7 text-sm text-gray-600">内容</label>
                            <textarea id="content"
                                class="input_class focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                v-model="content"
                                v-bind:class="{ 'inuput_error': valid_content }"
                            ></textarea>
                            <span v-text="msg_content" class="text-red-500 text-sm"></span>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <button class="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded"
                        v-on:click="send"
                        v-bind:disabled="isSend"
                        v-bind:class="(isSend == true? 'bg-gray-500 cursor-auto': 'bg-indigo-500 hover:bg-indigo-600')"
                        >送信</button>
                    </div>
                    <div class="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
                        <div class="pb-8">
                            <a class="text-indigo-500" v-bind:href="'mailto:' + company.email">
                                {{ company.mail }}
                            </a>
                        </div>
                        <span class="inline-flex">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-blue-500" href="https://twitter.com/araiautocom" target="_blank">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            title: null,
            name: null,
            mail: null,
            content: null,
            valid_name: false,
            valid_mail: false,
            valid_title: false,
            valid_content: false,
            msg_name: null,
            msg_mail: null,
            msg_title: null,
            msg_content: null,
            info_msg_area: false,
            error_msg_area: false,
            isSend: false
        }
    },
    head() {
        return {
            title: '問合せ'
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
    },
    methods: {
        async send($axios) {
            console.log("send!!")

            // エラークリア
            this.error_msg_area = false
            this.info_msg_area = false
            this.valid_name = false
            this.valid_mail = false
            this.valid_title = false
            this.valid_content = false
            this.msg_name = null
            this.msg_mail = null
            this.msg_title = null
            this.msg_content = null

            try {
                // 取得先のURL(nuxt.config.js)
                const url = this.$CONST.API_BASE_URL + "/hp/inquiry"
                console.log("axios start:" + url)
                // console.log(this.$axios.defaults)

                const sendData = {
                    title: this.title,
                    name: this.name,
                    mail: this.mail,
                    content: this.content,
                }

                // リクエスト
                const response = await this.$axios.$post(url, sendData)
                console.log('ret:' + response.ret)
                // console.dir(response.messages)

                // 入力チェックNGの場合
                if (response.ret == 'ng') {
                    response.messages.forEach(msg =>
                        this.invalidSet(msg)
                    )
                // 入力チェックOKの場合
                } else {
                    this.info_msg_area = true
                    this.msg_name = null
                    this.msg_mail = null
                    this.msg_title = null
                    this.msg_content = null
                    this.isSend = true
                }
            } catch (e) {
                console.log("axios erorr")
                console.log(e)
                return
            }
        },
        invalidSet(msg) {
            console.dir(msg);
            let valid_key = `valid_${msg.msg_key}`
            console.log(valid_key)
            this[valid_key] = true
            let msg_key = `msg_${msg.msg_key}`
            this[msg_key] = msg.msg
            this.error_msg_area = true
        }
    }
}
</script>

<style>
</style>
