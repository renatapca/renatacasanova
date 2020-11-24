<template>
<q-page>
   <div class="contato flex-center row q-mt-xs q-pt-xs">
       <h3 style="color:#8a5686; ">Contato</h3>
    </div>
     <div  class="flex-center row">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md q-pb-md "
    >
<div class=" q-ma-md row q-mt-md ">
    <q-input class="bg-pink-1" standout="bg-secondary text-grey-10"
    v-model="nome"
    type="text"
    label="Nome"
/>
  </div>
  <div class="q-ma-md row">
    <q-input class="bg-pink-1" standout="bg-secondary text-grey-10"
    v-model="email"
    type="email"
    label="E-mail" />
  </div>
  <div class="q-ma-md row">
     <q-input
     class="bg-pink-1"
     style="border-radius:4px; width:400px; border:1px solid pink;"
    standout="bg-secondary text-grey-10"
      v-model="text"
      label="Escreva sua mensagem"
      filled
      type="textarea"
    />
  </div>
  <div class="justify-end q-ma-md q-mt-lg row">
<q-btn
  style="width:400px; background: #FF0080; color: white"
  label="Enviar" />
  </div>
    </q-form>
    </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
.q-form .q-input {
    width:100%;
    border:1px solid pink;
    border-radius:4px;
}

.bg-brand {
  background: #FF0080;
}
</style>
