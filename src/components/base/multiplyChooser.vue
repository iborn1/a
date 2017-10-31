<!--多选组件-->
<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item, index) in selections"
        @click="toggleSelection(index)"
        :title="item.label"
        :class="{active: checkActive(index)}"
      >{{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'

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
//        保存选中的项的index
        nowIndexes: [0]
      }
    },
    methods: {
//      多选
      toggleSelection(index) {
        if (this.nowIndexes.indexOf(index) === -1) {
          this.nowIndexes.push(index)
        }
        else {
          this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
            return idx !== index
          })
        }
//        nowObjArray保存选中的项
        let nowObjArray = _.map(this.nowIndexes, (idx) => {
          return this.selections[idx]
        })
//        触发on-change事件，发送选中的项
        this.$emit('on-change', nowObjArray)
      },
//      返回选中的项显示class
      checkActive(index) {
        return this.nowIndexes.indexOf(index) !== -1
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
