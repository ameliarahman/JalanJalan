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
  `,
  data: function () {
    return {
      msg: 'Ngebolang Yuks!'
    }
  }
})

new Vue({
  el: '#app'
})