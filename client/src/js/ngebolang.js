Vue.component('article-summary', {
  template: `
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      <h4 class="list-group-item-heading">Articles Summary</h4>
    </a>
    <a href="#" class="list-group-item list-group-item-action" v-for="article in articles" :key="article._id">
      <h4 class="list-group-item-heading">{{ article.title}}</h4>
      <img :src="article.image_url" style="height: 50px;" alt="article.title">
      <p class="list-group-item-text">{{ article.description.substring(0, 50) }}</p>
    </a>
  </div>
  `,
  props: ['articles']
})

Vue.component('create-article', {
  template:`
  <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <legend>
              Upload File
            </legend>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <fieldset>
                <div class="form-group">
                  <label for="input-image" class="col-lg-2 control-label">Picture</label>
                  <div class="col-md-8">
                    <input name="input-image" type="file" class="form-control" id="upload" placeholder="File Picture" v-model="imageName" required>
                  </div>
                </div>
                <div class="form-group">
                  <h5 for="title">Title</h5>
                  <div class="col-md-8">
                    <input name="title" type="text" class="form-control" placeholder="Insert your title" v-model="title" required>
                  </div>
                </div>
                <div class="form-group has-success">
                  <h5 for="exampleTextarea">Description</h5>
                  <div class="col-md-8">
                    <textarea class="form-control" id="inputValid" rows="6" cols="60" v-model="description"></textarea>
                  </div>
                </div>
                <div class="form-group has-success">
                  <h5 for="category">Category</h5>
                  <div class="col-md-8">
                    <input name="category" type="text" class="form-control" id="inputValid" placeholder="input your category" v-model="category"></input>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function () {
    return {
      imageUrl: '',
      resultUpload: null,
      closeModal: null,
      title: '',
      imageName: '',
      description: '',
      category: ''
    }
  }
})

Vue.component('upload-button', {
  template: `
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"><span class="fa fa-plus"></span> Upload</button>
    `
})

Vue.component('article-detail', {
  template: `
  <div class="card">
    <h3 class="card-header">{{ article.title }}</h3>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <h6 class="card-subtitle text-muted">Support card subtitle</h6>
    </div>
    <div class="column">
      <img :src="article.image_url" style="height: 200px;" alt="Card image">
    </div>
    <div class="card-body">
      <p class="card-text">{{ article.description }}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="card-footer text-muted">
      {{ article.category }}
    </div>
  </div>
  `,
  props: ['article']
})

Vue.component('homepage', {
  template: `
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <article-summary :articles="articles"></article-summary>
        </div>
        <div class="col-md-9">
          <article-detail v-for="article in articles" :key="article._id" :article="article"></article-detail>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      msg: 'Ngebolang Yuks!',
      articles : []
    }
  },
  methods: {
    getAllArticle() {
      axios.get('http://localhost:3000/api/wisatas')
        .then(({ data }) => {
          this.articles = data
          console.log(data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  created() {
    this.getAllArticle()
  }
})

new Vue({
  el: '#app'
})