<template>
  <div class="jumbotron custom-bg-dark">
    <h1 class="display-4">MEVN stack Task Manager</h1>
    <p class="lead">This is a Project built with MEVN.</p>
    <hr class="my-4">
    <p>Click below to begin managing tasks</p>
    <router-link class="btn btn-success  btn-lg" to="/tasks">
      View Tasks
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>