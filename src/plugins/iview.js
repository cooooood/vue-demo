import Vue from 'vue'
import router from '../router'
import iView from 'iview'

Vue.use(iView)

import 'iview/dist/styles/iview.css'
router.beforeEach((to, from, next) => {
  console.log(to,from);
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
