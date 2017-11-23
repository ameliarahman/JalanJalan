<template>
  <form>
  <fieldset>
    <legend>Write An Article</legend>
    <div class="form-group has-success">
      <h5>Title</h5>
      <input type="text" class="form" id="inputValid" placeholder="Enter title of Article">
    </div>
    <div class="form-group has-success">
      <h5 for="exampleTextarea">Description</h5>
      <textarea class="form" id="inputValid" rows="6" cols="60"></textarea>
    </div>
    <div class="form-group">
      <h5 for="exampleInputFile">Input Picture</h5>
      <input type="file" class="form-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <div class="form-group has-success">
      <h5>Category</h5>
      <input type="text" class="form" id="inputValid" placeholder="Category">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>
