<template>
  <div class="home">
    <v-btn @click="addItem">Increment</v-btn>
    <div v-for="(item, ix) in items" :key="item.id">
      {{ item.id }} - {{ ix }} - <editable-text-field class="edit" @input="saveItem(item)" v-model="item.email"></editable-text-field><v-icon @click="removeItem(item.id)" small right>fas fa-times-circle</v-icon></div>
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

import Item from '../models/Item'
import EditableTextField from '@/components/EditableTextField'
import config from '../../config'

export default {
  name: 'home',
  mounted: function(){
    this.$store.dispatch('gitstore/setUser', {
        username : 'keith',
        email : 'keith@mudstuffing.com',
        password: 'test123'
      })
  },
  computed: {
    items(){
      return Item.all();
    },

  },
  methods : {

    addItem : function(){
      const item = [
        {
          first_name : 'Keith',
          last_name : 'Phillips',
          email : 'keith@paleosun.com'
        }
      ]
      Item.insert({ data: item })
    },
    removeItem : function(id){
      Item.delete(id)
      this.items
    },
    saveItem : function(item){
      Item.update({where : item.id, data : item})
    }
  },
  components : {
    EditableTextField
  }
}
</script>
