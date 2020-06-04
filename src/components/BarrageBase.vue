<template>
    <div class="barrage">
        <transition-group 
            tag="ul"
            @before-enter="beforeEnter"
            @enter="enter"
            >
            <template v-if="barrageShow">
                <li
                    class="box"
                    v-for="(item, index) in barrageArr"
                    :key="item.id"
                    :data-index="index"
                >{{ item.msg }}</li>
            </template>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: {
        barrageArr: {
            type: Array,
            default: ''
        },
        barrageShow: {
            type: Boolean,
            default: false,
        }
    },
     data() {
    return {
      count: 0,
    };
  },
  methods: {
    beforeEnter(el) {

        const dataIndex= el.getAttribute('data-index'); // 索引
        const barrageArr = this.barrageArr[dataIndex]; // 对应数据

        el.style.left = "100%";
        el.style.top = barrageArr.top + 'px';
        el.style.color = barrageArr.color;
    },
    enter(el, done) {

        const dataIndex= el.getAttribute('data-index'); // 索引
        const barrageArr = this.barrageArr[dataIndex]; // 对应数据
        
        setTimeout(() => {
            Velocity(el, { left: `-${el.offsetWidth}px` }, { duration: barrageArr.speed, easing: 'linear', complete: ()=>{
                el.parentNode.removeChild(el);
            } });
        }, barrageArr.delay);

    }
  },
}
</script>

<style scoped>
.barrage {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}
button {
  margin: 30px;
}
.box {
  position: absolute;
  left: 0;
  width: 100px;
  height: 100px;
  color: red;
  font-size: 30px;
  font-weight: bold;
}
</style>