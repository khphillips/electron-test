<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ users }}
  </div>
</template>

<script>

import User from '../models/User'

export default{
	props:[],
	data: function(){
		return {

		}
	},
	computed : {
		users(){
			return User.all();
		}
	},
	mounted : function(){
		// Assuming this data structure is the response from the API backend.
      const posts = [
        {
          id: 1,
          name : 'Keith',
          email : 'keith@paleosun.com'
        }
      ]

      User.insert({ data: posts })
	},
}

</script>
