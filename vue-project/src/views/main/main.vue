<template>
  <div>
    <van-nav-bar class="navBar" title="旅游商城"/>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="0">
      <van-swipe-item>
        <div class="type-box">
          <van-row>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
          </van-row>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="type-box">
          <van-row>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
            <van-col span="6">
              <van-icon name="gift"/>
              <span>游艇</span>
            </van-col>
          </van-row>
        </div>
      </van-swipe-item>
    </van-swipe>
   <!-- <van-popup v-model="showList" position="bottom">-->
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    <!--</van-popup>-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" to="/hello" dot>分享</van-tabbar-item>
      <van-tabbar-item icon="tosend" info="5">攻略</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  const coupon = {
    available: 1,
    discount: 0,
    denominations: 150,
    origin_condition: 0,
    reason: '',
    value: 150,
    name: '优惠券名称',
    start_at: 1489104000,
    end_at: 1514592000
  };
  export default {
    name: 'Main',
    data() {
      return {
        active: 0,
        showList:'',
        chosenCoupon: -1,
        coupons: [coupon],
        disabledCoupons: [coupon],
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ]
      }
    },
    methods: {
      onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
      },
      onExchange(code) {
        this.coupons.push(coupon);
      }
    }
  }
</script>

<style>
  .navBar {
    color: #fff;
    background-color: #42b983;
  }

  .van-swipe-item img {
    width: 100%;
    max-height: 140px;
  }
  .type-box{
    padding-bottom: 10px;
  }
  .type-box .van-col {
    padding: 10px 0 0;
  }

  .type-box .van-icon {
    display: inline-block;
    padding: 8px;
    border-radius: 50%;
    color: #fff;
    font-size: 18px;
    background-color: rgb(91,200,255);
    /*background-color: rgba(64,204,255);*/
  }
  .type-box span {
    display: block;
  }
</style>
