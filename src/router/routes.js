
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InicioPage.vue') },
      { path: '/skills', component: () => import('pages/HabilidadesPage.vue') },
      { path: '/about', component: () => import('pages/SobrePage.vue') },
      { path: '/projects', component: () => import('pages/ProyectosPage.vue') },
      { path: '/contact', component: () => import('pages/ContactosPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
