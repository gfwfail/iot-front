<template>
  <div>
    <nav-bar></nav-bar>

    <div class="wrapper">

      <el-row :gutter="20">
        <el-col :span="8" v-for="i in 20">
          <vehicle-box></vehicle-box>
        </el-col>
      </el-row>


    </div>
  </div>

</template>

<script>
  import Nav from "@/components/Nav.vue"
  import VehicleBox from "@/components/VehicleBox.vue"

  export default {
  name: 'home',
  data () {
    return {
      activeIndex:"/",
      trucks:[

      ]
    }
  },
  components:{
      NavBar:Nav,
    VehicleBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  width:1100px;
  margin: 10px auto;
  padding:50px;
  background: #eee;
  border-radius: 10px;
}
</style>
