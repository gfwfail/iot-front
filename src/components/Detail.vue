<template>
  <div>
    <nav-bar></nav-bar>

    <div class="wrapper" >

      <div style="margin:0;margin-top: 20px;padding:0px;" class="vehicle__box">

        <el-card>
          <div slot="header" class="clearfix" style="position:relative">
            <div style="position:absolute;left:0px;top:44px;text-align: center;width:100%;">
          <span
            style="background: #FFFFFF;color:#8492A6;border:solid 1px #8492A6;border-radius:4px;padding:2px 10px;font-size:18px;font-weight:700;">XJSU</span>

            </div>

            <router-link to="/"><el-button type="info" icon="caret-left">Back</el-button> </router-link>
          </div>
          <el-row style="padding:50px;background: #F9FAFC">
            <el-col>
              <div id='map' style='width:100%; height: 300px;'></div>

            </el-col>
          </el-row>
          <el-row :gutter="10" style="text-align:center;">
            <el-col :span="9">
              <LineChart></LineChart>
            </el-col>

            <el-col :span="9">
              <BarChart></BarChart>
            </el-col>
            <el-col :span="6">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
               Fuel
              </div>
                <div class="text item">
                  Today:164L
                </div>
                <div class="text item">
                  Idle:164L
                </div>
                <div class="text item">
                  Lifts:164L
                </div>
                <div class="text item">
                  Avg Weekly:164L
                </div>
              </el-card>



            </el-col>

          </el-row>

          <el-alert
            title="Information"
            type="info"
            :closable="false"
            style="margin-top:10px;"
            description="Some text"
            show-icon>
          </el-alert>
          <br>
      <el-row>
          <el-col :span="15">
            <el-table

              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="Date">
              </el-table-column>
              <el-table-column
                prop="name"
                label="Alarm"
               >
              </el-table-column>
              <el-table-column
                prop="address"
                label="AlarmType">
              </el-table-column>
              <el-table-column
                prop="address"
                label="Error">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>


        </el-card>






      </div>



    </div>
  </div>

</template>

<script>
  import Nav from "@/components/Nav.vue"
  import LineChart from '@/components/Line.js'
  import BarChart from '@/components/Bar.js'

  export default {
    mounted(){
      mapboxgl.accessToken = 'pk.eyJ1Ijoic21ibG9nIiwiYSI6ImNqMnZvOWxsbzAweHEzM21zaHR3NTZ4bzgifQ.WVI-_eI-OL5WRs-b5gRkiw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        zoom: 12,
        center: [-122.447303, 37.753574]
      });

      map.on('load', function () {

        map.addLayer({
          'id': 'population',
          'type': 'circle',
          'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
          },
          'source-layer': 'sf2010',
          'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
              'base': 1.75,
              'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using data-driven styles
            'circle-color': {
              property: 'ethnicity',
              type: 'categorical',
              stops: [
                ['White', '#fbb03b'],
                ['Black', '#223b53'],
                ['Hispanic', '#e55e5e'],
                ['Asian', '#3bb2d0'],
                ['Other', '#ccc']]
            }
          }
        });
      });
      },
  name: 'Detail',
  data () {
    return {
      loading:true,
      activeIndex:"/",
      trucks:[

      ]
    }
  },
  components:{
      NavBar:Nav,LineChart,BarChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.wrapper {
  width:1100px;
  margin: 0px auto;
  padding:50px;
  background: rgba(0,0,0,0.2);
  border-radius: 2px;
}


</style>
