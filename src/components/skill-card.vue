<template>
    <div class="skill-card">
        <div @click="activeCard" class="top-item-skill-card">
            <div class="card-title">{{ cardTitle }}</div>
            <button class="skill-card-button">+</button>
        </div>
        <div class="card-desc">
            <p>
                {{cardFirstText}}
            </p>
            <p>
                The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by
                Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;
                I know it speaks volumes to me. “Autobiography in Five Chapters”
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "skill-card",
    props: [
        'cardTitle',
        'cardFirstText',
        'cardSecondText'
    ],
    methods: {
        activeCard(event) {
            if (event.target.lastChild.textContent === '+'){
                document.querySelectorAll('.active-card').forEach((el) => el.classList.remove('active-card'));
                event.target.parentNode.classList.add('active-card');
                document.querySelectorAll('.card-desc').forEach((el) => el.style.display = 'none');
                event.target.nextSibling.style.display = 'block';
                document.querySelectorAll('.skill-card-button').forEach((el) => el.textContent = '+');
                event.target.lastChild.textContent = '-';
                console.log(event.target.parentNode);
            } else if(event.target.lastChild.textContent !== '+') {
                document.querySelectorAll('.active-card').forEach((el) => el.classList.remove('active-card'));
                document.querySelectorAll('.card-desc').forEach((el) => el.style.display = 'none');
                document.querySelectorAll('.skill-card-button').forEach((el) => el.textContent = '+');
            }
        }
    }
}
</script>

<style scoped>
    .skill-card {
        border: solid 1px #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
        cursor: auto;
        animation: card .6s forwards;
    }
    .card-desc {
        display: none /*block*/;
        transition: .9s ease-in-out;
        padding: 0 25px 0 25px;
        cursor: auto;
        animation: card-desc .6s forwards;
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
        cursor: pointer;
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
    @keyframes card-desc {
        0% {
            transform: translateY(-5px);
            opacity: .9;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>