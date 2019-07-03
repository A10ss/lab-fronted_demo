import Vue from 'vue'
import Router from 'vue-router'
import HomePageTest from '@/views/HomePageTest'
import Cultivation from '@/views/Cultivation'
import Regulations from '@/views/Regulations'
import Research from '@/views/Research'
import Activities from '@/views/Activities'
import Project from '@/views/Project'
import Reward from '@/views/Reward'
import Thesis from '@/views/Thesis'
import Patent from '@/views/Patent'
import Members from '@/views/Members'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: HomePageTest
    },
    {
      path: '/Cul',
      name: '学生培养',
      component: Cultivation
    },
    {
      path: '/Reg',
      name: '规章制度',
      component: Regulations
    },
    {
      path: '/Act',
      name: '实验室风采',
      component: Activities
    },
    {
      path: '/Res',
      name: '研究方向',
      component: Research
    },
    {
      path: '/Pro',
      name: '研究项目',
      component: Project
    },
    {
      path: '/Rew',
      name: '获奖成果',
      component: Reward
    },
    {
      path: '/Pat',
      name: '专利成果',
      component: Patent
    },
    {
      path: '/The',
      name: '论文巨著',
      component: Thesis
    },
    {
      path: '/Mem',
      name: '团队成员',
      component: Members
    }
  ]
})
