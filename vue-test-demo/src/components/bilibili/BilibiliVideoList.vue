<template>
    <div class="video-box">
        <ul class="video-list">
            <li 
            v-for="video in videoList"
            class="video"
            :key="video.id"
            >
            <div class="poster">
                <img :src="video.poster" alt="video.title">
                <div class="info">

                <div class="play">
                    <svg width="14" height="14" viewBox="0 0 1024 1024"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M684.8 483.2l-256-112c-22.4-9.6-44.8 6.4-44.8 28.8v224c0 22.4 22.4 38.4 44.8 28.8l256-112c25.6-9.6 25.6-48 0-57.6z"></path></svg>
                    <i>{{ video.play | addWord}}</i>
                </div>

                <div 
                    class="rank"
                    v-if="video.rank"
                >
                    <svg width="14" height="14" viewBox="0 0 1024 1024"><path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"></path><path d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z"></path></svg>
                    <i>{{ video.rank | addWord}}</i>
                </div>
                </div>
            </div>
            <div class="title">{{ video.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        videoList: {
            type: [Array],
            default: [],
        },
    },
    filters: { // 过滤器 添加万
      addWord (value) {
          if(!value) { return };
          if(value > 10000) {
            return ( value / 10000).toFixed(1) + '万';
          }
          return value;
      }
    },
}
</script>

<style scoped>
/* 视频区域 */
.video-box {
  padding: 110px 16px 0 16px;
}

.video-box .video-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.video-box .video-list .video{
  width: 48%;
  margin-bottom: 10px;
}
.video-box .video-list .video .poster{
  position: relative;
  height: 106px;
  border-radius: 6px;
  overflow: hidden;

}
.video-box .video-list .video .poster img{
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.video-box .video-list .video .poster .info{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  height: 20px;
  padding-top: 7px;
  padding-bottom: 3px;
  padding-left: 10px;
  font-size: 12px;
  background-image: linear-gradient(rgba(33, 33, 33, 0), rgba(33, 33, 33, .5));
}
.video-box .video-list .video .poster .info div{
  /* 相当于block inline-block */
  display: inline-flex; 
  align-items: center;
  margin-right: 10px;
}
.video-box .video-list .video .poster .info svg{
  margin-right: 3px;
  fill: #fff;
}

.video-box .video-list .video .title{
  margin: 5px 0;
  line-height: 20px;
  font-size: 13px;
  overflow: hidden; 
  display: -webkit-box; /* 设置盒子为伸缩盒 */
/* 设置伸缩盒内子元素的排列方式为vertical 垂直方向*/
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;/* 文本行数 */
  user-select: none;/* 文字不可选择 */
}
</style>