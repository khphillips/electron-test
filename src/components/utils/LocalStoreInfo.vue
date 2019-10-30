<template>
	<v-menu v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
	    <template v-slot:activator="{ on }">
			<v-badge>
		      <template v-slot:badge>
		      	<span v-if="localStoreSize > 9000"></span>
		      </template>
		      <v-icon class="text3--text" v-on="on">fas fa-archive</v-icon>
		    </v-badge>
		</template>
		<v-card>
	        <v-list dense>
	          <v-list-item>
	          	<v-list-item-avatar>
		          <v-icon class="text3--text">fas fa-expand</v-icon>
		        </v-list-item-avatar>
		        <v-list-item-content>
		          <v-list-item-title class="text3--text">LocalStorage Total Size</v-list-item-title>
		          <v-list-item-subtitle class="text1--text">{{ localStoreSize }} kb</v-list-item-subtitle>
		        </v-list-item-content>
	          </v-list-item>
	      </v-list>
	  	</v-card>
	</v-menu>
</template>

<script>

import {Query} from '@vuex-orm/core'

export default{
	props : [],
	data : function(){
		return {
			menu : false,
			storeSize : 0,
		}
	},
	created : function(){
		const hookId = Query.on('afterCreate', this.setStoreSize)
		//Query.off(hookId)
	},
	computed : {
		localStoreSize : function(){
			return (this.storeSize / 1024).toFixed(2) + " KB";
		}
	},
	methods: {
		//move this to the persistence area and stoe within vuex. 
		setStoreSize : function(){
			console.log('setting')
			var _lsTotal=0,_xLen,_x;
			for(_x in localStorage){ 
				if(!localStorage.hasOwnProperty(_x)){
					continue;
				}
				_xLen= ((localStorage[_x].length + _x.length)* 2);
				_lsTotal+=_xLen;
			}
			this.storeSize =  _lsTotal; ;
		}
	}
}
</script>