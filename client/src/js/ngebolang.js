Vue.component('article-summary', {
  template: `
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
      <h4 class="list-group-item-heading">Articles Summary</h4>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <h4 class="list-group-item-heading">List group item heading</h4>
      <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    </a>
  </div>
  `
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
        <form class="form-horizontal">

          <div class="form-group">
            <label class="control-label col-sm-2" for="title">Title:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="title" placeholder="Enter Title">
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="description">Description:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="description" placeholder="Enter Description">
            </div>
          </div>

          <div class="form-group">
          <label class="control-label col-sm-2" for="category">Category:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="category" placeholder="Enter Category">
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
      imageUrl: '',
      resultUpload: null,
      closeModal: null,
      title: '',
      description: '',
      category: ''
    }
  }
})


Vue.component('article-detail', {
  template: `
  <div class="card">
    <h3 class="card-header">Card header</h3>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <h6 class="card-subtitle text-muted">Support card subtitle</h6>
    </div>
    <div class="column">
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
      <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
    </div>
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="card-footer text-muted">
    </div>
  </div>
  `
})

Vue.component('homepage', {
  template: `
  <div class="hello">
    <h1 class="text-center">{{ msg }}</h1>
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
  `,
  data: function () {
    return {
      msg: 'Ngebolang Yuks!'
    }
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
              <button type="submit" class="btn btn-default" v-on:click="register()">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`
})
new Vue({
  el: '#app'
})