<template>
  <q-page>
    <q-img src="/icons/background-desk-wood.jpg" class="fit fixed"/>
    <div id="container" class="with-background">
      <div class="row justify-center">
        <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <div class="row">
            <div class="col-12 flex flex-center q-mt-xl text-h5">
              <div class="faber text-black">Frameworks y servicios</div>
            </div>
          </div>
          <q-separator color="white"></q-separator>
          <div class="row separator q-pt-xl q-mt-md justify-center">
            <div v-for="(item, index) in links" :key="index" class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text">
              <q-intersection
                transition="scale"
                style="height: 300px;width: 300px"
              >
                  <q-card class="q-ma-sm centered-text">
                    <img
                      :src="item.src"
                      class="q-pt-sm"
                      style="height: 150px; width: 150px"
                      />
                    <q-card-section>
                      <div class="text-h6">{{item.name }}</div>
                      <div class="text-subtitle2">{{ item.version }}</div>
                    </q-card-section>
                  </q-card>
              </q-intersection>
            </div>
          </div>
          <!-- Skills PT.2-->
          <div class="row">
            <div class="col-12 flex flex-center q-mt-xl text-h5">
              <div class="faber text-black">Otros Lenguajes y herramientas</div>
            </div>
          </div>
          <q-separator  color="white"></q-separator>
          <div class="row separator q-pt-xl q-mt-md justify-center" >
            <div v-for="(item, index) in len" :key="index" class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text">
              <q-intersection
                transition="scale"
                style="height: 300px;width: 300px"
              >
                  <q-card class="q-ma-sm centered-text">
                    <img
                      :src="item.src"
                      class="q-pt-sm"
                      style="height: 150px; width: 150px"
                      />
                    <q-card-section>
                      <div class="text-h6">{{item.name }}</div>
                      <div class="text-subtitle2">{{ item.version }}</div>
                    </q-card-section>
                  </q-card>
              </q-intersection>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HabilidadesPage',
  setup () {
    const links = ref([
      { src: '/icons/bootstrap-logo.png', name: 'Bootstrap', version: 'versión: 4 a versión: 5' },
      { src: '/icons/vue-logo.png', name: 'Vue', version: 'versión: 2.7 a versión: 3' },
      { src: '/icons/laravel-logo.png', name: 'Laravel', version: 'versión: 6 a versión: 9' },
      { src: '/icons/quasar-logo.png', name: 'Quasar', version: 'versión: 2.11.1' },
      { src: '/icons/react-logo.png', name: 'React', version: 'versión: 17' },
      { src: '/icons/material-ui-logo.png', name: 'Material UI', version: 'versión: 5.11.0' },
      { src: '/icons/digital-ocean-logo.png', name: 'Digital Ocean', version: 'servicio' },
      { src: '/icons/forge-logo.png', name: 'Laravel Forge', version: 'servicio' }
    ])
    const len = ref([
      { src: '/icons/csharp-logo.png', name: 'C#', version: 'usando Visual Studio Community' },
      { src: '/icons/mysql-logo.png', name: 'MySQL', version: 'versión: MySQL 8' },
      { src: '/icons/python-logo.png', name: 'Python', version: 'versión: 2.7 a versión: 3.10' },
      { src: '/icons/balsamiq-logo.png', name: 'Balsamiq', version: 'Herramienta' },
      { src: '/icons/figma-logo.png', name: 'Figma', version: 'Herramienta' }
    ])
    return {
      links,
      len
    }
  }
})
</script>
