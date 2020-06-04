<template>
<div>
  <div class="barrage-box">

      <div class="barrage-video">
        <video src="#" controls></video>
        <barrage-base :barrageArr="barrageArr" :barrageShow="barrageShow"/>

      </div>

      <div class="barrage-input">
        <input type="text" placeholder="请输入" class="barrageText" v-model="message">
        <button @click="handleClick">提交</button>
      </div>
  </div>
</div>
</template>

<script>
import BarrageBase from "../components/BarrageBase"
export default {
  components: {
    BarrageBase,
  },
  data() {
    return {
      message: "",
      barrageArr: [
        {
          msg: '张三',
          speed: 7000,
          color: 'black',
          id: 1,
          delay: 100,
          top: 50,
        },
        {
          msg: '李四',
          speed: 4000,
          color: 'red',
          id: 2,
          delay: 4000,
          top: 100
        },

      ],
      barrageShow: false,
    }
  },
  methods: {
    handleClick() {
      let barrageText = document.getElementsByClassName('barrageText')[0].value;
      this.barrageContent = barrageText;
      if(barrageText === '') {return};
      let newMessage = {
        msg: barrageText,
        speed: Math.floor(Math.random() * 5000 + 2500),
        color: `rgba( ${parseInt(Math.random() * 244)},${parseInt(Math.random() * 244)},${parseInt(Math.random() * 244)},${parseInt(Math.random() * 244)})`,
        id: Math.random() * 100,
        top: Math.floor(Math.random()*250+50), // 50 - 250
      }
      this.barrageArr.push(newMessage);
      this.barrageShow = true;
    }
    
  }
}
</script>


<style scoped>
  .barrage-box {
    position: relative;
    height: 650px;
    border: 1px solid red;
  }

  .barrage-box .barrage-video {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    /* overflow: hidden; */
  }

  .barrage-box .barrage-video video {
    width: 800px;
    height: 600px;
  }

  .barrage-box .barrage-input {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
  }
  .barrage-box .barrage-input input {
    width: 200px;
    height: 30px;

  }
  .barrage-box .barrage-input button {
    width: 50px;
    height: 34px;
  }

</style>