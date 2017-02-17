<template>
  <section>
    {{article}}
  </section>
</template>

<script>
  export default {
    data () {
      return {
        article: '<p>加载中</p>'
      }
    },
    created () {
      let self =this
      this.axios.get('/api/article/123465132')
        .then((response) => {
          if (response.data.code === 0) {
            self.article = response.data.data.article
          } else {
            this.$notify.error({
              title: '错误',
              message: response.data.msg
            });
          }
        })
        .catch((error) => {
          this.$notify.error({
            title: '错误',
            message: error
          });
        })
    }
  }
</script>
