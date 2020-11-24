<template>
  <q-page class="q-pa-none">
          <q-img height="470px" src="..//assets/banner2.jpg" />
          <div style="width:760px" class=" bg-white row absolute-center">
      <div class="col-5 ">
       <q-img width="302px" src="..//assets/me3.jpg" />
      </div>
      <div class="col q-pt-md">
        <div class="justify-center row">
          <h4 style="font-family:cursive" class="q-ma-none ">Renata Casanova</h4>
          <p style="font-size:20px" class="q-pt-sm text-center">Estudante de Analise e Desenvolvimento de Sistemas</p>
        </div>
        <div style="font-size:16px"  class="row q-ml-md q-mb-xs">
          <p><strong>Telefone:</strong><br>
          (81) 99793-1713</p>
        </div>
        <div style="font-size:16px" class="row q-ml-md  q-mb-xs">
         <p><strong> E-mail:</strong><br>
          renatapca@hotmail.com</p>
        </div>
        <div style="font-size:16px" class="row q-ml-md">
          <p><strong>Data de Nascimento:</strong><br>
          28 de Setembro de 1986</p>
        </div>
      </div>
    </div>
    <div class="row q-pb-xl ">
      <div style="background-color:#FF76C1" class="col-md-6 offset-md-3">
         <q-tabs class="q-ma-xs" v-model="tab">
          <a href="https://www.facebook.com/renatapca"><q-img class="q-ma-md" width="40px" src="..//assets/facebook.png" /></a>
          <a href="https://www.instagram.com/renatapca"><q-img class="q-ma-md" width="40px" src="..//assets/instagram.png" /></a>
          <a href="https://www.linkedin.com/in/renata-casanova-6914b11a2/"><q-img  class="q-ma-md" width="40px" src="..//assets/linkedin.png" /></a>
          <a href="https://github.com/renatapca"><q-img  class="q-ma-md" width="40px" src="..//assets/github1.png" /></a>
        </q-tabs>
      </div>
    </div>
        </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style>
#icones {
  margin-left: 350px;
  margin-right:350px;
}
</style>
