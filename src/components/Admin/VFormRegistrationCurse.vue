<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <p class="text-h6">
              Qual o nome do curso?
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              <span text-subtitle-2>Nome do curso&nbsp;</span>
              <v-tooltip v-bind:style="{ opacity: 0.5 }" location="end">
                <template v-slot:activator="{props}">
                  <v-icon v-bind="props" color="light-blue-darken-4" size="small">
                    mdi-information-outline
                  </v-icon>
                </template>
                <span>Apenas curso que podem ser ofertados</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              class="mb-n4"
              ref="NameCurse"
              density="compact"
              variant="outlined"
              placeholder="Insira o nome do curso"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <p>
              <span text-subtitle-2>Quando começa a aula &nbsp;</span>
              <v-tooltip v-bind:style="{ opacity: 0.5 }" location="end">
                <template v-slot:activator="{props}">
                  <v-icon v-bind="props" color="light-blue-darken-4" size="small">
                    mdi-information-outline
                  </v-icon>
                </template>
                <span>Data primeiro dia</span>
              </v-tooltip>
            </p>
          </v-col>
          <v-col cols="6">
            <p>
              <span text-subtitle-2>Coordenador do curso &nbsp;</span>
              <v-tooltip v-bind:style="{ opacity: 0.5 }" location="end">
                <template v-slot:activator="{props}">
                  <v-icon v-bind="props" color="light-blue-darken-4" size="small">
                    mdi-information-outline
                  </v-icon>
                </template>
                <span>Nome do coordenador do curso</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              class="mb-n4"
              ref="NameCurse"
              density="compact"
              variant="outlined"

              placeholder="Insira a data que começa a aula"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              class="mb-n4"
              ref="NameCoordenador"
              density="compact"
              variant="outlined"

              placeholder="Insira o nome do coordenador"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-h6">
              Quantos periodos e quantos alunos?
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <p>
              <span text-subtitle-2>Quantos períodos o curso vai ter? &nbsp;</span>
              <v-tooltip v-bind:style="{ opacity: 0.5 }" location="end">
                <template v-slot:activator="{props}">
                  <v-icon v-bind="props" color="light-blue-darken-4" size="small">
                    mdi-information-outline
                  </v-icon>
                </template>
                <span>De 1 a 10 periodos</span>
              </v-tooltip>
            </p>
          </v-col>
          <v-col cols="6">
            <p>
              <span text-subtitle-2>Quantidade de aluno por curso? &nbsp;</span>
              <v-tooltip v-bind:style="{ opacity: 0.5 }" location="end">
                <template v-slot:activator="{props}">
                  <v-icon v-bind="props" color="light-blue-darken-4" size="small">
                    mdi-information-outline
                  </v-icon>
                </template>
                <span>Quantidade que o curso ira ter por periodo</span>
              </v-tooltip>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              class="mb-n4"
              ref="Periodos"
              density="compact"
              variant="outlined"
              placeholder="Insira quantos periodos o curso vai ter"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              class="mb-n4"
              ref="QuantidadeAlunos"
              density="compact"
              variant="outlined"
              placeholder="Insira a quantidade de alunos por periodo"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row justify="end">
              <v-btn v-on:click="voltarParaEtapaAnterior()"
              aling-center
              variant="plain"
              color="light-blue-darken-4"
              >Voltar</v-btn
              >
              <v-btn
                v-on:click="avancarParaProximaEtapa()"
                aling-center
                variant="flat"
                bg-color="#AE8F59"
                >Avançar</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
function voltarParaEtapaAnterior() {

}

function avancarParaProximaEtapa() {

}
</script>
