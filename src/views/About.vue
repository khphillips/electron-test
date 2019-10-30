<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ items }}
  </div>
</template>

<script>

import Item from '../models/Item'

export default{
	props:[],
	data: function(){
		return {

		}
	},
	computed : {
		items(){
			return Item.all();
		}
	},
	mounted : function(){
		// Assuming this data structure is the response from the API backend.
      const item = [
        {
          first_name : 'Keith',
          last_name : 'Phillips',
          email : 'keith@paleosun.com'
        }
      ]
      Item.insert({ data: item })
	},
}

</script>
