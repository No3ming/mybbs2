<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
           class="demo-ruleForm card-box loginform">
    <h3 class="title">系统注册</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="账号:6-20位，以字母开头"></el-input>
    </el-form-item>
    <el-form-item  prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码：6-20位，字母开头"></el-input>
    </el-form-item>
    <el-form-item  prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码：6-20位，字母开头"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary"  @click.native.prevent="handleSubmit2">注册</el-button>
      <el-button  @click.native.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      const validateName =(rule, value, callback) => {
        let nameRxg = new RegExp('^[a-zA-Z][a-zA-Z0-9]{5,19}$')
        if (!value) {
          callback(new Error('请输入账号'));
        } else if (!nameRxg.test(value)) {
          callback(new Error('账号格式不正确'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      }
      const validatePass = (rule, value, callback) => {
        let passRxg = new RegExp('^[a-zA-Z][a-zA-Z0-9]{5,19}$')
        if (!value) {
          callback(new Error('请输入密码'));
        }else if (!passRxg.test(value)) {
          callback(new Error('密码格式不正确'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      }
      const validatePass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        ruleForm2: {
          username: '',
          checkPass: ''
        },
        rules2: {
          username: [
            {validator: validateName, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        checked: true
      }
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        let self = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            self.axios.post('/api/user-register', {
              username: self.ruleForm2.username,
              password: self.ruleForm2.checkPass
            })
              .then((response) => {
                if (response.data.code == 0) {
                  self.$router.push('/login')
                } else {
                  console.log(response)
                  self.$message.error(response.data.data.msg);
                }
              })
              .catch((error) => {
                self.$message.error(error);
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .card-box {
    padding: 20px;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 120px auto;
    width: 400px;
    border: 2px solid #8492A6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .loginform {
    width: 350px;
    padding: 35px 35px 15px 35px;
  }
</style>