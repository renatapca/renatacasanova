<template>
    <q-layout view="lHh Lpr lFf" class="shadow-2" >
    <q-header elevated >
        <q-toolbar  class="q-pa-md">
          <q-btn @click="left = !left" style="color:purple" flat round dense icon="menu" class="q-mr-sm" />
            <q-btn flat to="/"><q-img src="..//assets/myname.png" width="500px" /></q-btn>
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>

        <q-tabs style="color:purple" class="q-ma-md" v-model="tab">
          <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :label="nav.label" />

        </q-tabs>
      </q-header  >
       <q-drawer v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
      <q-footer elevated>
        <q-toolbar class="glossy">
          <q-toolbar-title style="color:purple">Criado por Renata Casanova</q-toolbar-title>
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>
<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      left: false,
      navs: [
        {
          label: 'Sobre Mim',
          to: '/formacao'
        },
        {
          label: 'PORTFOLIO',
          to: '/portfolio'
        },
        {
          label: 'CERTIFICADOS',
          to: '/certificados'
        },
        {
          label: 'CONTATO',
          to: '/contato'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>
