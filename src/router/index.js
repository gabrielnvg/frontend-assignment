import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../pages/Home.vue'
import Company from '../pages/Company.vue'
import CompanyData from '../pages/company/CompanyData.vue'
import CompanyTable from '../pages/company/CompanyTable.vue'
import CompanyPage from '../pages/company/CompanyPage.vue'

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
        component: Home,
        meta: {
          breadcrumbs: [
            {
              text: 'Home',
              href: '/home'
            }
          ]
        }
      },
      {
        path: 'company',
        component: Company,
        children: [
          {
            path: '',
            redirect: 'data'
          },
          {
            path: 'data',
            name: 'company-data',
            component: CompanyData,
            meta: {
              breadcrumbs: [
                {
                  text: 'Home',
                  href: '/home'
                },
                {
                  text: 'Company Data',
                  href: '/company/data'
                }
              ]
            }
          },
          {
            path: 'table',
            name: 'company-table',
            component: CompanyTable,
            meta: {
              breadcrumbs: [
                {
                  text: 'Home',
                  href: '/home'
                },
                {
                  text: 'Company Table',
                  href: '/company/table'
                }
              ]
            }
          },
          {
            path: 'page',
            name: 'company-page',
            component: CompanyPage,
            meta: {
              breadcrumbs: [
                {
                  text: 'Home',
                  href: '/home'
                },
                {
                  text: 'Company Page',
                  href: '/company/page'
                }
              ]
            }
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
