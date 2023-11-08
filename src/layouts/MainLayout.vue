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
          outside-arrows
          mobile-arrows
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
      <router-view/>
      <q-page-sticky position="bottom-right" :offset="fabPos">
        <q-fab
          icon="chat"
          direction="up"
          color="blue"
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <q-card class="cv-chat" flat bordered>
            <q-card-section class="bg-grey-8 text-white">
              <div class="text-h6">Conversa con mi CV!</div>
            </q-card-section>
            <iframe style="width:350px; height: 400px;" src="https://miec-library.store/shared?id=9&id_api=1bbee14c-8234-4118-aaed-8ff7369c1458"/>
          </q-card>
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const tab = ref('Incio')
    const fabPos = ref([160, 70])
    const draggingFab = ref(false)
    return {
      tab,
      draggingFab,
      fabPos,
      moveFab (ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true
        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y
        ]
      }
    }
  }
})
</script>
