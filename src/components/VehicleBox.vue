<template>
<div style="margin-bottom: 20px;">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;background: #FF4949;color:#fff;padding:8px;border-radius: 5px;">Vehicle ID:1</span>
      <el-button style="float: right;" type="primary">Detail</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>

</div>

</template>

<script>
  export default {
    name: 'vehiclebox',
    data () {
      return {

      }
    },
    components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }



</style>
