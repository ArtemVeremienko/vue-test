<template>
  <div class="info">
    <div class="container">
      <div class="info__image">
        <img src="../assets/images/cat.png" alt="">
      </div>
      <div class="title">Roobee Farm</div>
      <div class="balance">
        <div class="balance__inner">
          <div class="balance__item">

            <div class="balance__amount balance__amount--mb">
              0.000
            </div>
            <div class="balance__title balance__title--mb">Your Roobee Balance</div>
            <div class="balance__button">
              <button class="button button--blue button--small">Harvest</button>
            </div>
          </div>
          <div class="balance__item">
            <div class="balance__amount balance__amount--mb">
              0.000
            </div>
            <div class="balance__title balance__title--mb">Your Roobee Balance</div>
<!--            <div class="balance__button">-->
<!--              <button class="button button&#45;&#45;yellow button&#45;&#45;small">Approve</button>-->
<!--            </div>-->
            <div class="balance__buttons">
              <button class="button button--mr button--yellow button--small button--mb" @click="showModalTwo">Deposit</button>
              <button class="button button--grey button--small" >Withdraw</button>
            </div>
          </div>
        </div>
        <div class="balance__info">
          Pro Tip - ROOBEE-ETH SLP token pool yields 4.8x more token rewards per block
        </div>

      </div>
    </div>

    <DepositModal ref="modalTwo"/>
  </div>

</template>


<script>

import DepositModal from "@/components/DepositModal";

export default {
  name: "farming",
  components: {

    DepositModal
  },
  methods: {

    showModalTwo: function () {
      this.$refs.modalTwo.show = true
    }
  },
}
</script>

<style scoped>

</style>