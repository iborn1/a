<!--登陆组件-->
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
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
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
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '错误的用户名'
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
      }
    },
    methods: {
      onLogin() {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '信息验证未通过'
        }
        else {
          this.errorText = ''
          this.$ajax({
            method: "get",
            url: "api/login",
          }).then((res) => {
//            请求成功触发has-log事件，layout组件监听该事件
            this.$emit('has-log', res.data)
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
