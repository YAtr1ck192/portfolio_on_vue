<template>
    <header>
        <div class="container">
            <div class="container">
                <a href="#"><img class="header-logo" src="/images/header-logo.png" alt="header-logo"></a>
                <nav>
                    <a class="nav-item" v-for="item in items" :key="item.navItem" :href="'#' + item.navItem">{{ item.navItem }}</a>
                    <img @click="openBurgerMenu" src="/images/menu-burger.png" alt="menu-burger" class="menu-burger">
                </nav>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "header-block",
    el: '#nav',
    data() {
        return {
            items:[
                { navItem: 'ABOUT' },
                { navItem: 'SKILLS' },
                { navItem: 'SOCIAL' },
                { navItem: 'CONTACT US' },
                { navItem: 'BLOG' }
            ]
        }
    },
    methods: {
        openBurgerMenu() {
            const MENU_BURGER = document.querySelector('.menu-burger');
            let menuBurgerContent = document.querySelector('.menu-burger-content');
            if (menuBurgerContent.style.display !== 'flex' && MENU_BURGER.src !== `../assets/images/x-menu-burger.png`){
                MENU_BURGER.src = '../assets/images/x-menu-burger.png';
                menuBurgerContent.style.display = 'flex';
                document.querySelector("body").style.overflow = 'hidden';

                document.querySelectorAll('.menu-burger-content > a').forEach((el) => {
                    el.addEventListener('click', () => {
                        MENU_BURGER.src = `../assets/images/menu-burger.png`;
                        menuBurgerContent.style.display = 'none';
                        document.querySelector("body").style.overflow = 'visible';
                    })
                })
            } else {
                MENU_BURGER.src = `../assets/images/menu-burger.png`;
                menuBurgerContent.style.display = 'none';
                document.querySelector("body").style.overflow = 'visible';
            }
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        background: #fff;
    }
    header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
    }
    .header-logo {
        padding: 20px 0;
        align-items: center;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 370px;
    }
    .nav-item {
        text-decoration: none;
        border-bottom: solid 1px transparent;
        color: #6E38F7;
        font-size: 12px;
        font-family: "rm";
        cursor: pointer;
    }
    nav .nav-item:hover {
        border-bottom: solid 1px #6E38F7;
    }
    .menu-burger{
        display: none;
        position: relative;
    }
    @media screen and (min-width: 820px) and (max-width: 940px) {
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        nav a {
            display: none;
        }
        nav {
            width: 20px;
            height: 17px;
        }
        nav .menu-burger{
            display: block;
            width: 24px;
            height: 17px;
        }
    }
    .slide img {
        max-width: 120px;
        max-height: 70px;
        padding-top: 3px;
    }
    @media screen and (min-width: 620px) and (max-width: 819px) {
        nav a {
            display: none;
        }
        nav {
            width: 20px;
            height: 17px;
        }
        nav .menu-burger{
            display: block;
            width: 24px;
            height: 17px;
        }
        header {
            position: sticky;
            top: 0;
            z-index: 100;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 619px){
        .container {
            width: 100%;
            padding: 0 16px 0 16px;
        }
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        nav a {
            display: none;
        }
        nav {
            width: 20px;
            height: 17px;
        }
        nav .menu-burger{
            display: block;
            width: 24px;
            height: 17px;
        }
    }

</style>