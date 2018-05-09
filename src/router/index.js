import Vue from 'vue'
import Router from 'vue-router'
//生活模块首页
import Index from '@/views/Index/index.vue'
//生活模块详情页
import liveDetail from '@/views/second-shop/liveDetail.vue'


//优惠折扣详情页
import discountsDetail from '@/views/discounts/discountsDetail.vue'

import recruitDetail from '@/views/recruit/recruitDetail.vue'

//商家列表
import typesList from '@/views/merchant/types-list.vue'
import merParticulars from '@/views/merchant/merchant-particulars.vue'

Vue.use(Router)


export default new Router({
//mode: 'history',
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },

    //二手市场详情页
    {
      path: '/liveDetail/:id',
      name: 'liveDetail',
      component: liveDetail
    },
    
  
    //优惠折扣详情页
    {
      path: '/discountsDetail/:id',
      name: 'discountsDetail',
      component: discountsDetail
    },
    
    //招聘详情页
    {
      path: '/recruitDetail/:id',
      name: 'recruitDetail',
      component: recruitDetail
    },
	
	//商家列表
		{
      path: '/typesList/:id',
      name: 'typesList',
      component: typesList
    },
    //商家详情
    {
      path: '/merParticulars/:id',
      name: 'merParticulars',
      component: merParticulars
    },
    
    
    //地址不存在时跳转404页面
    {
      path: '*',
      redirect: '/'
    }
  ]
  
})
