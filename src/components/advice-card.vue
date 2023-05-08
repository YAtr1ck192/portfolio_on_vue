<template>
    <div class="advice-card">
        <img :src="advice.img" alt="advice-img">
        <div class="advice-title">{{ advice.title }}</div>
        <div class="advice-desc small-p">{{ advice.desc }}</div>
    </div>
</template>

<script>
export default {
    name: "advice-card",
    props: ['advice']
}
</script>

<style scoped>
    .advice-desc {
        max-width: 280px;
    }
    .advice-title {
        font-family: 'rm';
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        color: #363940;
        margin: 36px 0 15px;
    }
</style>