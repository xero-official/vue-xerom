<template>
<v-container display="inline-block">
  <div id="chartdiv2" style="width: 100%; height: 400px; background-color: #222222;"></div>
  <br>
  <div id="chartdiv" style="width: 100%; height: 400px; background-color: #222222;"></div>
  <br>
  <h1 class="mx-auto text-center">Monetary Policy for XERO</h1>
  <br>
  <v-simple-table dark style="background-color:#222">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Block Number</th>
          <th class="text-left">Miner Reward</th>
          <th class="text-left">Node Reward</th>
          <th class="text-left">Dev Reward</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rewards" :key="item.name">
          <td>{{ item.bn }}</td>
          <td style="color: green;">{{ item.mr }}</td>
          <td style="color: red;">{{ item.nr }}</td>
          <td style="color: #b6b1ff;">{{ item.dr }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <br>

</v-container>
</template>
<script>
export default {
  data() {
    return {
      rewards: [{
          bn: '0 - 1,000,000',
          mr: '20 XERO',
          nr: '4 XERO',
          dr: '2 XERO',
        },
        {
          bn: '1,000,000 - 2,000,000',
          mr: '18 XERO',
          nr: '4 XERO',
          dr: '2 XERO',
        },
        {
          bn: '2,000,000 - 3,000,000',
          mr: '16 XERO',
          nr: '6 XERO',
          dr: '2 XERO',
        }, {
          bn: '3,000,000 - 4,000,000',
          mr: '14 XERO',
          nr: '6 XERO',
          dr: '2 XERO',
        }, {
          bn: '4,000,000 - 5,000,000',
          mr: '12 XERO',
          nr: '8 XERO',
          dr: '2 XERO',
        }, {
          bn: '5,000,000 - 6,000,000',
          mr: '10 XERO',
          nr: '10 XERO',
          dr: '2 XERO',
        }, {
          bn: '6,000,000 - 7,000,000',
          mr: '8 XERO',
          nr: '10 XERO',
          dr: '2 XERO',
        }, {
          bn: '7,000,000 - 8,000,000',
          mr: '6 XERO',
          nr: '12 XERO',
          dr: '1.5 XERO',
        }, {
          bn: '8,000,000 - 9,000,000',
          mr: '4 XERO',
          nr: '12 XER0',
          dr: '1.5 XERO',
        }, {
          bn: '9,000,000 - 10,000,000',
          mr: '4 XERO',
          nr: '14 XERO',
          dr: '1.5 XERO',
        },
      ],
    }
  },
}
</script>
