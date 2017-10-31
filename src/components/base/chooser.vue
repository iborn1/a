<!--单选组件-->
<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item, index) in selections"
        @click="chosenSelection(index)"
        :title="item.label"
        :class="{active:index === nowIndex}"
      >{{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
//    接收父级数据
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data() {
      return {
//        保存选择的项的index
        nowIndex: 0
      }
    },
    methods: {
//      单选
      chosenSelection(index) {
        this.nowIndex = index
//        触发on-change事件，发送选择的项
        this.$emit('on-change', this.selections[index])
      }
    }
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
