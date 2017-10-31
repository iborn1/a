<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>Eclipse</h2>
      <p>
        Eclipse 是一个开放源代码的、基于Java的可扩展开发平台。就其本身而言，它只是一个框架和一组服务，用于通过插件组件构建开发环境。
        幸运的是，Eclipse 附带了一个标准的插件集，包括Java开发工具（Java Development Kit，JDK）。
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="buyTypes"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="districts"></v-selection>
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
        Eclipse 是一个开放源代码的、基于Java的可扩展开发平台。就其本身而言，它只是一个框架和一组服务，用于通过插件组件构建开发环境。
        幸运的是，Eclipse 附带了一个标准的插件集，包括Java开发工具（Java Development Kit，JDK）。
      </p>
      </table>
    </div>
  </div>
</template>

<script>
  import VSelection from '../../components/base/selection'
  import VChooser from '../../components/base/chooser'

  export default {
    components: {
      VChooser,
      VSelection
    },
    data() {
      return {
        buyTypes: [
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
        ],
        districts: [
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
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
