<template>
    <div id="contact-us" class="default-block form-block container">
        <h2 class="block-title">{{ blockInfo.blockTitle }}</h2>
        <div class="contact-us-desc small-p">
            {{ blockInfo.descContent }}
        </div>
        <div class="form-group">
            <input
              :class="[ {'error-form' : nameForm.errorName}, 'form' ]"
              v-model="nameForm.formNameContent"
              type="text"
              name="name"
              placeholder="Your name"
            >
            <input
              :class="[ {'error-form' : emailForm.errorEmail}, 'form' ]"
              v-model="emailForm.formEmailContent"
              type="text"
              name="email"
              placeholder="Email"

            >
            <textarea
              v-model="descForm.descContent"
              name="desc"
              id="textArea"
              cols="30"
              rows="10"
              placeholder="Description (optional)"
            ></textarea>
        </div>
        <button
          class="form-button default-purple-button"
          @click.prevent="postData"
        >
            {{ blockInfo.buttonContent }}
        </button>
    </div>

</template>

<script>
import axios from "axios";
export default {
    name: "form-block",
    data () {
        return {
            blockInfo: {
                blockTitle:'Contact us',
                descContent: 'Life is 10% what happens to you and 90% how you react to it. It does not matter how slowly you go as long as you do not stop. Confucius.',
                buttonContent:'SEND',
            },
            nameForm: {
                formNameContent: '',
                errorName: '',
            },
            emailForm: {
                formEmailContent: '',
                errorEmail: false,
            },
            descForm: {
                formMessage: '',
                descContent: ''
            },
            mes:'',
            urlApi: 'https://api.telegram.org/bot' + this.token +'/sendMessage?chat_id='+ this.chatId + '&parse_mode=html&text=' + this.order + ',r'
        }
    },
    methods: {
        postData () {
            let token = '6083356212:AAESlJYoQDlXJvRW2JOfrbPOVYhapwzud1Y'
            let chatId = '-995590795'
            let order = 'Заказ: \n'
            let urlTest = 'https://api.telegram.org/bot' + token + '/sendMessage'

            order += 'name: ' + this.nameForm.formNameContent + '\n'
            order += 'email: ' + this.emailForm.formEmailContent + '\n'
            order += 'mes: ' + this.descForm.descContent + '\n'
            console.log(order)

            axios.post(urlTest, {
                chat_id: chatId,
                parse_mode: 'html',
                text: order
            })
        }
    },
}
</script>

<style scoped>
.form-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.form-block .block-title {
    margin-bottom: 20px;
}
.contact-us-desc {
    max-width: 620px;
    text-align: center;
    margin-bottom: 40px;
}
.form {
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
.form-button {
    padding: 13px 60px;
}


.error-form {
    border: solid 1px #DF1F1F;
    padding: 12px 0 12px 15px;
    font-family: "rr";
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    margin-bottom: 20px;
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