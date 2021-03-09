import Index from '@/components/index/Index';
import StatisticsItem from '@/components/index/StatisticsItem';
import EntryItem from '@/components/index/EntryItem';
import WorkOrder from '@/components/order/WorkOrder';
import WorkOrderNew from '@/components/order/WorkOrderNew';
import Session from '@/components/session/Session';
import Statistic from '@/components/statistic/Statistic.vue';
import Visitor from '@/components/visitor/Visitor';
import Customer from '@/components/customer/Customer';
import History from '@/components/history/History.vue';
import Detail from '@/components/customer/Detail';
import Logout from '@/components/logout/Logout';
import Setting11 from '@/components/setting/Setting11';
import Setting12 from '@/components/setting/Setting12';
import Setting21 from '@/components/setting/Setting21';
import Setting22 from '@/components/setting/Setting22';
import Setting23 from '@/components/setting/Setting23';
import Setting24 from '@/components/setting/Setting24';
import Setting242 from '@/components/setting/Setting242';
import Setting31 from '@/components/setting/Setting31';
import Setting32 from '@/components/setting/Setting32';
import Setting33 from '@/components/setting/Setting33';
import Setting34 from '@/components/setting/Setting34';
import Setting35 from '@/components/setting/Setting35';
import Setting36 from '@/components/setting/Setting36';
import Setting37 from '@/components/setting/Setting37';
import Setting38 from '@/components/setting/Setting38';
import Setting41 from '@/components/setting/Setting41';
import Setting42 from '@/components/setting/Setting42';
import Setting51 from '@/components/setting/Setting51';
import Setting52 from '@/components/setting/Setting52';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import Regist from '@/pages/Regist';




// 路由表
let routes = [
    {
        path:'/',
        component:Login,
        name:"login"
    },
    {
        path:'/regist',
        component:Regist
    },
    {
        path:'/main',
        component:Main,
        children:[
            {
                path:'index',
                component:Index
            },
            {
                path:'entryitem',
                component:EntryItem
            },
            {
                path:'StatisticsItem',
                component:StatisticsItem
            },
            {
                path:'session',
                component:Session
            },
            {
                path:'visitor',
                component:Visitor
            },
            {
                path:'order',
                component:WorkOrder
            },
            {
                path:'customer',
                 component:Customer
            },
            {
                path:'customer/detail',
                 component:Detail
            },
            {
                path:'WorkOrderNew',
                 component:WorkOrderNew
            },
            {
                path:'statistic',
                 component:Statistic
            },
            {
                path:'setting11',
                 component:Setting11
            },
            {
                path:'setting12',
                 component:Setting12
            },
            {
                path:'setting21',
                 component:Setting21
            },
            
            {
                path:'setting22',
                 component:Setting22
            },
            {
                path:'setting23',
                 component:Setting23
            },
            {
                path:'setting24',
                 component:Setting24
            },
            {
                path:'setting242',
                 component:Setting242
            },
            {
                path:'setting31',
                 component:Setting31
            },
            {
                path:'setting32',
                 component:Setting32
            },
            {
                path:'setting33',
                 component:Setting33
            },
            {
                path:'setting34',
                 component:Setting34
            },
            {
                path:'setting35',
                 component:Setting35
            },
            {
                path:'setting36',
                 component:Setting36
            },
            {
                path:'setting37',
                 component:Setting37
            },
            {
                path:'setting38',
                 component:Setting38
            },
            {
                path:'setting41',
                 component:Setting41
            },
            {
                path:'setting42',
                 component:Setting42
            },
            {
                path:'setting51',
                 component:Setting51
            },
            {
                path:'setting52',
                 component:Setting52
            },
            {
                path:'history',
                 component:History
            },
            {
                path:'logout',
                 component:Logout
            },
        ]
    },
    
    
]

export default routes;