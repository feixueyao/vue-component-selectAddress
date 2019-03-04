import Vue from 'vue'
import Router from 'vue-router'
import addressSelect from '@/components/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addressSelect',
      component: addressSelect
    }
  ]
})
