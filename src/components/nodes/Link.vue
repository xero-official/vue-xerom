<template>
<v-app>
  <br>
  <v-card class="mx-auto text-center" width="500" outlined>
    <v-card-subtitle style="font-size: 48px; color: #fff">Link Node</v-card-subtitle>
    <v-card-subtitle style="color: #fff">40,000 XERO</v-card-subtitle>
    <v-card-subtitle style="color: #fff">RAM: 4GB</v-card-subtitle>
    <v-card-subtitle style="color: #fff">CPU: Intel/ARM - 2 core minimum.</v-card-subtitle>
    <v-card-subtitle style="color: #fff">Storage: 80GB SSD Card.</v-card-subtitle>
    <v-card-subtitle style="color: #fff">Public static IP address.</v-card-subtitle>
    <br>
  </v-card>

  <br>

  <v-card class="mx-auto text-center" max-width="500" outlined>
    <v-card-subtitle style="color: #fff">Link Nodes run ethoFS, Geth and IPFS binaries. Link Nodes help secure the chain by verifying transactions on the network as well as host content uploaded to the ethoFS network by running an ethoFS and IPFS
      binary.</v-card-subtitle>


    <v-card-actions class="justify-center">
      <v-btn text style="color: #fff">Buy XERO</v-btn>
    </v-card-actions>
  </v-card>

  <br>

  <v-data-table :headers="headers" :items="rewards" :items-per-page="5" class="elevation-1 mx-auto"></v-data-table>

  <br>

</v-app>
</template>

<script>
export default {
  data: () => ({
    disabled: false,
    openDelay: '0',
    closeDelay: '0',
    value: false,
  }),
}
</script>
<script>
export default {
  data() {
    return {
      headers: [{
          text: 'Block Height',
          align: 'left',
          sortable: false,
          value: 'name',
          color: '#fff',
        },
        {
          text: 'Rewards',
          value: 'rewards'
        },
      ],
      rewards: [{
          name: 'Frozen Yogurt',
          rewards: 159,
        },
        {
          name: 'Ice cream sandwich',
          rewards: 237,
        },
        {
          name: 'Eclair',
          rewards: 262,
        },
        {
          name: 'Cupcake',
          rewards: 305,
        },
        {
          name: 'Gingerbread',
          rewards: 356,
        },
        {
          name: 'Jelly bean',
          rewards: 375,
        },
        {
          name: 'Lollipop',
          rewards: 392,
        },
        {
          name: 'Honeycomb',
          rewards: 408,
        },
        {
          name: 'Donut',
          rewards: 452,
        },
        {
          name: 'KitKat',
          rewards: 518,
        },
      ],
    }
  },
}
</script>
