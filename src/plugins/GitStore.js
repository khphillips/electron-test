const jetpack = require('fs-jetpack');
import merge from 'deepmerge';

export default {
	options : {},
	key : 'entities',
	repo : null,

	install(options, key, repo){
		this.options = this.options || {};
		//storage = options.storage || (window && window.localStorage);
		this.key = options.key || 'entities';
		this.repo = options.repo || null;
		//gets called from vuex when plugin installed.
		var g = this;
	    return function(store) {
	    	var savedState = {entities : {}};
	    	//only update the state for items we have files for. 
	    	for (var k in store.state[g.key]){
	    		if (k.indexOf('$') == -1){
	    			var obj = g.getObject(k, store.state[g.key][k].repo != null ? store.state[g.key][k].repo : g.repo);
	    			if (obj != null){
	    				savedState.entities[k] = obj;
	    			}
	    		}
	    	}
		    if (typeof savedState === 'object' && savedState !== null) {
		      store.replaceState(merge(store.state, savedState, {
		        //arrayMerge: options.arrayMerger || function (store, saved) { return saved },
		        clone: false,
		      }));
		    }
		    store.subscribe(function(mutation, state) {
		    	var key_state = state[g.key][mutation.payload.entity];
		    	if (key_state.persist){
		    		g.setObject(mutation.payload.entity, key_state, key_state.repo ? key_state.repo : g.repo);
		    	}
		  	})
	    }
	},

	getObject(key, repo){
		if (repo){
			var str = jetpack.read('gitData/' + repo + '/' + key + '.json');
		}else{
			var str = jetpack.read('gitData/' + key + '.json');
		}
		if (typeof str == 'undefined'){
			return null
		}
        return JSON.parse(str);
	},

    setObject(key, value, repo) {
        value = JSON.stringify(value);
        if (repo){
        	jetpack.writeAsync('gitData/' + repo + "/" + key + '.json', value)
        }else{
        	jetpack.writeAsync('gitData/' + key + '.json', value)
        }
        
    },
    
}