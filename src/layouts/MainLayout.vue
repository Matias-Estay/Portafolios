<template>
  <q-layout view="lHh Lpr lFf">
    <q-header glossy >
      <q-toolbar class="bg-grey-5" >
        <q-btn flat>
          <q-img src="/icons/copyright-logo.png" style="width:150px"/>
        </q-btn>
        <q-space />
        <q-tabs
          class="bg-grey-5"
          shrink
          narrow-indicator
        >
          <q-route-tab class="text-black" exact to="/" label="Inicio" />
          <q-route-tab class="text-black" exact to="/about" label="Sobre mí" />
          <q-route-tab class="text-black" exact to="/skills" label="Habilidades" />
          <q-route-tab class="text-black" exact to="/projects" label="Proyectos" />
          <q-route-tab class="text-black" exact to="/contact" label="Contacto" />
        </q-tabs>
      </q-toolbar>

    </q-header>

    <q-page-container id="size">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const tab = ref('Incio')
    return {
      tab
    }
  }
})
</script>
