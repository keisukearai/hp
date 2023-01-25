<template>
    <div class="page_body">
        <div class="flex justify-center">
            <article>
                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                    <div>{{ n.title }}</div>
                    <nuxt-content :document="n" />
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params.slug);
    const n = await $content('news', params.slug).fetch()
    console.log(n);
    return { n }
  }
}
</script>