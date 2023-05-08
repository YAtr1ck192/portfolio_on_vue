<template>
    <div class="post-contact-us-block">
        <h2 class="block-title">{{ title }}</h2>
        <p class="desc small-p">{{ desc }}</p>
        <router-link to="/">
            <button class="default-purple-button post-button">{{ buttonContent }}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "postContactUs",
    data () {
        return {
            title: 'Title text block',
            desc: 'text block text block text block text block text block ' +
                'text block text block text block text block text block ',
            buttonContent: 'Contact Us'
        }
    }
}
</script>

<style scoped>
    .post-contact-us-block {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    h2 {
        padding: 0;
        margin: 0 0 20px 0;
        text-align: center;
    }
    .desc {
        margin-bottom: 40px;
        max-width: 400px;
        text-align: center;
    }
    .post-contact-us-block {
        padding: 45px;
        border: solid 1px #E1E5EE;
        border-radius: 5px;
    }
    .post-button {
        padding: 13px 30px;
    }
    @media screen and (max-width: 620px){
        .post-button {
            width: 288px;
        }
        .post-contact-us-block {
            border: solid 1px transparent;
            padding: 140px 0;
        }
    }
</style>