<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>WebStorm</h2>
      <p>
        WebStorm 是jetbrains公司旗下一款JavaScript 开发工具。目前已经被广大中国JS开发者誉为“Web前端开发神器”、
        “最强大的HTML5编辑器”、“最智能的JavaScript IDE”等。与IntelliJ IDEA同源，继承了IntelliJ IDEA强大的JS部分的功能。
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <v-chooser
            :selections="periodList"
            @on-change="onParamChange('period', $event)"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser
            :selections="versionList"
            @on-change="onParamChange('versions', $event)"></v-mul-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{ price }} 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" @click="showPayDialog">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>
        WebStorm 是jetbrains公司旗下一款JavaScript 开发工具。目前已经被广大中国JS开发者誉为“Web前端开发神器”、“最强大的HTML5编辑器”、
        “最智能的JavaScript IDE”等。与IntelliJ IDEA同源，继承了IntelliJ IDEA强大的JS部分的功能。
      </p>

      <h3>基本功能</h3>
      <ul>
        <li>基于DOM，特定浏览器完成</li>
        <li>编码导航和用法查询</li>
        <li>支持ECMAScript</li>
        <li>支持CoffeeScript</li>
        <li>支持结点</li>
      </ul>

      <h3>优势功能</h3>
      <ul>
        <li>支持不同浏览器的提示，还包括所有用户自定义的函数</li>
        <li>代码不仅可以格式化，而且所有规则都可以自己来定义</li>
        <li>大家经常在js代码中编写html代码，一般来说十分痛苦，不过有了智能提示，就爽多了。而且html里面还能有js提示</li>
        <li>可以快速找到代码中的错误或者需要优化的地方，并给出修改意见，快速修复</li>
        <li>支持代码调试，界面和IDEA相似，非常方便</li>
      </ul>
    </div>
    <!--支付弹窗-->
    <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyNum }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ period.label }}</td>
          <td>
            <span v-for="item in versions">{{ item.label }}</span>
          </td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <bank-chooser @on-change="onChangeBanks"></bank-chooser>
      <div class="button buy-dialog-btn" @click="confirmBuy">
        确认购买
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
      支付失败！
    </my-dialog>
    <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId"
                 @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>

<script>
  import VSelection from '../../components/base/selection'
  import VCounter from '../../components/base/counter'
  import VChooser from '../../components/base/chooser'
  import VMulChooser from '../../components/base/multiplyChooser'
  import Dialog from '../../components/base/dialog'
  import BankChooser from '../../components/bankChooser'
  import CheckOrder from '../../components/checkOrder'
  import _ from 'lodash'

  export default {
    components: {
      VSelection,
      VCounter,
      VChooser,
      VMulChooser,
      MyDialog: Dialog,
      BankChooser,
      CheckOrder
    },
    data() {
      return {
        buyNum: 0,
        buyType: {},
        versions: [],
        period: {},
        price: 0,
//        传给multiplyChooser多选组件的数据
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
        ],
//        传给chooser单选组件的数据
        periodList: [
          {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '二年',
            value: 2
          }
        ],
//        传给selection下拉选择组件的数据
        buyTypes: [
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
        isShowPayDialog: false,
        bankId: null,
        orderId: null,
        isShowCheckOrder: false,
        isShowErrDialog: false
      }
    },
    methods: {
//      获取chooser单选组件传来的数据
      onParamChange(attr, val) {
        this[attr] = val
        this.getPrice()
      },
//      axios请求价格
      getPrice() {
        let buyVersionsArray = _.map(this.versions, (item) => {
          return item.value
        })
        let reqParams = {
          buyNumber: this.buyNum,
          buyType: this.buyType.value,
          period: this.period.value,
          version: buyVersionsArray.join(',')
        }
        this.$ajax({
          method: "post",
          url: "/api/getPrice",
          data: reqParams
        }).then((res) => {
          this.price = res.data.amount
        }).catch((err) => {
          console.log(err)
        })
      },
      showPayDialog() {
//        显示支付弹窗
        this.isShowPayDialog = true
      },
      hidePayDialog() {
//        关闭支付弹窗
        this.isShowPayDialog = false
      },
      hideErrDialog() {
        this.isShowErrDialog = false
      },
      hideCheckOrder() {
        this.isShowCheckOrder = false
      },
//      接收bankChooser银行组件传来的数据
      onChangeBanks(bankObj) {
        this.bankId = bankObj.id
      },
//      确认购买
      confirmBuy() {
        let buyVersionsArray = _.map(this.versions, (item) => {
          return item.value
        })
        let reqParams = {
          buyNumber: this.buyNum,
          buyType: this.buyType.value,
          period: this.period.value,
          version: buyVersionsArray.join(','),
          bankId: this.bankId
        }
        this.$ajax({
          method: "post",
          url: "/api/createOrder",
          data: reqParams
        }).then((res) => {
          this.orderId = res.data.orderId
          this.isShowCheckOrder = true
          this.isShowPayDialog = false
        }).catch((err) => {
          this.isShowBuyDialog = false
          this.isShowErrDialog = true
        })
      }
    },
//    组件渲染完执行
    mounted() {
      this.buyNum = 1
      this.buyType = this.buyTypes[0]
      this.versions = [this.versionList[0]]
      this.period = this.periodList[0]
      this.getPrice()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
  }

  .buy-dialog-btn {
    margin-top: 20px;
  }

  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }

  .buy-dialog-table td,
  .buy-dialog-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }

  .buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
  }
</style>
