<template>
  <q-page>
    <q-img src="/icons/background.jpg" class="fit fixed" :style="{
        'object-fit': 'cover'}">
    </q-img>
    <div class="row justify-center" >
      <div class="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-xs-12 fixed-center text-white q-mb-xl">
        <q-card dark bordered class="bg-black-9" style="background:rgba(0,0,0,0.6)">
          <q-card-section class="text-center">
            <h1 style="margin:0">Matías Ignacio Estay Cubillos</h1>
            <q-separator dark inset />
            <h5 style="margin-bottom:0px" class="q-mt-md">Desarrollador Web</h5>
          </q-card-section>
        </q-card>
        <div class="row justify-center q-mt-lg">
          <a class="q-mr-lg" :href="'https://github.com/Matias-Estay'">
            <q-icon class="bi bi-github" size="xl" color="black"/>
          </a>
          <a class="q-mr-lg" :href="'https://www.linkedin.com/in/matías-ignacio-estay-cubillos-30295217a/'">
            <q-icon class="bi bi-linkedin" size="xl" color="blue"/>
          </a>
          <a>
            <q-icon class="bi bi-envelope pointer" size="xl" @click="MailTo" color="red"/>
          </a>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const MailTo = () => {
      window.location.href = 'mailto:mestaycubillos@gmail.com'
    }
    const Download = () => {
      window.open('/files/CV_Matias_Estay_Cubillos.pdf')
    }
    return {
      MailTo,
      Download
    }
  }
})
</script>
