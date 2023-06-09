import { createApp } from 'vue';
import App from "./App.vue";
import { createI18n } from 'vue-i18n'

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap-submenu.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/leaflet.css";
import "./assets/css/map.css";
import "./assets/fonts/font-awesome/css/font-awesome.min.css";
import "./assets/fonts/flaticon/font/flaticon.css";
import "./assets/fonts/bootstrap-icons/bootstrap-icons.css";
import "./assets/fonts/linearicons/style.css";
import "./assets/css/jquery.mCustomScrollbar.css";
import "./assets/css/dropzone.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "././assets/css/skins/default.css";

import "jquery-mousewheel";

import "./assets/js/bootstrap-submenu.js";
import "./assets/js/rangeslider.js";
import "./assets/js/jquery.mb.YTPlayer.js";
import "./assets/js/bootstrap-select.min.js";
import "./assets/js/jquery.easing.1.3.js";

import "./assets/js/jquery.scrollUp.js";
import "./assets/js/jquery.mCustomScrollbar.concat.min.js";
import "./assets/js/leaflet.js";
import "./assets/js/leaflet-providers.js";
import "./assets/js/leaflet.markercluster.js";
import "./assets/js/dropzone.js";
import "./assets/js/jquery.filterizr.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/slick.min.js";
import "./assets/js/maps.js";
import "./assets/js/sidebar.js";
import "./assets/js/app.js";

import * as WOW from "wow.js";

var wow = new WOW({
  animateClass: "animated",
  offset: 100,
  mobile: false,
});
wow.init();

import da from './translations/dk.json'
import en from './translations/en.json'
import it from './translations/it.json'
import router from './Route';


const i18n = createI18n({
  locale: 'da', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    da, en, it
  }
});

createApp(App).use(router).use(i18n).mount('#app');
