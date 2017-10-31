<!--注册组件-->
<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
                 v-model="usernameModel" placeholder="email">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="passwordModel" placeholder="password">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">确认密码：</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="passwordModel2" placeholder="password">
        </div>
        <span class="g-form-error">{{ passwordErrors2.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegister">注册</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        passwordModel2: '',
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '格式错误'
        }
        else {
          status = true
          errorText = ''
        }
//        第一次进来不显示错误信息
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors() {
        let errorText, status
        if (!/^\w{6,12}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码只能为6-12位'
        }
        else {
          status = true
          errorText = ''
        }
//        第一次进来不显示错误信息
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors2() {
        let errorText, status
        if (this.passwordModel2 !== '' && this.passwordModel2 !== this.passwordModel) {
          status = false
          errorText = '两次输入密码不一致'
        }
        else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onRegister() {
        if (!this.userErrors.status || !this.passwordErrors.status || !this.passwordErrors2.status) {
          this.errorText = '信息验证未通过'
        }
        else {
          this.errorText = ''
          this.$ajax({
            method: "get",
            url: "api/register",
          }).then((res) => {
//            请求成功触发has-reg事件，layout组件监听该事件
            this.$emit('has-reg', res.data)
          }).catch((err) => {
            console.log(error)
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
