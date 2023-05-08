<template>
    <div id="blogPage" class="blogPage">
        <AllPostsBlock />
    </div>
</template>

<script>

import AllPostsBlock from "@/components/allPostsBlock.vue";
export default {
    name: "BlogView",
    components: {
        AllPostsBlock,
    }
}
</script>

<style scoped>
    @import "@/css/global_styles.css";
</style>