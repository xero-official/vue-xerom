<template>
<nav>
  <v-app-bar fixed color="#840032" dark app>
    <v-app-bar-nav-icon>
      <v-img src="https://ether1.org/images/icon.png" height="50" width="50"></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title>ethoFS - DeCert</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

</nav>
</template>

<script>
export default {

};
</script>
