<template>
  <q-page>
    <div class="row justify-center fit">
      <div class="background fit" :style="{height:height+ 'px !important'}"
      >
        <h1 class="full-width absolute text-white text-center gentium" style="top:2%;margin: 0;">Matías Ignacio Estay Cubillos</h1>
    </div>
      <div class="col-xl-11 col-xs-12 absolute" ref="total" style="background-color:white; top:10%">
        <!-- Proyects -->
        <div class="row">
          <div class="col-12 flex flex-center q-mt-xl text-h5">
              <div class="faber">Proyectos personales</div>
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
                    Aplicación de muestra de Scrapping usando webdriver de selenium para <strong>Python 3.10.1</strong> para la generación de reportes de supermercados con sus productos.
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
        <!-- About -->
        <q-separator></q-separator>
        <div class="row">
          <div class="col-12 flex flex-center q-mt-xl text-h5">
            <div class="faber">Sobre mí</div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="row q-col-gutter-md q-mt-md q-mb-md q-pr-xl q-pl-xl justify-center">
          <div class="col-6">
            <p >
              Ingeniero civil en informática y telecomunicaciones de la Universidad Diego Portales en Chile, con más de 3 años de experiencia desarrollando aplicaciones principalmente como FrontEnd utilizando React o Vue para el rubro de la minería realizando
              tareas de automatización de procesos matemáticos, generación de reportes, creando nuevas herramientas como manteniendo previas a través de nuevos módulos para las distintas herramientas desarrolladas para los
              grupos disciplinarios dentro de la misma empresa.
            <br/>
              Además de realizar labores de FrontEnd tengo experiencia de 2 años trabajando con BackEnd utilizando el framework Laravel y trabajando con bases de datos MySQL, me encanta trabajar y aprender
              tecnologías nuevas, por lo que busco oportunidades que me permitan poner en práctica todo lo aprendido por mi cuenta o por mis pares.
            <br/>
              Me gusta trabajar en equipos variados que me permitan conocer nuevas personas y poder compartir profesionalmente.
            </p>
            <ul>
                Logros Laborales:
              <li>
                Levantar junto al equipo informático asignado un sistema integrado unificado con una sola base de datos.
              </li>
              <li>
                Realizar mantención a una aplicación hidráulica en un periodo aproximado de un año, donde la aplicación estuvo en desarrollo por más de 8 años y finalmente en 2021 liberarla a producción.
              </li>
              <li>
                Estandarizar procesos internos de la empresa con los reportes generados por las aplicaciones desarrolladas.
              </li>
            </ul>
            <ul>
                Logros Personales:
              <li>
                Terminar el Diplomado en gestión técnica en ciberseguridad
              </li>
            </ul>
          </div>

        </div>
        <q-separator></q-separator>
        <!-- Skills -->
        <div class="row">
          <div class="col-12 flex flex-center q-mt-xl text-h5">
            <div class="faber">Frameworks y servicios</div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="row separator q-col-gutter-md q-mt-md q-mb-md q-pr-xl q-pl-xl justify-center" >
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
        <q-separator></q-separator>
        <!-- Skills -->
        <div class="row">
          <div class="col-12 flex flex-center q-mt-xl text-h5">
            <div class="faber">Otros Lenguajes y herramientas</div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="row separator q-col-gutter-md q-mt-md q-mb-md q-pr-xl q-pl-xl justify-center" >
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
        <q-separator></q-separator>
        <!-- Contact -->
        <div class="row justify-center q-mt-xl q-pb-lg footer-style">
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
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  mounted () {
    this.height = this.$refs.total.offsetHeight + 400
    window.addEventListener('resize', () => {
      if (this.$refs.total != null) { this.height = this.$refs.total.offsetHeight + 400 }
    })
  },
  setup () {
    const height = ref(0)
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
    const len = ref([
      { src: '/icons/csharp-logo.png', name: 'C#', version: 'usando Visual Studio Community' },
      { src: '/icons/mysql-logo.png', name: 'MySQL', version: 'version: MySQL 8' },
      { src: '/icons/python-logo.png', name: 'Python', version: 'version: 2.7 to version: 3.10' },
      { src: '/icons/balsamiq-logo.png', name: 'Balsamiq', version: 'Herramienta' },
      { src: '/icons/figma-logo.png', name: 'Figma', version: 'Herramienta' }
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
      len,
      height,
      MailTo,
      Download,
      Redirect
    }
  }
})
</script>
