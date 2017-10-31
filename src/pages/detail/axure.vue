<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>Axure</h2>
      <p>
        Axure RP是一个专业的快速原型设计工具。Axure（发音：Ack-sure），代表美国Axure公司；RP则是Rapid Prototyping（快速原型）的缩写。
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
          一年
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
        Axure RP是一个专业的快速原型设计工具。Axure（发音：Ack-sure），代表美国Axure公司；RP则是Rapid Prototyping（快速原型）的缩写。
        Axure RP是美国Axure Software Solution公司旗舰产品，是一个专业的快速原型设计工具，让负责定义需求和规格、
        设计功能和界面的专家能够快速创建应用软件或Web网站的线框图、流程图、原型和规格说明文档。作为专业的原型设计工具，
        它能快速、高效的创建原型，同时支持多人协作设计和版本控制管理[1]  。
        Axure RP已被一些大公司采用。Axure RP的使用者主要包括商业分析师、信息架构师、可用性专家、产品经理、IT咨询师、
        用户体验设计师、交互设计师、界面设计师等，另外，架构师、程序开发工程师也在使用Axure。
        Axure迎来15周年，Axure RP 9已开始研发。[2]
      </p>
    </div>
  </div>
</template>

<script>
  import VCounter from '../../components/base/counter'
  import VMulChooser from '../../components/base/multiplyChooser'

  export default {
    components: {
      VCounter,
      VMulChooser
    },
    data() {
      return {
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
<style scoped>

</style>
