<template>
  <q-page>

    <div class="row justify-center fit">
      <div class="background fit" :style="{height:height+ 'px !important'}"
      >
        <h1 class="full-width absolute text-white text-center" style="height:464px; top:2%">Matías Ignacio Estay Cubillos</h1>
    </div>
      <div class="col-xl-11 col-xs-12 absolute" ref="total" style="background-color:white; top:15%">
        <!-- Proyects -->
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
            <div class="container-title">
              <img src="../assets/images/backtitle.png" :style="{'max-width':'26%', 'opacity':'0.1'}"/>
              <div class="centered-title">Sobre mí</div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="row q-col-gutter-md q-mt-md q-mb-md q-pr-xl q-pl-xl">
          <div class="col-12" style="text-align-last: center;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices risus nec mi sollicitudin, aliquet mollis augue tristique. Mauris condimentum iaculis ultricies. Pellentesque eu leo ipsum. Ut semper ipsum in tristique rhoncus. Proin tempor rutrum arcu vel imperdiet. Phasellus ullamcorper varius leo, in convallis urna ultrices sed. Integer quis mi ornare, aliquet sapien at, suscipit purus. Mauris consequat commodo purus eu suscipit. Suspendisse non volutpat lorem, eu varius urna. Quisque in luctus erat. Maecenas finibus ut leo quis laoreet. Cras quis interdum massa, ut malesuada magna. Maecenas tempus justo tincidunt velit finibus, ut molestie massa elementum.

Cras porttitor id quam quis sodales. Integer maximus, purus eget viverra lacinia, ligula lectus accumsan eros, eu ornare risus turpis sit amet nulla. Nullam faucibus sem odio, eget sagittis nulla mattis vitae. Duis sodales diam id odio pretium, id placerat dolor pulvinar. Etiam dictum sagittis egestas. Sed ut dolor eget massa bibendum accumsan id non enim. Morbi eget nunc lobortis, ullamcorper mi sed, vestibulum sem. Phasellus tempor auctor metus sed pharetra. Fusce sodales laoreet quam, eget cursus lorem iaculis in.

Duis vel dictum risus, in vehicula elit. Suspendisse id pretium quam. Quisque pellentesque tempor nibh vel tincidunt. Vestibulum et tincidunt sem. Nunc quis risus at nisi mollis pulvinar. Nunc luctus dui id tempor cursus. Praesent sed ipsum eget lorem lacinia efficitur. Praesent at interdum urna.

Quisque non lacus eget est hendrerit lobortis a in nisl. Praesent scelerisque justo sit amet tortor viverra, sit amet rutrum dolor consectetur. Donec hendrerit ligula id tellus varius scelerisque vitae quis eros. Vivamus accumsan, nibh vel tristique sollicitudin, tellus odio feugiat sem, in auctor velit nunc ut quam. Praesent at tristique purus, at ultricies libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur venenatis placerat orci.

Fusce vitae bibendum massa. Vestibulum fermentum, massa a bibendum accumsan, ligula ipsum congue felis, ut posuere elit ante eu eros. Proin justo lorem, volutpat in turpis nec, efficitur cursus metus. Morbi fringilla condimentum laoreet. Donec mattis augue nec leo gravida finibus. Praesent id suscipit urna. Vestibulum mauris neque, hendrerit ut tempor quis, dignissim laoreet lorem. Integer blandit pulvinar eros id iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut nulla laoreet, luctus lorem at, varius lacus. Suspendisse et rhoncus lorem. Sed lectus nulla, interdum vitae velit elementum, commodo gravida sapien. Sed rhoncus vestibulum erat, euismod feugiat sem. Nunc ut augue sollicitudin, blandit odio a, vestibulum dolor. Sed quam sem, tincidunt nec eros in, blandit euismod turpis.

Sed vel eleifend dolor. Nunc consequat, quam id sodales dignissim, nisi lectus condimentum tellus, quis posuere purus lacus imperdiet dolor. Ut efficitur egestas sapien, non molestie purus volutpat sit amet. Cras dictum imperdiet nisl, at tincidunt dolor mattis quis. Nulla elementum lacinia orci, nec faucibus ex tincidunt quis. Nunc ac orci in quam mollis venenatis sit amet non arcu. Maecenas mattis, justo eget sodales efficitur, dolor nunc condimentum nibh, et pulvinar dolor tellus ut justo. Duis tincidunt blandit odio, vitae aliquam augue elementum ac. Nullam faucibus pulvinar lectus vitae vehicula. Aenean nunc quam, porta vel libero sed, blandit lobortis neque. Aenean pellentesque turpis sodales, sollicitudin magna quis, gravida quam. In tincidunt accumsan ante vitae accumsan.

Fusce interdum molestie placerat. Donec vel leo eu elit tincidunt semper. Vivamus in luctus lectus, quis sagittis nibh. Nunc hendrerit massa eu nunc feugiat sollicitudin. Curabitur id laoreet magna. Proin turpis diam, venenatis in lacus ut, sollicitudin tempor mi. Morbi cursus justo at orci ultricies lacinia. Fusce auctor lectus a posuere sodales. Vestibulum condimentum felis vitae ipsum lacinia consequat a quis ipsum. In at consectetur purus, vitae posuere nisi. Nunc nec turpis id nisl scelerisque porta.

Proin vitae arcu ut ante efficitur efficitur. Nam id tellus a elit imperdiet lobortis id vitae felis. Duis efficitur ligula id ante malesuada, quis porta dolor sollicitudin. Phasellus pulvinar neque eget tincidunt ornare. Phasellus placerat magna justo, vel bibendum dolor pulvinar in. Etiam condimentum ac ante at mattis. Cras sed pellentesque velit, et cursus turpis. Curabitur elementum felis in dignissim hendrerit. Curabitur id consequat sapien. Nulla condimentum, urna tincidunt scelerisque lacinia, neque arcu dapibus libero, sed vehicula nisi neque sit amet diam. Nulla pharetra neque in quam vestibulum, at sodales sapien venenatis.

Cras a sem a ipsum euismod molestie nec sit amet dui. Phasellus sit amet placerat dolor, quis laoreet turpis. Quisque enim nisi, fermentum et nibh sed, fringilla dictum elit. Maecenas pulvinar nulla nibh, id suscipit arcu posuere id. Phasellus nibh justo, hendrerit at nisi nec, sollicitudin egestas odio. Integer at nunc quam. Mauris mattis consequat dui, ut varius nibh dapibus et. Etiam vehicula, leo vitae vestibulum maximus, dolor lectus faucibus nisi, sed eleifend lacus dui fermentum massa. Integer justo sapien, rutrum vitae elementum vel, pellentesque et leo. Phasellus imperdiet ligula posuere nisi lacinia laoreet. Etiam semper ante interdum, ultricies risus at, malesuada ex. Nam at nisi lacus.
          </div>
        </div>
        <q-separator></q-separator>
        <!-- Skills -->
        <div class="row">
          <div class="col-12 flex flex-center q-mt-xl text-h5">
            <div class="container-title">
              <img src="../assets/images/backtitle.png" :style="{'max-width':'26%', 'opacity':'0.1'}"/>
              <div class="centered-title">Frameworks and Services</div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="row separator q-col-gutter-md q-mt-md q-mb-md q-pr-xl q-pl-xl">
          <div v-for="(item, index) in links" :key="index" class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
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
    this.height = this.$refs.total.offsetHeight + 1100
    window.addEventListener('resize', () => {
      this.height = this.$refs.total.offsetHeight + 1100
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
      height,
      MailTo,
      Download,
      Redirect
    }
  }
})
</script>
