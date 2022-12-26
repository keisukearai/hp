<template>
    <div>
        <Header />
        <main class="bg-lite-neptune">
            <div class="flex flex-col min-h-screen">
                <nuxt />
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