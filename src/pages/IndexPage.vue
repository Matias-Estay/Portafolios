<template>
  <q-page>
    <div class="row">
      <q-parallax
      src="../assets/images/background.png"
    >
      <h1 class="text-white">Matías Ignacio Estay Cubillos</h1>
    </q-parallax>
    </div>
    <div class="row" style="height:1000px">
      <div class="col-12 flex flex-center q-mt-xl text-h5">
        <div class="container-title">
          <img src="../assets/images/backtitle.png" :style="{'max-width':'26%', 'opacity':'0.1'}"/>
          <div class="centered-title">Proyectos personales</div>
        </div>
      </div>
    </div>
    <q-separator></q-separator>
    <div class="row q-mt-sm q-mb-sm">
      <div class="col-4 text-center">
        1
      </div>
      <div class="col-4 text-center">
        2
      </div>
      <div class="col-4 text-center">
        3
      </div>
    </div>
    <q-separator></q-separator>
    <div class="row">
      <div class="col-12 flex flex-center q-mt-xl text-h5">
        <div class="container-title">
          <img src="../assets/images/backtitle.png" :style="{'max-width':'26%', 'opacity':'0.1'}"/>
          <div class="centered-title">Frameworks and Services</div>
        </div>
      </div>
    </div>
    <q-separator></q-separator>
    <div class="row separator q-col-gutter-md q-mt-sm q-mb-sm">
      <div v-for="(item, index) in links" :key="index" class="col-xl-3 col-lg-4 col-md-4 col-xs-6 text-center">
        <q-intersection
          transition="scale"
          class="example-item"
        >
            <q-card class="q-ma-sm centered-text">
              <img
                :src="item.src"
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
    <q-separator></q-separator>
    <div class="row justify-center q-mt-xl q-pb-lg full-height footer-style">
      <div class="col-xl-5 col-sm-7 col-xs-12">
        <q-card dark bordered class="bg-grey-9 my-card fit" style="bottom:16%">
          <q-card-section>
            <div class="text-h6 text-center">Contacto</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div class="row">
              <div class="col-xl-4 col-xs-2 border-footer">
                <div class="row justify-center">
                  <a :href="'https://www.linkedin.com/in/matías-ignacio-estay-cubillos-30295217a/'">
                    <q-icon class="bi bi-linkedin"/>
                  </a>
                </div>
                <div class="row q-mt-md justify-center">
                  <a :href="'https://github.com/Matias-Estay'">
                    <q-icon class="bi bi-github" />
                  </a>
                </div>
              </div>
              <div class="col-xl-4 col-xs-6 border-footer">
                <div class="row justify-center">
                  <q-icon class="bi bi-envelope pointer" @click="MailTo"/>
                </div>
                <div class="row q-mt-md justify-center">
                  <p class="pointer" @click="MailTo">mestaycubillos@gmail.com</p>
                </div>
              </div>
              <div class="col-xl-4 col-xs-4">
                <div class="row justify-center">
                    <q-icon class="bi bi-download pointer" @click="Download"/>
                </div>
                <div class="row q-mt-md justify-center pointer">
                  <p @click="Download">Descargar CV</p>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const links = ref([
      { src: 'public/icons/bootstrap-logo.png', name: 'Bootstrap', version: 'version: 4 to version: 5' },
      { src: 'public/icons/vue-logo.png', name: 'Vue', version: 'version: 2.7 to version: 3' },
      { src: 'public/icons/laravel-logo.png', name: 'Laravel', version: 'version: 6 to version: 9' },
      { src: 'public/icons/quasar-logo.png', name: 'Quasar', version: 'version: 2.11.1' },
      { src: 'public/icons/react-logo.png', name: 'React', version: 'version: 17' },
      { src: 'public/icons/material-ui-logo.png', name: 'Material UI', version: 'version: 5.11.0' },
      { src: 'public/icons/digital-ocean-logo.png', name: 'Digital Ocean', version: 'service' },
      { src: 'public/icons/forge-logo.png', name: 'Laravel Forge', version: 'service' }
    ])
    const MailTo = () => {
      window.location.href = 'mailto:mestaycubillos@gmail.com'
    }
    const Download = () => {
      window.open('public/files/CV_Matias_Estay_Cubillos.pdf')
    }
    return {
      links,
      MailTo,
      Download
    }
  }
})
</script>
