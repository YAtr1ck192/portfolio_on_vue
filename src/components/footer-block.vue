<template>
    <footer class="small-p footer-txt">
        Copyright © {{ year }}. All rights reserved.
    </footer>
</template>

<script>
export default {
    name: "footer-block",
    data () {
        return {
            year: new Date().getFullYear(),
        }
    },
}
</script>

<style scoped>
  footer {
      padding: 21px 0 21px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .footer-txt {
      font-size: 14px;
  }
</style>