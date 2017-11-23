<template>
  <div class="hello">
    <navbar/>
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <article-summary/>
        </div>
        <div class="col-md-9">
          <article-detail/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
import ArticleDetail from '@/components/ArticleDetail'
export default {
  components: {
    ArticleSummary,
    ArticleDetail
  },
  name: 'Home',
  data () {
    return {
      msg: 'Ngebolang Yuks!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  margin-top: 20px
}
</style>
