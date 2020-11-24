
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/certificados', component: () => import('pages/certificados.vue') },
      { path: '/formacao', component: () => import('pages/formacao.vue') },
      { path: '/portfolio', component: () => import('pages/portfolio.vue') },
      { path: '/contato', component: () => import('pages/contato.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
