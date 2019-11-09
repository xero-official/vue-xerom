<template>
<nav>
  <v-app-bar fixed color="#308968" dark app>
    <v-menu right bottom>
      <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/" style="text-decoration:none">Home</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/nodes" style="text-decoration:none">Nodes</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/monetary" style="text-decoration:none">Monetary Policy</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/team" style="text-decoration:none">Team</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <router-link to="/" style="text-decoration:none; color:#fff;">
      <v-toolbar-title color="#fff" class="justify-center">Xerom - Decentralized by nature.</v-toolbar-title>
    </router-link>

  </v-app-bar>

</nav>
</template>
