<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>EditPlus</h2>
      <p>
        EditPlus是一款由韩国 Sangil Kim （ES-Computing）出品的小巧但是功能强大的可处理文本、HTML和程序语言的Windows编辑器，
        你甚至可以通过设置用户工具将其作为C,Java,Php等等语言的一个简单的IDE。
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter :max="100" :min="20"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="tradeList"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser :selections="versionList"></v-mul-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          500 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>
        EditPlus是一款由韩国 Sangil Kim （ES-Computing）出品的小巧但是功能强大的可处理文本、HTML和程序语言的Windows编辑器，
        你甚至可以通过设置用户工具将其作为C,Java,Php等等语言的一个简单的IDE。
      </p>
    </div>
  </div>
</template>

<script>
  import VSelection from '../../components/base/selection'
  import VCounter from '../../components/base/counter'
  import VMulChooser from '../../components/base/multiplyChooser'

  export default {
    components: {
      VSelection,
      VCounter,
      VMulChooser
    },
    data() {
      return {
        tradeList: [
          {
            label: '安装版',
            value: 0
          },
          {
            label: '开发版',
            value: 1
          },
          {
            label: '测试版',
            value: 2
          }
        ],
        versionList: [
          {
            label: '中文版',
            value: 0
          },
          {
            label: '英文版',
            value: 1
          },
          {
            label: '日文版',
            value: 2
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
