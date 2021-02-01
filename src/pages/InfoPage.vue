<template>
    <div class="title_wall">
            <div class="title">ComInFo</div>
            <div class="sub-title">컴퓨터의 간단한 정보를 쉽게 알아보기</div>

        </div>
        
        <div class="solidD">
            <div class="solid"></div>
        </div>
        
        <div class="infoValues">

            <div class="one hoverable z-depth-1-half">
                <div class="info">Host Name</div>
                <div id="hostname_" class="value"></div>
            </div>

            <div class="one hoverable z-depth-1-half">
                <div class="info">Os Type</div>
                <div id="ostype_" class="value"></div>
            </div>

            <div class="one hoverable z-depth-1-half">
                <div class="info">Platform</div>
                <div id="platform_" class="value"></div>
            </div>

            <div class="one hoverable z-depth-1-half">
                <div class="info">CPU</div>
                <div id="cpu_" class="value"></div>
            </div>
            
            <div class="one hoverable z-depth-1-half">
                <div class="info">RAM</div>
                <div id="ram_" class="value"></div>
            </div>

            <div class="one hoverable z-depth-1-half">
                <div class="info">Up Time</div>
                <div id="uptime_" class="value"></div>
            </div>

            <div class="one hoverable z-depth-1-half">
                <div class="info">GPU</div>
                <div id="gpu_" class="value"></div>
            </div>
        </div>
        
        <div class="end">
            <img class="teamIf" src="../assets/if.png">
            <div class="textEnd">
                <div class="copyright">ⓒ 2020 Team IF.</div>
                <div class="teamMembers">Iro | Dia | Aroxu</div>
            </div>
            
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InfoPage'
})
</script>

<style>
body {
    background: rgb(248, 246, 246);
    margin: 0;
    padding: 0;
    
}

.title_wall {
    position: relative;
    width: 100%;
    height: 500px;
    /* background: #434C5E; */
    /* background: #D8DEE9; */
    margin-top: 0px;
    margin-bottom: 50px;
    z-index: 1;

}
/* 
.solidD {
} */

.solid {
    /* position: relative;
    left: 50%;
    transform: translate(50%); */
    position: relative;
    left: 50%; transform: translateX(-50%);

    background: rgb(182, 182, 182);
    width: 80%;
    height: 1px;
    margin-top: 40px;
    margin-bottom: 40px;

}

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
    top: 45%;
    text-align: center;
}

.sub-title {
    position: relative;
    color: black;
    font-size: 20px;
    /* text-align: center; */
    top: 45%;
    text-align: center;
}

.infoValues {
    display: flex;
    flex-wrap: wrap;
    margin-top: 200px;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    vertical-align: center;;
}

.info {
    font-size: 20px;
    font-weight: bolder;
    margin: 20px;
}

.value {
    font-size: 25px;
    font-weight: bold;
    margin: 20px;
}

.one {
    margin: 20px;
    /* border-radius: 20px; */
    /* background: #ECEFF4; */
    background: white;
    width: 400px;
    height: 200px;
    text-align: center;
    
}

.end {
    position: relative;
    margin-top: 200px;
    background: rgb(226, 226, 226);
    width: 100%;
    height: 150px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.teamIf {
    margin: 10px;
    width: auto; height: auto;
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