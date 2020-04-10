import Vue from 'vue'
// import noticeComponent from './notice.vue'
import Notice from './function'

export default () => {
  // Vue.component(noticeComponent.name, noticeComponent)
  Vue.prototype.$noticeConstructor = (opt) => {
    return new Notice(opt)
  }
}
