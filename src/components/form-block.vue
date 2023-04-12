<template>
    <div id="CONTACT US" class="default-block form-block container">
        <h2 class="block-title">Contact us</h2>
        <div class="contact-us-desc small-p">
            Life is 10% what happens to you and 90% how you react to it. It does not matter how slowly you go as long as you do not stop. Confucius.
        </div>
        <div class="form-group">
            <input class="form-name" aria-label="name" type="text" name="name" placeholder="Your name">
            <input class="form-email" aria-label="email" type="text" name="email" placeholder="Email">
            <textarea name="desc" id="" cols="30" rows="10" placeholder="Description (optional)"></textarea>
        </div>
        <button class="form-button default-purple-button">SEND</button>
    </div>
</template>

<script>
export default {
    name: "form-block"
}
</script>

<style scoped>
  .form-block {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
  }
  .form-block .block-title {
      margin-bottom: 20px;
  }
  .contact-us-desc {
      max-width: 620px;
      text-align: center;
      margin-bottom: 40px;
  }
  .form-group input {
      padding: 12px 0 12px 15px;
      font-family: "rr";
      font-size: 16px;
      outline: none;
      border: solid 1px #CAD1E1;
      border-radius: 4px;
      margin-bottom: 20px;
  }
  .form-group input:first-child {
      margin-right: 20px;
  }
  .form-group {
      width: 440px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      flex-direction: row;
      flex-wrap: wrap;
  }
  .form-group textarea {
      width: 440px;
      height: 120px;
      border: solid 1px #CAD1E1;
      border-radius: 4px;
      padding: 12px 0 0 15px;
      font-family: "rr";
      font-size: 16px;
      outline: none;
      resize:none;
  }
  .form-group input:invalid, .form-group textarea:invalid {
      border: solid 1px #DF1F1F;
  }
  .form-button {
      padding: 13px 60px;
  }
  .default-purple-button {
      color: white;
      background: #6E38F7;
      border: solid 1px transparent;
      border-radius: 4px;
      font-size: 12px;
      font-family: "rm";
  }
  .default-purple-button:hover {
      border: solid 1px #6E38F7;
      color: #6E38F7;
      background: white;
  }
  @media screen and (min-width: 320px) and (max-width: 619px){
      .form-group {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          width: 288px;
      }
      .form-group textarea {
          width: 288px;
          height: 120px;
      }
      .form-group input {
          width: 100%;
      }
      .form-group input:first-child {
          margin-right: 0;
      }
      .form-button {
          width: 288px;
          height: 46px;
          margin-bottom: 84px;
      }
  }

</style>