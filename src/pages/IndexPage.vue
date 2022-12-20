<template>
  <q-page>
    <div class="row">
      <q-parallax
      src="../assets/images/background.png"
    >
      <h1 class="text-white">Matías Ignacio Estay Cubillos</h1>
    </q-parallax>
    </div>
    <div class="row">
      <div class="col-12 flex flex-center q-mt-xl text-h5">
        <div class="container-title">
          <img src="../assets/images/backtitle.png" :style="{'max-width':'26%', 'opacity':'0.1'}"/>
          <div class="centered-title">Proyectos personales</div>
        </div>
      </div>
    </div>
    <q-separator></q-separator>
    <div class="row q-mt-sm q-mb-md">
      <div class="col-xl-4 col-lg-4 col-md-6 col-xs-12 centered-text q-mt-md">
        <div class="card-deck">
          <div class="card-proyect text-white shadow-9">
            <img class="card-img" src="/images/python-app.png"/>
            <div class="card-img-overlay">
              <h2 class="card-title">Python App</h2>
              <p class="card-text-proyect">
                Aplicación sencilla de Scrapping usando selenium de Python 3.10.1 para la generación de reportes de supermercados con sus productos.
                <br/>
                <br/>
                <q-btn @click="Redirect(3)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-xs-12 centered-text q-mt-md">
        <div class="card-deck pointer" >
          <div class="card-proyect text-white shadow-9">
            <img class="card-img" src="/images/react-laravel-app.png"/>
            <div class="card-img-overlay">
              <h2 class="card-title">Pokédex</h2>
              <p class="card-text-proyect">
                Una aplicación con temática de Pokémon desarrollada usando <strong>React 17</strong>, <strong>Laravel 9</strong> y una base de datos <strong>MySQL</strong>.
                <br/>
                <br/>
                Se usó el servicio de nube de Digital Ocean y Laravel Forge para CI/CD
                <br/>
                <br/>
                <q-btn @click="Redirect(1)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-xs-12 centered-text q-mt-md">
        <div class="card-deck pointer">
          <div class="card-proyect text-white shadow-9" >
            <img class="card-img" src="/images/vue-app.png"/>
            <div class="card-img-overlay">
              <h2 class="card-title">Vue 3</h2>
              <p class="card-text-proyect">
                  Primera app desarrollada como boceto para la aplicación "Pokédex", esta hecha en <strong>Vue 2.7</strong> y actualizada a <strong>Vue 3</strong> utilizando <strong>Bootstrap 5</strong>.
                  <br/>
                  <br/>
                  Consume una API para la carga de información (https://pokeapi.co)  y está montada en Netlify
                <br/>
                <br/>
                <q-btn @click="Redirect(2)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
              </p>
            </div>
          </div>
        </div>
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
    <div class="row separator q-col-gutter-md q-mt-md q-mb-md">
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
      { src: '/icons/bootstrap-logo.png', name: 'Bootstrap', version: 'version: 4 to version: 5' },
      { src: '/icons/vue-logo.png', name: 'Vue', version: 'version: 2.7 to version: 3' },
      { src: '/icons/laravel-logo.png', name: 'Laravel', version: 'version: 6 to version: 9' },
      { src: '/icons/quasar-logo.png', name: 'Quasar', version: 'version: 2.11.1' },
      { src: '/icons/react-logo.png', name: 'React', version: 'version: 17' },
      { src: '/icons/material-ui-logo.png', name: 'Material UI', version: 'version: 5.11.0' },
      { src: '/icons/digital-ocean-logo.png', name: 'Digital Ocean', version: 'service' },
      { src: '/icons/forge-logo.png', name: 'Laravel Forge', version: 'service' }
    ])
    const MailTo = () => {
      window.location.href = 'mailto:mestaycubillos@gmail.com'
    }
    const Download = () => {
      window.open('/files/CV_Matias_Estay_Cubillos.pdf')
    }
    const Redirect = (cases) => {
      switch (cases) {
        case 1:
          window.open('https://miec.live')
          break
        case 2:
          window.open('https://miecvue3.netlify.app')
          break
        case 3:
          window.open('https://github.com/Matias-Estay/MuestraScrapping')
          break
      }
    }
    return {
      links,
      MailTo,
      Download,
      Redirect
    }
  }
})
</script>
