<template>
<nav fixed>
  <v-tabs background-color="#1c503d" color="#fff" dark slider-color="red" app fixed>

    <v-tab ripple>Chain Node</v-tab>

    <v-tab ripple>Xero Node</v-tab>

    <v-tab ripple>Link Node</v-tab>

    <v-tab ripple>Super Node</v-tab>

    <v-tab-item>
      <Chain />
    </v-tab-item>

    <v-tab-item>
      <Xero />
    </v-tab-item>

    <v-tab-item>
      <Link />
    </v-tab-item>

    <v-tab-item>
      <Super />
    </v-tab-item>

  </v-tabs>
</nav>
</template>

<script>
import Chain from '@/components/nodes/Chain'
import Xero from '@/components/nodes/Xero'
import Link from '@/components/nodes/Link'
import Super from '@/components/nodes/Super'

export default {
  name: 'App',
  components: {
    Chain,
    Xero,
    Link,
    Super
  },
  data: () => ({}),
};
</script>
