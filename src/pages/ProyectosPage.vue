<template>
  <q-page>
    <q-img src="/icons/background-proyectos.jpg" class="fit fixed"/>
    <div id="container" class="with-background full-width">
      <div class="row justify-center" style="margin-top:9%">
        <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <q-card dark bordered class="bg-black-9" style="background:rgba(0,0,0,0.6)" >
            <q-card-section>
              <h3 style="margin:0">Proyectos Personales</h3>
              <q-separator dark inset />
            </q-card-section>
            <q-card-section>
              <div class="row q-mb-md justify-center">
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
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
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck pointer" >
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/react-laravel-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">React Laravel</h2>
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
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck">
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/python-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">Python App</h2>
                        <p class="card-text-proyect">
                          Aplicación de muestra de Scrapping usando webdriver de selenium para <strong>Python 3.10.1</strong> para la generación de reportes de supermercados con sus productos.
                          <br/>
                          <br/>
                          <q-btn @click="Redirect(3)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck">
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/musica-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">Quasar Web</h2>
                        <p class="card-text-proyect">
                          Web desarrollada para la empresa Queremos más música, donde se desarrollo una página de bienvenida con Quasar 2.11.*, usando un Backend programado en Nodejs para envió de correos.
                          <br/>
                          <br/>
                          <q-btn @click="Redirect(4)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck">
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/biblioteca-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">Biblioteca</h2>
                        <p class="card-text-proyect">
                          Web que utiliza la IA documental de chatdoc, cuya función es la carga de documentos y compatir el chat de manera publica para su uso (usada por el chat de CV).
                          <br/>
                          <br/>
                          <q-btn @click="Redirect(5)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck">
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/Productos-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">Productos</h2>
                        <p class="card-text-proyect">
                          Administrador de productos realziado en 1 día cuyo objetivo era la utilización de NUXT 2 y consumo de APIs, para acceder se debe utilizar la cuenta admin@mail.com y password admin1234.
                          <br/>
                          <br/>
                          <q-btn @click="Redirect(6)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 centered-text q-mt-md">
                  <div class="card-deck">
                    <div class="card-proyect text-white shadow-9">
                      <img class="card-img" src="/images/musica-app.png"/>
                      <div class="card-img-overlay">
                        <h2 class="card-title">Cursos</h2>
                        <p class="card-text-proyect">
                          Web sin fines de lucro que comparte cursos de packtpub.
                          <br/>
                          <br/>
                          <q-btn @click="Redirect(5)" style="background: rgb(13, 17, 21); color: white" :label="'Ir al Sitio'" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
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
        case 4:
          window.open('https://queremosmusica.netlify.app')
          break
        case 5:
          window.open('https://miec-library.store')
          break
        case 6:
          window.open('https://miecnuxt.netlify.app')
          break
      }
    }
    return {
      Redirect
    }
  }
})
</script>
