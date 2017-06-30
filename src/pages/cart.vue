<template>
  <div class="container">
    <div id="app">
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-add" viewBox="0 0 32 32">
                    <title>add2</title>
                    <path class="path1"
                          d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                </symbol>
                <symbol id="icon-ok" viewBox="0 0 39 32">
                    <title>ok</title>
                    <path class="path1"
                          d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                    <title>edit</title>
                    <path class="path1"
                          d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 26 32">
                    <title>delete</title>
                    <path class="path1"
                          d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
                </symbol>
                <symbol id="icon-clock" viewBox="0 0 32 32">
                    <title>clock</title>
                    <path class="path1"
                          d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
                </symbol>
            </defs>
        </svg>
        <div class="container">
            <div class="cart">
                <div class="checkout-title">
                    <div class="line"></div>
                    <span class="text">购物车</span>
                    <div class="line"></div>
                </div>

                <!-- table -->
                <div class="item-list-wrap">
                    <div class="cart-item">
                        <div class="cart-item-head">
                            <ul>
                                <li>商品信息</li>
                                <li>商品金额</li>
                                <li>商品数量</li>
                                <li>总金额</li>
                                <li>编辑</li>
                            </ul>
                        </div>
                        <ul class="cart-item-list">
                            <li v-for="item in productList">
                                <div class="cart-tab-1">
                                    <div class="cart-item-check">
                                        <a href="javascript:void 0" class="item-check-btn"
                                           :class="{'check': item.checked}" @click="selectedProduct(item)">
                                            <svg class="icon icon-ok">
                                                <use xlink:href="#icon-ok"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="cart-item-pic">
                                        <img :src="item.productImage" alt="烟">
                                    </div>
                                    <div class="cart-item-title">
                                        <div class="item-name">{{ item.productName }}</div>
                                    </div>
                                    <div class="item-include">
                                        <dl>
                                            <dt>赠送:</dt>
                                            <dd v-for="part in item.parts" v-text="part.partsName"></dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="cart-tab-2">
                                    <div class="item-price">{{ item.productPrice | formatMoney}}</div>
                                </div>
                                <div class="cart-tab-3">
                                    <div class="item-quantity">
                                        <div class="select-self select-self-open">
                                            <div class="quantity">
                                                <a href="javascript:;" @click="changeMoney(item,-1)">-</a>
                                                <input type="text" :value="item.productQuantity" disabled>
                                                <a href="javascript:;" @click="changeMoney(item,1)">+</a>
                                            </div>
                                        </div>
                                        <div class="item-stock">有货</div>
                                    </div>
                                </div>
                                <div class="cart-tab-4">
                                    <div class="item-price-total">{{ item.productPrice*item.productQuantity |
                                        money('元')}}
                                    </div>
                                </div>
                                <div class="cart-tab-5">
                                    <div class="cart-item-operation">
                                        <a href="javascript:void 0" class="item-edit-btn" @click="delConfirm(item)">
                                            <svg class="icon icon-del">
                                                <use xlink:href="#icon-del"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- footer -->
                <div class="cart-foot-wrap">
                    <div class="cart-foot-l">
                        <div class="item-all-check">
                            <a href="javascript:void 0">
                                <label for="qx">
                    <span class="item-check-btn" :class="{'check':checkAllFlag}" @click="checkAll()">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                    </span>
                                </label>
                                <span v-show="!checkAllFlag" id="qx" @click="checkAll()">全选</span>
                            </a>
                        </div>
                        <div class="item-all-del">
                            <a href="javascript:void 0" class="item-del-btn middle" @click="checkAll()">
                                <span v-show="checkAllFlag">取消全选</span>
                            </a>
                            <a href="javascript:void 0" class="item-edit-btn middle" @click="delAll()">
                                            <svg class="icon icon-del" v-show="checkAllFlag">
                                                <use xlink:href="#icon-del"></use>
                                            </svg>
                            </a>
                        </div>
                    </div>
                    <div class="cart-foot-r">
                        <div class="item-total">
                            Total Price: <span class="total-price">{{totalMoney | money('元')}}</span>
                        </div>
                        <div class="next-btn-wrap">
                            <router-link :to="{path: '/address'}" class="btn btn--red" style="width: 200px">结账</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <transition name="alert">
        <div class="alert" v-if="alert">
          <div class="alert-content">
              <p class="alert-text">不能在减少了</p>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="md-modal modal-msg md-modal-transition" id="showModal" v-if="delFlag">
            <div class="md-modal-inner">
                <div class="md-top">
                    <button class="md-close" @click="delFlag = false">关闭</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <p id="cusLanInfo">{{this.info}}</p>
                    </div>
                    <div class="btn-wrap col-2">
                        <button class="btn btn--m" id="btnModalConfirm" @click="delProduct">Yes</button>
                        <button class="btn btn--m btn--red" id="btnModalCancel" @click="delFlag=false">No</button>
                    </div>
                </div>
            </div>
        </div>
      </transition>
        <div class="md-overlay" v-if="delFlag" @click="delFlag = false"></div>
    </div>
</div>
</template>

<script>

import axios from 'axios'
import Vue from 'vue'
Vue.filter('money',function ( value, type ) { //全局过滤器 好处就是所有的页面都可以使用这个过滤器
    return '￥'+value.toFixed(2)+type
});
export default {

    data() {
      return {
        totalMoney:0,
        productList:[],
        checkAllFlag: false,
        curProduct:'',
        delFlag:'',
        alert: false,
        info: '你确认删除此订单信息吗?'
      }  
    },
    filters:{ // 过滤器
       formatMoney:function ( value ) { // 局部过滤器
           return "￥"+value.toFixed(2);
       }
    },
    mounted() { // 页面加载完成后会调用此函数
        this.$nextTick(()=> { // 加个函数可以保证 this和vm是一样 都可以掉用
            this.cartView();
            console.log(this.productList)
        })
        
    },
    methods:{
        delAll(){
          this.info = '确定删除全部？';
          this.delFlag = true;
        },
        cartView() {
            axios.get('/data/data.json').then(res => { //作用域指向了外层 里面的this就是外面的this
                this.productList = res.data.data.result.list;
                // _this.productList = res.body.result.totalMoney;
            }); // 调用http方法
            
        },
        changeMoney:function ( product, way ) {
            if(way>0){
                product.productQuantity++;
            }else {
                product.productQuantity--;
                if(product.productQuantity<1) {
                    product.productQuantity=1;
                    this.alert = true;
                    setTimeout(()=>{
                      this.alert = false
                    },1500);
                }
            }
            this.checkedTotalPrice(); // 点击加减也执行计算总金额的方法
        },
        selectedProduct:function ( item  ) {
            if(!item.checked){
                Vue.set(item,'checked',true);  // 全局注册 
                // this.$set(item,'checked',true);//局部注册 加$
            }else {
                item.checked = !item.checked; // 有了之后 点击是false
            }
            this.checkedTotalPrice();
        },
        checkedTotalPrice:function () {
            this.totalMoney = 0;
            this.productList.forEach((item,index)=> {
                if(item.checked) {
                  this.totalMoney += item.productPrice*item.productQuantity;
                }
            })
        },
        checkAll() {
            this.checkAllFlag = !this.checkAllFlag;
            this.productList.forEach((item,index)=>  {
                if(typeof item.checked == 'undefined'){
                    this.$set(item,'checked',true); //局部定义
                }else {
                    item.checked = this.checkAllFlag;
                }
                
             })

        },
        delConfirm:function ( item ) {
            this.delFlag = true;
            this.curProduct = item;
        },
        delProduct:function () {
            // this.delProduct.$delete(this.curProduct); vue1.0的版本 现在不支持了
            let index = this.productList.indexOf( this.curProduct);
            if(index== -1){
              this.productList = '';
              this.delFlag = false;
              this.checkAllFlag = false;
            }
            this.productList.splice(index,1);
            this.delFlag = false;
            this.checkedTotalPrice();
        }

    }

}


</script>

<style scoped>

.alert {
  position: fixed;
  background: rgba(0,0,0,.6);
  padding: 5px 10px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-left: -60px;
  color: #fff;
  transform: scale(1.2);
  border-radius: 4px;
}
.alert-enter,.alert-leave-active{
  transform: scale(.9);
  transition: all 1s;
  opacity: 1;
}

.alert-enter-active,.alert-leave-active{
  transform: scale(.9);
  transition: all 1s;
  opacity:0;
}
.item-del-btn {
  margin-right: 10px;
}
.middle {
  display: inline-block;
  vertical-align:top;
}

.cart{
  max-width: 1280px;
  margin: 0 auto;
}
.checkout-title {
  display: flex;
  margin-bottom: 40px;
}
.line {
  flex: 1 ;
  position: relative;
  top: -10px;
  border-bottom: 1px solid #ccc;
}
.text {
  padding: 0 15px;
  font-weight: 600;
  font-size: 20px;
}
.cart-item {
  width: 100%;
  display: table;

}
.cart-item-head {
    display: table-header-group;
    width: 100%;
}
.cart-item-head ul {
    display: table-row;
    width: 100%;
}
.cart-item-head li {
    display: table-cell;
    height: 54px;
    line-height: 54px;
    background: #605F5F;
    color: #fff;
    font-size: 18px;
    text-align: center;
}
.cart-item-head li + li {
  padding: 0 10px;
  width: 12%;
}
.cart-item-list {
    display: table-row-group;
}
.cart-item-list > li {
    position: relative;
    display: table-row;
    padding: 36px 0;
}
.cart-item-list > li > div {
    position: relative;
    display: table-cell;
    text-align: center;
    vertical-align: top;
    border-bottom: 1px solid #e9e9e9;
}
.cart-item-list .cart-tab-1 {
    min-height: 72px;
    padding: 36px 0;
    text-align: left;
    border-left: 1px solid #e9e9e9;
}
.cart-item-list .cart-item-check {
    float: left;
    padding: 28px 0 28px 22px;
}
.item-check-btn {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}
.item-check-btn .icon-ok {
    display: none;
    width: 100%;
    height: 100%;
    fill: #fff;
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}
.item-check-btn.check {
    background: #EE7A23;
    border-color: #EE7A23;
}
.item-check-btn.check .icon-ok {
    display: inline-block;
}
.cart-item-list .cart-item-pic {
    float: left;
    width: 80px;
    height: 72px;
    margin-left: 22px;
    border: 1px solid #e9e9e9;
}
.cart-item-list .cart-item-title {
    min-height: 58px;
    padding: 0 20px 0 160px;
}
.cart-item-list .cart-item-title .item-name {
    margin: 2px 0 10px;
    line-height: 16px;
    color: #000;
}
.cart-item-list .item-include {
    position: relative;
    padding-left: 160px;
}
.cart-item-list .item-include dl {
    padding-right: 60px;
}
.cart-item-list .item-include dl dt {
    float: left;
    width: 65px;
}
.cart-item-list .item-include dl dd {
    margin-bottom: 13px;
    padding-left: 65px;
    color: #999;
}
.cart-item-list .cart-tab-2,
.cart-item-list .cart-tab-4 {
    padding-top: 64px;
}
.cart-item-list .cart-tab-3 {
    padding-top: 48px;
}
.select-self-open {
    border-radius: 3px 3px 0 0;
}
.select-self {
    position: relative;
    display: inline-block;
    cursor: pointer;
}
.cart-item-list .cart-tab-5 {
    padding-top: 62px;
    border-right: 1px solid #e9e9e9;
}
.item-edit-btn {
    display: inline-block;
    width: 16px;
    height: 20px;
}
.item-edit-btn .icon-del {
    width: 100%;
    height: 100%;
    fill: #999;
}
input[type="text"], textarea {
    padding: 5px;
    border: 1px solid #bbb;
    background: white;
    width: 30px;
    text-align: center;
    margin: 0 5px;
    box-sizing: border-box;
}
input, select, button {
    vertical-align: middle;
}
.cart-foot-wrap {
    height: 54px;
    line-height: 54px;
    margin-top: 18px;
}
.cart-foot-wrap .cart-foot-l {
    float: left;
    font-size: 16px;
    padding: 0 22px;
}
.cart-foot-wrap .item-all-check {
    float: left;
    color: #EE7A23;
}
.cart-foot-wrap .item-all-del {
    float: left;
    margin-top: 2px;
}
.cart-foot-wrap .item-all-check span {
    vertical-align: middle;
}
.cart-foot-wrap .item-all-check .item-check-btn {
    margin-right: 18px;
}
.cart-foot-wrap .cart-foot-r {
    float: right;
}
.cart-foot-wrap .item-total {
    float: left;
    margin-right: 31px;
    color: #605F5F;
    font-size: 18px;
}
.cart-foot-wrap .item-total .total-price {
    margin-left: 16px;
    color: #d1434a;
    font-family: "moderat", sans-serif;
}
.cart-foot-wrap .next-btn-wrap {
    float: right;
}
.cart-item-list .item-stock {
    margin-top: 5px;
    font-size: 12px;
    color: #999;
}
.btn {
    display: inline-block;
    height: 54px;
    line-height: 54px;
    padding: 0 1.2em;
    text-align: center;
    font-size: 14px;
    font-family: "moderat",sans-serif;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    border: 1px solid #d1434a;
    color: #d1434a;
    text-transform: uppercase;
    letter-spacing: .25em;
    white-space: nowrap;
}
.btn--red {
    background-color: #d1434a;
    border-color: #d1434a;
    color: #fff;
}


.md-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 535px;
    height: auto;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 201;
    background: #fff;
}
.fade-enter-active,.fade-leave-active {
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity: 1;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
.fade-enter,.fade-leave-active {
    background: #fff;
    -webkit-transform: translate(-50%,20%);
    -ms-transform: translate(-50%,20%);
    transform: translate(-50%,20%);
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.md-modal .md-modal-inner {
    padding: 60px 50px;
}
.md-modal .confirm-tips {
    min-height: 5.65em;
}
.md-modal .confirm-tips, .md-modal .alert-tips {
    font-size: 14px;
    font-weight: 200;
    text-align: center;
}
.md-modal .btn-wrap {
    margin-top: 20px;
    text-align: center;
    font-size: 0;
}
.md-modal .btn-wrap .btn {
    width: 45%;
    min-width: 80px;
    margin: 0 2.5%;
}
.md-modal .md-close {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 34px;
    height: 34px;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    text-indent: -8000px;
}
.md-modal .md-close:hover:before {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.md-modal .md-close:hover:before, .md-modal .md-close:hover:after {
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
}
.md-modal .md-close:before {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.md-modal .md-close:before, .md-modal .md-close:after {
    position: absolute;
    top: 16px;
    left: -4px;
    content: "";
    width: 44px;
    height: 3px;
    background: #605f5f;
    -webkit-transition: -webkit-transform .5s ease-out;
    transition: -webkit-transform .5s ease-out;
    transition: transform .5s ease-out;
    transition: transform .5s ease-out,-webkit-transform .5s ease-out;
}
.md-modal .md-close:hover:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.md-modal .md-close:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.md-show {
    visibility: visible;
}

.md-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 200;
}

.btn {
    display: inline-block;
    height: 54px;
    line-height: 54px;
    padding: 0 1.2em;
    text-align: center;
    font-size: 14px;
    font-family: "moderat",sans-serif;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    border: 1px solid #d1434a;
    color: #d1434a;
    text-transform: uppercase;
    letter-spacing: .25em;
    white-space: nowrap;
}
.btn--m {
    height: 45px;
    line-height: 45px;
}
.btn--s{

    height:30px;
    line-height:30px;
}
input, select, button {
    vertical-align: middle;
}

.btn--m {
    height: 45px;
    line-height: 45px;
}
.btn--red {
    background-color: #d1434a;
    border-color: #d1434a;
    color: #fff;
}
.btn:hover, .btn[href]:hover {
    background-color: #d1434a;
    color: #fff;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.btn--red:hover {
    background-color: #fff;
    color: #d1434a;
}
button {
    background: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: inherit;
    overflow: visible;
    vertical-align: inherit;
}
.md-form-item{
    margin:10px;
}
.md-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
}
.md-form-item__content {
    line-height: 36px;
    position: relative;
    font-size: 14px;
}
.md-input__inner {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #333;
    box-sizing: border-box;
    color: #1f2d3d;
    display: block;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.md-input__inner:focus{border-color:#20a0ff}
</style>