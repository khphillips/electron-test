<template>
  <div class="home">
    <h1>Hello World</h1>
    <p>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</p>
    
    <h2>Hello World</h2>
    <code>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</code>
    
    <h3>Hello World</h3>
    <p>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</p>
    
    <h4>Hello World</h4>
    <p>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</p>
    
    <h5>Hello World</h5>
    <p>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</p>
    
    <h6>Hello World</h6>
    <p>name (the same one you use in the package.json) in this field and the filename will be relative to the directory Node Webkit uses to store the rest of the application's data (local storage etc.). It works on Linux, OS X and Windows. Now that you can use require('nw.gui').App.dataPath in Node Webkit to get the path to the data directory for your application, you should not use this option anymore and it will be removed.</p>
    
    <v-text-field label="test" outline></v-text-field>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
