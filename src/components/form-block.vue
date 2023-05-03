<template>
    <div id="contact-us" class="default-block form-block container">
        <h2 class="block-title">{{ blockInfo.blockTitle }}</h2>
        <div class="contact-us-desc small-p">
            {{ blockInfo.descContent }}
        </div>
        <div class="form-group">
            <input
              :class="[ {'error-form' : nameForm.errorName}, 'form' ]"
              v-model.lazy="nameForm.formNameContent"
              type="text"
              name="name"
              placeholder="Your name"
            >
            <input
              :class="[ {'error-form' : emailForm.errorEmail, 'form' : emailForm.emailDefaultForm}]"
              type="text"
              name="email"
              placeholder="Email"
              v-model="emailForm.formEmailContent"
              @change="ValidationFunc"
              @input="defaultForm"
            >
            <textarea
              name="desc"
              id="" cols="30"
              rows="10"
              placeholder="Description (optional)"
              v-model="descForm.descContent"
              @change="textAreaValidationFunc"
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
                errorName: false,
            },
            emailForm: {
                formEmailContent: '',
                emailDefaultForm: true,
                emailValidation: new RegExp("^((([0-9A-Za-z]{1}[-0-9A-z\\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\\.){1,}[-A-Za-z]{2,})$"),
                errorEmail: false,
            },
            descForm: {
                formMessage: '',
                descContent: ''
            },
            mes:''
        }
    },
    methods: {
        textAreaValidationFunc () {
            const val = ['1', '2']
            for (let i = 0; i < val.length; i++){
                this.descForm.descContent = this.descForm.descContent.split(val[i]).join('*')
            }
        },
        ValidationFunc () {
            this.emailForm.errorEmail = !this.emailForm.emailValidation.test(this.emailForm.formEmailContent);
            this.emailDefaultForm = this.emailForm.emailValidation.test(this.emailForm.formEmailContent);
        },
        defaultForm () {
            this.emailForm.errorEmail = this.emailForm.emailValidation.test(this.emailForm.formEmailContent);
        },
        postData () {
            if (!this.nameForm.errorName && !this.emailForm.errorEmail){
                axios.post('https://jsonplaceholder.typicode.com/users', {
                    postName: this.nameForm.formNameContent,
                    postEmail: this.emailForm.formEmailContent,
                    postDesc: this.descForm.descContent
                })
                  .then(response => {
                      this.mes = response.status
                      this.nameForm.formNameContent = response.data.postName
                      this.emailForm.formEmailContent = response.data.postEmail
                      this.descForm.descContent = response.data.postDesc
                      console.log(this.mes)
                      console.log(this.nameForm.formNameContent)
                      console.log(this.emailForm.formEmailContent)
                      console.log(this.descForm.descContent)
                  })
            }
        }
    },
    watch: {
        'nameForm.formName' : function (value) {
            const nameValidation =/[^a-zA-Zа-яА-Я ]/ui
            this.nameForm.errorName = nameValidation.test(value);
        }
    }
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
.default-purple-button {
    color: white;
    background: #6E38F7;
    border: solid 1px transparent;
    border-radius: 4px;
    font-size: 12px;
    font-family: "rm";
    cursor: pointer;
}
.default-purple-button:hover {
    border: solid 1px #6E38F7;
    color: #6E38F7;
    background: white;
}
.error-form {
    border: solid 1px #DF1F1F;
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