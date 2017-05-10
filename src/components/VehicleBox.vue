<template>
<div style="margin:0;margin-top: 20px;padding:0px;" class="vehicle__box">
  <el-card>
    <div slot="header" class="clearfix" style="position:relative">
      <div style="position:absolute;left:0px;top:44px;text-align: center;width:100%;">
          <span style="background: #FFFFFF;color:#8492A6;border:solid 1px #8492A6;border-radius:4px;padding:2px 10px;font-size:9px;font-weight:700;">This week：10L/h</span>

      </div>

      <span style="line-height: 36px;font-weight:200;font-size:14px;background: #1D8CE0;color:#fff;padding:8px;border-radius: 5px;"> XJSU</span>
      <el-button style="float: right;" type="primary">Detail</el-button>
    </div>
        <el-row :gutter="20">
          <el-col :span="6">
         <small style="color:#99A9BF">Last week</small>
         <h3>10</h3>
          </el-col>
                    <el-col :span="6">
                        <small style="color:#99A9BF">Total</small>
         <h3>3,120</h3>
                    </el-col>
        <el-col :span="12">
            <small style="color:#99A9BF">Some text</small>
         <h2>3,120</h2>
        
          
            
        </el-col>
        
        </el-row>
        
 <el-row :gutter="20">
          <el-col :span="6">
         <small style="color:#99A9BF">This week</small>
         <h3>101</h3>
          </el-col>
                    <el-col :span="6">
                        <small style="color:#99A9BF">Total</small>
         <h3>3,120</h3>
                    </el-col>
                    <el-col :span="12">
                    <div style="position:absolute;bottom:20px;">
                       <small>  Next Service</small>
             <el-progress :stroke-width="10" type="line" status="success" :show-text="false" :percentage="25"></el-progress>
                    </div>
                    </el-col>
 </el-row>
 
        
        <br><br>
<el-row>
  <el-col :span="13"> &nbsp;</el-col>
  <el-col :span="11"><el-button-group>
  <el-button size="small" type="info" icon="view" >Activity</el-button>
  <el-button size="small" type="info" icon="information" @click="dialogTableVisible = true">GPS</el-button>
</el-button-group></el-col>
</el-row>

  </el-card>
<div style="margin:0px;padding:0;background: #fff;overflow: hidden">
<svg viewBox="0 0 500 120" preserveAspectRatio="none" style="opacity:0.4;margin:-10px 0px;padding:0px;">
  
  <polyline
     fill="#58B7FF"
     stroke="#1D8CE0"
     stroke-width="3"
     stroke-linejoin="round"
     stroke-linecap="round"
     points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
      460,100
      480,80
      500,120
     "
   />
   </svg>
   
   </div>
 
 
 <el-dialog title="Activity" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Time" width="150"></el-table-column>
    <el-table-column property="name" label="Location" width="200"></el-table-column>
    <el-table-column property="address" label="Direction"></el-table-column>
  </el-table>
</el-dialog>

 
 </div>


</template>

<script>

  export default {
    name: 'vehiclebox',
    data () {
      return {

      
        dialogTableVisible:false

      }
    },
    components:{
       
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.vehicle__box{
  transition:all 1s ease;
   &:hover {
    box-shadow: 0px 0px 20px #20A0FF !important;
    cursor:pointer;
  }
}
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
.el-card{
  border-radius: 0 !important;
  box-shadow: none !important;
  border:none !important;
 
}
.el-card__header{
  background: #F9FAFC;
  border-bottom:none !important;
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
