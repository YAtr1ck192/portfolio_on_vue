<template>
    <div class="skill-card">
        <div @click="activeCard" class="top-item-skill-card">
            <div class="card-title">{{cardTitle}}</div>
            <button class="skill-card-button">+</button>
        </div>
        <div class="card-desc ">
            <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again?
                Many of my conflicts have the same feel to them, like “Hey,
                I think I’ve been here before,” but I can’t figure out how I wound up in the same place.
            </p>
            <p>The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by
                Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;
                I know it speaks volumes to me. “Autobiography in Five Chapters”
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "skill-card",
    props: ['cardTitle'],
    methods: {
        activeCard(event) {
            document.querySelectorAll('.active-card').forEach((el) => el.classList.remove('active-card'));
            event.target.parentNode.classList.add('active-card');
            document.querySelectorAll('.card-desc').forEach((el) => el.style.display = 'none');
            event.target.nextSibling.style.display = 'block';
            document.querySelectorAll('.skill-card-button').forEach((el) => el.textContent = '+');
            event.target.lastChild.textContent = '-';
        }
    }
}
</script>

<style scoped>
    .skill-card {
        border: solid 1px #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .active-card {
        border: solid 1px #6E38F7;
    }
    .card-desc {
        display: none /*block*/;
        transition: .9s ease-in-out;
        padding: 0 25px 0 25px;

    }
    .card-desc p {
        max-width: 750px;
        font-size: 16px;
        font-family: "rr";
        color: #363940;
        margin-bottom: 20px;
    }
    .skill-card-button {
        border: none;
        color: #6E38F7;
        font-family: "rb";
        background: transparent;
    }
    .top-item-skill-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 19px 25px 20px 25px;
    }
    .card-title {
        font-size: 18px;
        color: #363940;
        font-family: "rm";
    }
    @media screen and (min-width: 620px) and (max-width: 819px) {
        .card-desc {
            overflow: scroll;
            overflow-x:hidden;
            height: 172px;
        }
        .card-desc p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 619px){
        .card-desc {
            overflow: scroll;
            overflow-x:hidden;
            height: 172px;
        }
        .card-desc p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
        .skill-card {
            width: 288px;
        }
    }
</style>