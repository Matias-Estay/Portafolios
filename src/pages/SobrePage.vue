<template>
  <q-page>
    <video class="fit fixed" autoplay muted loop id="myVideo" :style="{
        'object-fit': 'cover'}
      ">
      <source src="/videos/aboutme.mp4" type="video/mp4">
    </video>
    <div id="container" class="with-background">
      <div class="row justify-center full-width" style="margin-top:15%">
        <div class="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-xs-12 text-white q-mb-xl">
          <q-card dark bordered class="flex bg-black-9" style="background:rgba(0,0,0,0.6)">
            <q-card-section class="text-center">
              <h3 style="margin:0">Sobre Mí</h3>
              <q-separator dark inset />
            </q-card-section>
            <q-card-section>
              <p >
                Ingeniero Civil en Informática y Telecomunicaciones de la Universidad Diego Portales de Chile, con más de 3 años de experiencia desarrollando aplicaciones principalmente como FrontEnd utilizando React o Vue para el rubro de la Minería realizando
                tareas de automatización de procesos matemáticos, generación de reportes, creando nuevas herramientas y optimizando previas a través de nuevos módulos para los
                grupos disciplinarios dentro de la misma Empresa.
              <br/>
                Además de realizar labores de FrontEnd tengo experiencia de dos (2) años trabajando con BackEnd utilizando el framework Laravel y trabajando con bases de datos MySQL, me encanta trabajar y aprender
                tecnologías nuevas, por lo que busco oportunidades que me permitan poner en práctica todo lo aprendido.
              <br/>
                Me gusta trabajar en equipos variados que me permitan conocer nuevas personas y poder compartir profesionalmente.
              </p>
              <ul>
                  Logros Laborales:
                <li>
                  Capacitar e integrar un equipo informático.
                </li>
                <li>
                  Estandarizar procesos internos.
                </li>
                <li>
                  Levantar junto al equipo informático asignado un sistema integrado unificado con una sola base de datos.
                </li>
                <li>
                  Realizar mantención a una aplicación hidráulica en un periodo aproximado de un año, donde la aplicación estuvo en desarrollo por más de 8 años y finalmente en 2021 liberarla a producción.
                </li>
                <li>
                  Generar reportabilidad a los clientes.
                </li>
              </ul>
              <ul>
                  Logros Personales:
                <li>
                  Capacitación en gestión técnica en ciberseguridad (Diplomatura).
                </li>
                <li>
                  Capacitación en metodologías agiles y DeVOps (Diplomatura).
                </li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
</q-page>
</template>
