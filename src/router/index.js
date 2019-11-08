import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Company from '../views/Company.vue'
import CompanyData from '../views/company/CompanyData.vue'
import CompanyTable from '../views/company/CompanyTable.vue'
import CompanyPage from '../views/company/CompanyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: 'company'
      },{
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'company',
        name: 'company',
        component: Company,
        children: [
          {
            path: '',
            redirect: 'data'
          },
          {
            path: 'data',
            name: 'company-data',
            component: CompanyData
          },
          {
            path: 'table',
            name: 'company-table',
            component: CompanyTable
          },
          {
            path: 'page',
            name: 'company-page',
            component: CompanyPage
          }
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router