<template>
<div class="home">
  <v-container display="inline-block">
    <center>
      <v-layout row wrap class="justify-center">
        <v-flex xs12 sm6 md4 lg3 class="justify-center">
          <v-card class="ma-3 justify-center" max-width="344" color="#1d1d1d">
            <br>
            <v-icon color="#308968">fas fa-sign-in-alt</v-icon>
            <v-card-title class="justify-center">
              Sign In
            </v-card-title>

            <v-card-subtitle class="justify-center">
              Sign in to your ethoFS account
            </v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn large color="#308968" v-on="on">Sign In</v-btn>
                </template>
                <v-card color="#000">
                  <v-card-title class="headline justify-center">Sign Into ethoFS</v-card-title>
                  <span id="ethoFSLogin"> </span>
                  <br>
                  <v-card-text>
                    <v-text-field id="privatekey" label="Enter your Private Key" outlined color="#308968"></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-4" text @click="dialog = false">Cancel</v-btn>
                    <router-link to="/About" style="text-decoration:none">
                      <v-btn color="green darken-1" id="ethofs-login-button" @click="window.ethofsLogin(document.getElementById('privatekey').value);" text>Sign In</v-btn>
                    </router-link>
                    <br>
                  </v-card-actions>
                  <br>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md4 lg3>
          <v-card class="ma-3 justify-center" max-width="344" color="#fff">
            <br>
            <v-icon color="#308968">fas fa-user-plus</v-icon>

            <v-card-title class="justify-center black--text">
              Register
            </v-card-title>

            <v-card-subtitle class="justify-center black--text">
              Register an account for ethoFS
            </v-card-subtitle>

            <v-card-actions class="justify-center">
              <v-btn large color="#308968">Register</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
      <br>
      <br>
      <br>
      <v-img src="https://ethofs.com/index/images/logo.png" height="97" width="300"></v-img>
      <br>
    </center>

  </v-container>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    show: function() {},
    on: function() {},
  },
}
</script>
