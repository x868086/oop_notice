<template>
  <div class="notice" :style="positionStyle"
  @mouseenter="clearTimer">
    <div class="content">{{content}}</div>
    <div class="close"
    @click="closeNow">{{closed}}×</div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
    }
  },
  props: {
    content: {
      type: String,
      default: 'content'
    },
    closed: {
      type: String,
      default: 'closed'
    }
  },
  methods: {
    closeNow () {
    },
    clearTimer () {}
  },
  computed: {
    positionStyle () {
      return {}
    }
  }
}
</script>

<style lang="scss">
  .notice {
    width:150px;
    height:30px;
    border-radius:5px;
    background-color:rgb(133, 13, 63);
    color:#fff;
    display: flex;
    padding: 5px;
    margin-bottom: 10px;
    align-items:center;
    justify-content: space-between;
    .close {
      cursor:pointer
    }
  }
</style>
