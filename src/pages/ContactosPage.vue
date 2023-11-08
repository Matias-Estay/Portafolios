<template>
  <q-page>
    <q-img src="/icons/background-contact.png" class="fit fixed"/>
    <div id="container" class="with-background full-width">
      <div class="row justify-center" style="margin-top:12%">
        <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11">
          <q-card dark bordered class="bg-black-9" style="background:rgba(0,0,0,0.6)" >
            <q-card-section>
              <h3 style="margin:0">Contacto y CV</h3>
              <q-separator dark inset />
            </q-card-section>
            <q-card-section>
              <div class="row justify-center q-mt-lg q-gutter-xs">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                  <div class="row justify-center">
                    <a class="q-mr-lg" :href="'https://github.com/Matias-Estay'">
                      <q-icon class="bi bi-github" size="xl" color="black"/>
                    </a>
                    <h6 class="q-mt-none" @click="Download">Github</h6>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12">
                  <div class="row justify-center">
                    <a class="q-mr-lg" :href="'https://www.linkedin.com/in/matías-ignacio-estay-cubillos-30295217a/'">
                      <q-icon class="bi bi-linkedin q-mr-md" size="xl" color="blue"/>
                    </a>
                    <h6 class="q-mt-none" @click="Download">Linkedin</h6>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                  <div class="row justify-center">
                    <q-icon class="bi bi-envelope pointer q-mr-md" size="xl" @click="MailTo" color="red"/>
                    <h6 class="q-mt-none" @click="Download">Correo</h6>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12">
                  <div class="row justify-center">
                    <q-icon class="bi bi-download pointer q-mr-md" size="xl" @click="Download"/>
                    <h6 class="q-mt-none" @click="Download">Descargar CV</h6>
                  </div>
                </div>
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
