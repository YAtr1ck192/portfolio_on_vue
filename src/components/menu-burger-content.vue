<template>
    <div class="menu-burger-content">
        <a class="nav-item" v-for="item in items" :key="item.navItem" :href=" '#' + item.navItem">{{ item.navItem }}</a>
    </div>
</template>

<script>
export default {
    name: "menu-burger-content",
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

    }

}
</script>

<style scoped>
  nav img {
      cursor: pointer;
      width: 20px;
  }
  .menu-burger-content{
      display: /*flex*/ none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 10px;
      background: white;
      width: 100%;
      height: 89.9vh;
      position: fixed;
      top: 80px;
      z-index: 3;
  }
  .menu-burger-content a {
      font-size: 30px;
      margin: 20px 0;
      cursor: pointer;
      transition: 12s ease-in 12s;
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
  @media screen and (min-width: 820px) and (max-width: 940px) {
      .menu-burger-content a {
          font-size: 26px;
          margin: 15px 0;
      }
  }
  @media screen and (min-width: 620px) and (max-width: 819px) {
      .menu-burger-content a {
          font-size: 26px;
          margin: 15px 0;
      }
  }
  @media screen and (min-width: 320px) and (max-width: 619px){
      .menu-burger-content a {
          font-size: 24px;
          margin: 13px 0;
      }
  }
</style>