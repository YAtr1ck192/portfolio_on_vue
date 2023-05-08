<template>
    <div class="advice-block">
        <div class="advice-cards">
            <advice-card
                v-for="item in items"
                :key="item"
                :advice="item"
                class="card"
            />
        </div>
    </div>
</template>

<script>
import AdviceCard from "@/components/advice-card.vue";

export default {
    name: "adviceBlock",
    components: { AdviceCard },
    data () {
        return {
            items: [
                {
                    img: '/images/advice-img-1.png',
                    title: 'The first',
                    desc: 'Learn To Love Growth And Change And You Will Be A Success'
                },
                {
                    img: '/images/advice-img-2.png',
                    title: 'Second',
                    desc: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation'
                },
                {
                    img: '/images/advice-img-3.png',
                    title: 'Third',
                    desc: 'The Small Change That Creates Massive Results In Your Life'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .advice-block {
        padding: 100px 0;
    }
    .advice-cards {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    @media screen and (max-width: 920px){
        .advice-cards {
            max-width: 290px;
            flex-wrap: wrap;
            margin: 0 auto;
        }
        .card {
            margin-bottom: 36px;
        }
        .card:last-child {
            margin-bottom: 0;
        }
        .advice-block {
            padding: 20px 0 70px;
        }
    }
</style>