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
  template: `
  <div class="modal fade" id="create-article" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Create Article</h4>
      </div>

      <div class="modal-body">
        <form class="form-horizontal" enctype="multipart/form-data">

          <div class="form-group">
            <label class="control-label col-sm-2" for="title">Title:</label>
            <div class="col-sm-8">
              <input v-model="wisata.title" type="text" class="form-control" name="title" id="title" placeholder="Enter Title">
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="description">Description:</label>
            <div class="col-sm-8">
              <input v-model="wisata.description" type="text" class="form-control" name="description" id="description" placeholder="Enter Description">
            </div>
          </div>

          <div class="form-group">
          <label class="control-label col-sm-2" for="category">Category:</label>
          <div class="col-sm-8">
            <input v-model="wisata.category" type="text" class="form-control" name="category" id="category" placeholder="Enter Category">
          </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="file">Select your image:</label>
            <div class="col-sm-8">
            <input v-model="wisata.image_url" type="file" name="image_url" id="image_url" />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default">Upload</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  </div>
</div>`,
  data: function () {
    return {
      wisata: {
        image_url: '',
        resultUpload: null,
        closeModal: null,
        title: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    uploadImage() {
      axios.post('http://localhost:3000/api/wisatas',
        {
          title: this.wisata.title,
          description: this.wisata.description,
          category: this.wisata.category,
          image_url: this.wisata.image_url
        })
        .then((dataWisata) => {
          console.log(dataWisata)
        })
        .catch((reason) => {
          console.log(reason)
        })
    }
  }
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
    <h1 class="text-center">{{ msg }}</h1>
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
      articles: []
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


Vue.component('login-modal', {
  template: `
  <div class="modal fade" id="signin" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Login</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="username">Username:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="username" placeholder="Enter Username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="pwd" placeholder="Enter password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`
})

Vue.component('signup-modal', {
  template: ` <div class="modal fade" id="register" role="dialog">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Register</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="name">Name:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="username">Username:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="username" placeholder="Enter Username" v-model="username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default" v-on:click="register">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`,
  data: function () {
    return {
      signup: {
        name: '',
        username: '',
        password: ''
      }
    }
  }
})
new Vue({
  el: '#app'
})