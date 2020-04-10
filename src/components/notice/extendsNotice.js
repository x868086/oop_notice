import Vue from 'vue'
import notice from './notice.vue'

// funciton文件中对虚拟dom $data.xxx的属性赋值操作时， vue子类扩展选项中必须先声明该data属性，计算属性同理
const extendsOpts = {
  extends: notice,
  data () {
    return {
      verticalOffset: 0,
      timer: null
    }
  },
  computed: {
    positionStyle () {
      return {
        position: 'fixed',
        right: '10px',
        bottom: `${this.$data.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  methods: {
    closeNow () {
      this.$emit('closeNow', this)
    },
    createTimer () {
      this.timer = setTimeout(() => {
        this.$emit('autoClose', this)
      }, 3000)
    },
    clearTimer () {
      clearTimeout(this.timer)
      console.log(this.timer)
    }
  }
}

// 创建扩展notice组件的选项的子类 extendsNotice
const extendsNotice = Vue.extend(extendsOpts)
export default extendsNotice
