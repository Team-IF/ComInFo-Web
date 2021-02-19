<template>

<!--  <div class="title_wall">-->
<!--    <img class="bgImg" src="../assets/img/bg2.png" >-->
<!--    <div class="title">ComInFo</div>-->
<!--    <div class="sub-title">컴퓨터의 간단한 정보를 쉽게 알아보기</div>-->
<!--  </div>-->

  <div class="Header">
    <div class="Header-item">
      <a href="/" class="Header-link f4 d-flex flex-items-center">
       <img class="LogoImg" src="../assets/logo.png">
       <span>ComInFo</span>
      </a>
    </div>
    <a href="https://teamif.io/" class="Header-item teamLink" target="_blank" style="text-decoration:none; color: #b6b6b6;">
      Team
    </a>
    <a href="https://github.com/Team-IF/ComInFo-Web" class="Header-item githubLink" target="_blank" style="text-decoration:none; color: #cecece;">
      About
    </a>
  </div>

  <div class="solidD">
    <div class="solid"></div>
  </div>

  <div class="infoValues">
    <InfoCard :content="hwinfo.hostname" name="Host Name"/>
    <InfoCard :content="hwinfo.os" name="Operating System"/>
    <InfoCard :content="hwinfo.platform" name="Platform"/>
    <InfoCard :content="hwinfo.cpu" name="CPU"/>
    <InfoCard :content="hwinfo.ram" name="RAM"/>
    <InfoCard :content="hwinfo.gpu" name="GPU"/>
    <InfoCard :content="hwinfo.uptime" name="UpTime"/>
  </div>

  <div class="end">
    <div class="endText mainEnd" style="color: white;">Team IF © 2021</div>
    <div class="linkEnd">
    <a class="endText" href="https://github.com/Team-IF" target="_blank" style="color: white; text-decoration:none;">Github</a>
    <div style="color: white;">&nbsp;`&nbsp;</div>
    <a class="endText" href="https://twitter.com/Team_IF_" target="_blank" style="color: white; text-decoration:none;">Twitter</a>
    </div>
  </div>

</template>

<script lang="ts">
  import {defineComponent, onMounted, reactive} from 'vue'
  import InfoCard from '../components/InfoCard.vue'
  import axios from "axios";

  export default defineComponent({
    name: 'InfoPage',
    components: {
      InfoCard
    },
    setup() {
      onMounted(async () => {
        try {
          const response = (await axios.get("http://localhost:18382")).data
          hwinfo.hostname = response.hostname
          hwinfo.os = response.type
          hwinfo.platform = response.platform
          hwinfo.cpu = response.cpu
          hwinfo.ram = Math.ceil(parseInt(response.ram) / 1073741824) + "GB"
          hwinfo.gpu = response.gpu
          hwinfo.uptime = String(response.uptime)

          setInterval(() => hwinfo.uptime = String(response.uptime += 1), 1000)

        } catch (error) {
          console.error(error);
        }
      })
      const hwinfo = reactive({
        hostname: '',
        os: '',
        platform: '',
        cpu: '',
        ram: '',
        uptime: '',
        gpu: '',
      })
      return {
        hwinfo
      }
    },
    computed: {
      uptime() {
        return this.hwinfo
      }
    }
  })
</script>

<style>
  body {
    background: rgb(241, 241, 241);
    margin: 0;
    padding: 0;

  }

  .LogoImg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .Header {
    margin-top: -60px;
  }

  /*.bgImg {*/
  /*  position: absolute;*/
  /*  background-image: url("./img/bg2.png");*/
  /*  width: auto;*/
  /*  height: auto;*/
  /*  z-index: 1;*/
  /*}*/

  /*.bgImg {*/
  /*  position: absolute;*/
  /*  display: block; margin: 0px auto;*/
  /*  width: 100%;*/
  /*  margin-top: -60px;*/
  /*  z-index: 1;*/
  /*}*/


  /*.title_wall {*/
  /*  position: relative;*/
  /*  width: 100%;*/
  /*  height: 300px;*/
  /*  !* background: #434C5E; *!*/
  /*  !* background: #D8DEE9; *!*/
  /*  !*margin-bottom: 50px;*!*/
  /*  z-index: 2;*/
  /*  !*background-image: url("../public/img/background.png");*!*/

  /*}*/

  /*
  .solidD {
  } */

  /*.solid {*/
  /*  !* position: relative;*/
  /*  left: 50%;*/
  /*  transform: translate(50%); *!*/
  /*  position: relative;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%);*/

  /*  background: rgb(182, 182, 182);*/
  /*  width: 80%;*/
  /*  height: 1px;*/
  /*  margin-top: 40px;*/
  /*  margin-bottom: 40px;*/
  /*  z-index: 2;*/
  /*}*/

  /* .darkMode {
      position: absolute;
      top: 1%;
      left: 0.5%;
  } */

  .title {
    position: relative;
    color: black;
    font-size: 60px;
    /* text-align: center; */
    top: 25%;
    text-align: center;
    z-index: 2;
  }

  .sub-title {
    position: relative;
    color: black;
    font-size: 20px;
    /* text-align: center; */
    top: 25%;
    text-align: center;
    z-index: 2;
  }

  .infoValues {
    display: flex;
    flex-wrap: wrap;
    margin-top: 200px;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    vertical-align: center;
    z-index: 2;
  }


  .end {
    position: relative;
    margin-top: 50px;
    background: #212124;
    width: 100%;
    height: 105px;
    display: flex;
     justify-content: center;
    align-items: center;
  }

  .mainEnd {
    margin-right: 30px;
  }

  .linkEnd {
    display: flex;
  }

  .teamIf {
    margin: 10px;
    width: auto;
    height: auto;
    max-width: 130px;
    max-height: 140px;
  }

  .textEnd {
    font-size: 30px;

  }

  .copyright {
    font-weight: bold;
  }

  .teamMembers {
    font-weight: bolder;
  }

</style>
