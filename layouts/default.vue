<template>
    <div>
        <Header />
        <main class="bg-white">
            <div class="flex flex-col min-h-screen">
                <transition name="page">
                    <nuxt />
                </transition>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style scoped>

.page-enter {
    opacity: 0;
}
.page-enter-active {
    transition: opacity 10s;
}
</style>