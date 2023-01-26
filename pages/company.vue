<template>
    <div class="page_body">
        <div class="flex justify-center">
            <table class="border-separate text-steam-black w-full md:w-3/4">
                <tbody>
                    <tr>
                        <th class="bg-lite-neptune p-5 w-1/3">
                            会社名
                        </th>
                        <td class="p-5">
                            {{ company.name }}
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            代表者
                        </th>
                        <td class="p-5">
                            {{ company.representative }}
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            所在地
                        </th>
                        <td class="p-5">
                            <div>{{ company.zip }}</div>
                            <div>{{ company.address }}</div>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            設立
                        </th>
                        <td class="p-5">
                            {{ company.established }}
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            事業内容
                        </th>
                        <td class="p-5 pt-0">
                            <div class="whitespace-pre-line">
                                {{ company.business_content }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            資本金
                        </th>
                        <td class="p-5">
                            {{ company.capital }}
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            取引銀行
                        </th>
                        <td class="p-5">
                            {{ company.business_bank }}
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-lite-neptune p-5">
                            決算期
                        </th>
                        <td class="p-5">
                            {{ company.accounting_period }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
