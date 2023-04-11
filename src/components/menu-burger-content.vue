<template>
    <div class="menu-burger-content">
        <a class="nav-item" href="#about">ABOUT</a>
        <a class="nav-item" href="#skills">SKILLS</a>
        <a class="nav-item" href="#social">SOCIAL</a>
        <a class="nav-item" href="#contact">CONTACT US</a>
        <a class="nav-item" href="#">BLOG</a>
    </div>
</template>

<script>
export default {
    name: "menu-burger-content"
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
</style>