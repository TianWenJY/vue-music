<template>
  <transition name="slide"> 
  <div class="singer-detail"></div>
  </transition> 
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from '../../common/js/song'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
        'singer'
      ])
  },
  created() {
    this.__getDetail()
  },
  methods: {
    __getDetail() {
      if(!this.singer.id) {
        this.$router.push('/singer')
        return 
      }
     getSingerDetail(this.singer.id).then((res) => {
      console.log(res)
       if(res.code === ERR_OK) {
        console.log(res.data.list)
        this.songs = this._normalizeSongs(res.data.list)
        console.log(this.songs)
       }
     })
    },
    _normalizeSongs(list) {
      alert(1)
      let ret = []
      list.forEach(() => {
        let {musicData} = item
        if(musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>
<!-- 路由其实就是一个层 -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  
  .singer-detail 
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
    
   .slide-enter-active, .slide-leave-active
     transition: all 1s
  .slide-enter, .slide-leave-to
     transform:translate3d(100%,0,0)
</style>