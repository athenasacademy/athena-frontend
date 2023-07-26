<template>
  <v-app>
    <VHeader pageTitle="Pagamentos" />

    <v-main>
      <div>
        <h1>Tela Pagamentos</h1>

        <div v-if="pagamentos.length > 0">
          <h2>Lista de Pagamentos</h2>
          <ul>
            <li v-for="pagamento in pagamentos" :key="pagamento.id">{{ pagamento.descricao }}</li>
          </ul>
        </div>

        <div v-else>
          <p>Carregando...</p>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

let pagamentos = reactive([]);

onMounted(async () => {
  try {
    const response = await axios.get('pagamento');
    pagamentos = response.data;
  } catch (error) {
    console.error('Erro ao buscar os pagamentos:', error);
  }
});
</script>
