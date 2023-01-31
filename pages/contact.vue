<template>
    <div class="page_body">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                <!-- 正常メッセージエリア -->
                <div class="sm:col-span-2" v-if="info_msg_area">
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
                <div class="sm:col-span-2" v-if="error_msg_area">
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
                <div>
                    <label for="iname" class="inline-block text-gray-800 text-sm sm:text-base mb-2">お名前 <span class="text-red-500 text-xs">*必須</span></label>
                    <input type="text" v-model="name" id="iname"
                        v-bind:class="{ 'inuput_error': valid_name }"
                        class="w-full input_class"
                    />
                    <span v-text="msg_name" class="text-red-500 text-sm"></span>
                </div>

                <div class="sm:col-span-2">
                    <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メール <span class="text-red-500 text-xs">*必須</span></label>
                    <input type="email" v-model="mail" id="email"
                    v-bind:class="{ 'inuput_error': valid_mail }"
                    class="w-full input_class"
                    />
                    <span v-text="msg_mail" class="text-red-500 text-sm"></span>
                </div>

                <div class="sm:col-span-2">
                    <label for="title" class="inline-block text-gray-800 text-sm sm:text-base mb-2">表題 <span class="text-red-500 text-xs">*必須</span></label>
                    <input name="title" v-model="title" id="title"
                    v-bind:class="{ 'inuput_error': valid_title }"
                    class="w-full input_class"
                    />
                    <span v-text="msg_title" class="text-red-500 text-sm"></span>
                </div>

                <div class="sm:col-span-2">
                    <label for="content" class="inline-block text-gray-800 text-sm sm:text-base mb-2">内容 <span class="text-red-500 text-xs">*必須</span></label>
                    <textarea name="content" v-model="content" id="content"
                    v-bind:class="{ 'inuput_error': valid_content }"
                    class="w-full h-64 input_class"></textarea>
                    <span v-text="msg_content" class="text-red-500 text-sm"></span>
                </div>

                <div class="sm:col-span-2 flex justify-between items-center">
                    <button v-on:click="send"
                    v-bind:disabled="isSend"
                    v-bind:class="(isSend == true? 'bg-gray-500': 'bg-indigo-500 hover:bg-indigo-600')"
                    class="inline-block active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-xs md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2">
                        送信する
                    </button>
                </div>
            </div>
        </div>
    </div>
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
