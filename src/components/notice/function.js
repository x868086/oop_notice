import ExtendsNotice from './extendsNotice.js'

let verticalOffsetTotal = 0
const domArr = []
class Notice {
  constructor (opts) {
    this.opts = opts
  }

  createDom () {
    const { ...rest } = this.opts
    const noticeInstance = new ExtendsNotice({
      propsData: rest
    })
    domArr.map(item => {
      verticalOffsetTotal += item.$el.offsetHeight + 20
    })

    noticeInstance.$data.verticalOffset = verticalOffsetTotal
    verticalOffsetTotal = 0

    noticeInstance.$on('closeNow', (instance) => {
      const removeHeight = instance.$el.offsetHeight
      const idx = domArr.indexOf(instance)

      domArr.map((item, index) => {
        if (index >= idx) {
          item.$data.verticalOffset = parseInt(item.$data.verticalOffset) - removeHeight - 20
        }
      })
      document.body.removeChild(instance.$el)
      domArr.splice(idx, 1)
      instance.$destroy()
    })

    noticeInstance.$on('autoClose', (instance) => {
      const removeHeight = instance.$el.offsetHeight
      const idx = domArr.indexOf(instance)
      domArr.map((item, index) => {
        item.$data.verticalOffset = parseInt(item.$data.verticalOffset) - removeHeight - 20
      })
      document.body.removeChild(instance.$el)
      domArr.splice(idx, 1)
      instance.$destroy()
    })

    // $mount()方法将虚拟dom创建为一个待挂载的Dom对象
    const vmDom = noticeInstance.$mount()
    // vmDom.$el 虚拟dom的挂载点

    document.body.appendChild(vmDom.$el)
    domArr.push(noticeInstance)
  }
}

export default Notice
