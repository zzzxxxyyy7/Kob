import { createRouter, createWebHistory } from 'vue-router'
import PKindexView from '../views/pk/PKindexView'
import RankkistindexView from '../views/ranklist/RankkistindexView'
import RecordView from '../views/record/RecordView'
import UserBotindexView from '../views/user/bot/UserBotindexView'
import NotFoundView from '../views/error/NotFoundView'
import PersonInfo from '../views/user/PersonInfo/PersonInfo'
import EventsView from '../views/event/EventsView'
const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/",
  },
  {
    path:"/pk/",
    name:"battle",
    component:PKindexView,
  },
  {
    path:"/ranklist/",
    name:"rate",
    component:RankkistindexView,
  },
  {
    path:"/record/",
    name:"record",
    component:RecordView,
  },
  {
    path:"/user/bot/",
    name:"bot",
    component:UserBotindexView,
  },
  {
    path:"/error/",
    name:"error",
    component:NotFoundView,
  },  
  {
    path:"/:catchAll(.*)",
    name:"404",
    redirect:"/error/",
  },
  {
    path:"/user/PersonInfo/",
    name:"PersonInfo",
    component:PersonInfo,
  },
  {
    path:"/event/",
    name:"ent",
    component:EventsView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
