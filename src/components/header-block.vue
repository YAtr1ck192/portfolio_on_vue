<template>
    <header>
        <div class="container">
            <img class="header-logo" src="/images/header-logo.png"/>

            <div class="burger-menu" :class="{'opened': menuIsShow}" @click="toggleMenu">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>

            <nav :class="{'active': menuIsShow}">
                <a
                    v-for="(item, index) in items"
                    :key="index"
                    :href="item.navLink"
                    @click.prevent.stop="Scroll(item.navLink)"
                    class="default-purple-a nav-item"
                    :class="{'disabled': item.disabled}"
                >
                    {{ item.navItem }}
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
import {ScrollToElem} from '@/utils/helpers'

export default {
    name: "header-block",
    data() {
        return {
            items: [
                {navItem: 'ABOUT', navLink: '#about'},
                {navItem: 'SKILLS', navLink: '#skills'},
                {navItem: 'SOCIAL', navLink: '#social'},
                {navItem: 'CONTACTS US', navLink: '#contact-us'},
                {navItem: 'BLOG', navLink: '#blog',}
            ],
            menuIsShow: false,
            disabled: true
        }
    },
    methods: {
        toggleMenu() {
            this.menuIsShow = !this.menuIsShow
            let body = document.querySelector('body');
            this.menuIsShow !== false ? body.style.overflow = 'hidden' : body.style.overflow = '';
        },
        Scroll(navLink) {
            this.menuIsShow = false;
            let body = document.querySelector('body');
            body.style.overflow = '';
            ScrollToElem(navLink)
        },
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
.burger-menu {
    display: none;
}

@media screen and (max-width: 980px) {
    .burger-menu {
        height: 12px;
        width: 16px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 22px;
    }
    .active {
        width: 100%;
    }
    .burger-menu .line {
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: #5C33B9;
    }
    .burger-menu .line1 {
        transform-origin: 0 0;
        transition: transform 0.4s ease-in-out;
    }
    .burger-menu .line2 {
        transition: transform 0.2s ease-in-out;
    }
    .burger-menu .line3 {
        transform-origin: 0 100%;
        transition: transform 0.4s ease-in-out;
    }
    .burger-menu.opened .line1 {
        transform: rotate(45deg);
        margin-top: -0.52px;
    }
    .burger-menu.opened .line2 {
        transform: scaleY(0);
    }
    .burger-menu.opened .line3 {
        transform: rotate(-45deg);
    }
    header {
        background: #ffffff;
        position: sticky;
        top: 0;
        z-index: 100;
    }
    nav {
        display: none;
    }
    nav.active {
        display: flex;
        flex-direction: column;
        position: fixed;
        background: #ffffff;
        top: 76px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        padding: 15px;
        align-items: center;
        justify-content: flex-start;
        height: 89.9vh;
    }
    a {
        margin-bottom: 20px;
    }
}
</style>