<template>
<div class="home">
  <v-container display="inline-block">
    <center>
      <v-layout row wrap class="justify-center">
        <v-flex xs12 sm6 md4 lg3 class="justify-center">
          <v-card class="ma-3 justify-center" max-width="344" color="#1d1d1d">
            <br>
            <v-icon color="#840032">fas fa-sign-in-alt</v-icon>
            <v-card-title class="justify-center" v-on="on">
              Sign In
            </v-card-title>

            <v-card-subtitle class="justify-center">
              1,000 miles of wonder
            </v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn large color="#840032" v-on="on">Sign In</v-btn>
                </template>
                <v-card color="#1d1d1d">
                  <v-card-title class="headline justify-center">Sign Into ethoFS</v-card-title>
                  <v-card-text>
                    <v-text-field :rules="rules" label="Enter your Private Key"></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">Sign In</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>


            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and
                  two
                  zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md4 lg3>
          <v-card class="ma-3 justify-center" max-width="344" color="#fff">
            <br>
            <v-icon color="#840032">fas fa-user-plus</v-icon>

            <v-card-title class="justify-center black--text">
              Register
            </v-card-title>

            <v-card-subtitle class="justify-center black--text">
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions class="justify-center">
              <v-btn large color="#840032">Register</v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two
                  zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
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
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
