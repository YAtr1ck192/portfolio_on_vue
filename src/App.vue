<template>
    <div id="app">
        <headerBlock />
        <router-view />
        <footerBlock />
    </div>
</template>

<script>

import headerBlock from "@/components/header-block.vue";
import footerBlock from "@/components/footer-block.vue";

export default {
    name: 'App',
    components: {
        headerBlock,
        footerBlock
    },
}
</script>

<style>
    @import "@/css/global_styles.css";
</style>
