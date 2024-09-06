<template>
  <v-container>
    <v-card>
      <!-- <template v-slot:title>
        <span class="font-weight-black">{{ title }}</span>
      </template>
<v-card-title></v-card-title>
<v-card-subtitle>{{ subtitle }}</v-card-subtitle> -->
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">{{ subtitle }}</span>

          <!-- <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon> -->
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div>
            Hours required: 4.5
          </div>
        </v-row>
        <v-row>
          <span class="subheading">Skills set</span>

          <v-chip-group>
            <!-- <v-chip text="Java" border></v-chip> -->
            <v-chip :model-value="true" class="ma-2" color="teal" prepend-icon="mdi-checkbox-marked-circle">
              Java
            </v-chip>
            <v-chip text="MySQL" border></v-chip>
            <v-chip text="APIs" border></v-chip>
            <v-chip text="Elastic search" border></v-chip>
          </v-chip-group>
        </v-row>
        <h3 v-for="(heading, index) in headings" :key="index">{{ heading }}</h3>
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Solution to optimization of query search',
      subtitle: 'Software engineer',
      headings: ['Required', 'Expected', 'Offered'],
      paragraphs: [
        'Excepteur nostrud anim consequat aliqua cupidatat veniam fugiat cupidatat anim reprehenderit esse incididunt. Nisi incididunt velit aliqua cillum quis ut et. Elit ipsum tempor sit velit. Incididunt nostrud ipsum dolore aute.',
        'Laboris ipsum ex officia laboris non proident est Lorem. Sit anim aliqua ullamco eiusmod ea officia sint irure non. Velit veniam duis quis pariatur non irure eiusmod proident aliquip. Enim nisi officia velit laboris do dolore officia duis deserunt reprehenderit et labore. Eiusmod in voluptate elit minim ullamco duis tempor pariatur.',
        'In enim reprehenderit id magna. Sit nulla enim elit nulla mollit proident quis cupidatat anim sint reprehenderit magna. Laborum magna velit amet dolore anim aliqua proident sint ullamco. Fugiat ut ut Lorem enim incididunt aliquip et veniam. Id ut irure consectetur irure mollit nulla reprehenderit minim ipsum ipsum dolor ad. Tempor non culpa fugiat do sit officia. Labore commodo deserunt fugiat eu aliquip qui.',
      ]
    };
  }
};
</script>