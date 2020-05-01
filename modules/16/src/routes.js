import Home from './components/Home.vue'
import Header from './components/Header.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserStart from './components/user/UserStart.vue'

export const routes = [
    { path: '', name: 'home', components: { default: Home, 'header-top': Header } },
    // { path: '/user/:id', component: User, props: true },
    { path: '/user', components: { default: User, 'header-bottom': Header }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true, beforeEnter: (to, from, next) => {
            console.log('inside route beforeEach');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit', props: true },
    ] },
    { path: '/redirect-1', redirect: '/user' },
    { path: '/redirect-2', redirect: {name: 'home'} },
    { path: '*', redirect: '/' } // "catchall" redirection for all other routes, which were not defined before.
]