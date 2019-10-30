import '@fortawesome/fontawesome-free/css/all.css' 
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import dark_theme from './dark_theme'
import light_theme from './light_theme'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: { 
    	dark : dark_theme, 
    	light : dark_theme
    },
  },
});
