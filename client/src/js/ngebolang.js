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
            <input v-on:change="onChangeImage()" type="file" name="image_url" id="image_url" />
            </div>
          </div>
  
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default" @click.prevent="uploadImage()">Upload</button>
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
        title: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    uploadImage() {
      let dataImage = this
      let data = new FormData()
      // data.append('wisata.image_url', dataImage.wisata.image_url)
      // var formData = new FormData();
      var imagefile = document.querySelector('#image_url');
      var category = document.querySelector('#category').value;
      var description = document.querySelector('#description').value;
      var title = document.querySelector('#title').value;
      data.append("image_url", imagefile.files[0]);
      data.append("title", title);
      data.append("description", description);
      data.append("category", category);
      console.log(data, 'tuturu')
      console.log('====================================');
      console.log(this.wisata);
      console.log('====================================');
      axios.post('http://localhost:3000/api/wisatas', data)
        .then((dataWisata) => {
          alert("Data successfully inserted!")
          location.reload()
        })
        .catch((reason) => {
          console.log(reason)
        })
    },
    onChangeImage() {
      var file = event.target.files[0]
      this.image = file
      this.wisata.image_url = document.getElementById('image_url').value
      console.log('====================================');
      console.log(this.wisata.image_url);
      console.log('====================================');
    }
  }
})


Vue.component('article-detail', {
  template: `
  <div class="card">
    <h3 class="card-header">{{ article.title }}</h3>
    <div class="column">
      <img :src="article.image_url" style="height: 200px;" alt="Card image">
    </div>
    <div class="card-body">
      <p class="card-text">Category : {{ article.category }}</p>
      <p class="card-text">Description : {{ article.description }}</p>
      <div class="fb-share-button" :data-href="article.image_url" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe8%2F4f%2F8c%2Fe84f8c0c8b2f1a6303dd4c4a9cc91b9e--crater-lake-bandung.jpg&amp;src=sdkpreparse">Share</a></div>
      <a :href="article.image_url" :download="article.title" class="btn btn-info" role="button">Download</a>
      <a class="btn btn-info" role="button" @click="loveImage"><i class="fa fa-heart" aria-hidden="true"> {{love}}</i></a>
    </div>
    <div class="card-footer text-muted">
    </div>
  </div>
  `,
  props: ['article'],
  data: function () {
    return {
      email: '',
      love: 0
    }
  },
  methods: {
    loveImage() {
      this.love += 1
    },
  }
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
              <input type="text" class="form-control" id="username" placeholder="Enter Username" v-model="login.username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="login.password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default" @click="signin(login)">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`,
  data: function () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin(login) {
      axios.post('http://localhost:3000/users/signin', login)
        .then(({ data }) => {
          alert("Enjoy!")
          location.reload()
        })
        .catch(err => console.error(data))
    }
  }
})

// Vue.component('logut')

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
              <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="signup.name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="username">Username:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="username" placeholder="Enter Username" v-model="signup.username">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="signup.password">
            </div>
          </div>

          <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Email:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="email" placeholder="Enter Email" v-model="signup.email">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button type="submit" class="btn btn-default" v-on:click="register(signup)">Register</button>

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
        password: '',
        email: ''
      }
    }
  },
  methods: {
    register(signup) {
      axios.post('http://localhost:3000/users/signup', signup)
        .then(({ data }) => {
          alert("Please login first")
          location.reload()
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
new Vue({
  el: '#app'
})
