const jetpack = require('fs-jetpack');
const gitP = require('simple-git/promise');
const _git = require('simple-git')
import merge from 'deepmerge';

export default {
	options : {},
	key : 'entities',
	repo : null,
	root_path : 'gitData/',
	update_keys : {},
	commitJob : null,

	install(options, key, repo){
		this.options = this.options || {};
		//storage = options.storage || (window && window.localStorage);
		this.key = options.key || 'entities';
		this.repo = options.repo || null;

		if (repo){
			if(!jetpack.exists(this.root_path + this.repo)){
				this.initRepo();
			}
			this.setCommitJob()
		}
		
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
		    		g.setObject(mutation.payload.entity, key_state);
		    	}
		  	})
	    }
	},

	setCommitJob(){
		if(this.commitJob == null){
			this.commitJob = setInterval(this.commitObjects, 5000)
		}
	},

	initRepo(){
		jetpack.dir(this.root_path + this.repo);
		_git(this.root_path + this.repo)
			.init()
			.add('./*')
			.commit("First commit! Initializing Data")
	},

	getObject(key){
		if (this.repo){
			var str = jetpack.read(this.root_path + this.repo + '/' + key + '.json');
		}else{
			var str = jetpack.read(this.root_path + key + '.json');
		}
		if (typeof str == 'undefined'){
			return null
		}
        return JSON.parse(str);
	},

    setObject(key, value, repo) {
        value = JSON.stringify(value, null, 2);
        var g = this
        if (this.repo){
        	if (!jetpack.exists(this.root_path + this.repo)){
        		this.initRepo();
        	}
        	jetpack.writeAsync(this.root_path + this.repo + "/" + key + '.json', value)
        	this.setCommitJob();
        }else{
        	jetpack.writeAsync(this.root_path + key + '.json', value)
        }
    },


    commitObjects(){
    	console.log("committing")
    	var g = _git(this.root_path + this.repo)
        		.addConfig('user.name', 'DarkNote')
    			.addConfig('user.email', 'some@one.com')
    			.add('.')
       			.commit("Data update");
    }
    
}