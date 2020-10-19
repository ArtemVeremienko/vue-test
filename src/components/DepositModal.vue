<template>
  <transition name="modal-fade">
    <div class="modal-box " v-if="show" @click.self="closeModal">
      <div class="overlay" @click="closeModal"></div>
      <div class="modal">
        <button class="modal__close" @click="closeModal">
          <img src="../assets/images/close.svg" alt="">
        </button>
        <div class="modal__container">
          <div class="modal__title">Deposit</div>
          <div class="modal__inner">
            <div class="deposit">
              <div class="deposit__range">
                <div class="deposit__text">Available to Deposit:</div>
                <div class="deposit__text deposit__text--black">1 000</div>
              </div>
              <input type="text" placeholder="Placeholder" class="deposit__input">
              <div class="deposit__row">
                <div class="deposit__limit">
                  Set the limit
                  <div class="deposit__limit-icon">
                    <img src="../assets/images/arrow-limit.svg" alt="">
                  </div>
                </div>
                <div class="deposit__item">
                  <div class="deposit__icons">
                    <div class="deposit__icon">
                      <img src="../assets/images/r.png" alt="">
                    </div>
                    <div class="deposit__icon">
                      <img src="../assets/images/eph.png" alt="">
                    </div>
                  </div>
                  ROOBEE:WETH
                </div>
              </div>
              <div class="deposit__range">
                <div class="deposit__text">Weekly Rewards</div>
                <div class="deposit__text deposit__text--black">0 UNI / week</div>
              </div>
            </div>
          </div>
          <div class="modal__cancel">
            <button class="button button--yellow button--small" @click="closeModal">Deposit</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "DepositModal",
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>