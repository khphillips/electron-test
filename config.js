import GitStore from '@/plugins/GitStore'

export default {
	storage : {
		driver : GitStore,
		remote : '',
		username : '',
		password : ''
	}
}