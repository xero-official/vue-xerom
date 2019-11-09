<template>
<v-footer color="#308968" padless>
  <v-row justify="center" no-gutters>
    <v-btn color="white" text rounded class="my-2">
      <a href="https://explorer.ether1.org" style="text-decoration:none; color:white">explorer</a>
    </v-btn>
    <v-btn color="white" text rounded class="my-2">
      <a href="https://wallet.ether1.org" style="text-decoration:none; color:white">Web wallet</a>
    </v-btn>
    <v-btn color="white" text rounded class="my-2">
      <a href="https://github.com/Ether1Project" style="text-decoration:none; color:white">github</a>
    </v-btn>
    <v-btn color="white" text rounded class="my-2">
      <a href="https://coinmarketcap.com/currencies/ether-1/" style="text-decoration:none; color:white">coinmarketcap</a>
    </v-btn>
    <v-col color="#000" class="py-4 text-center white--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>Xerom</strong>
    </v-col>
  </v-row>
</v-footer>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
