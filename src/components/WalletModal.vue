<template>
  <transition name="modal-fade">
    <div class="modal-box " v-if="show" @click.self="closeModal">
      <div class="overlay" @click="closeModal"></div>
      <div class="modal">
        <button class="modal__close" @click="closeModal">
          <img src="../assets/images/close.svg" alt="">
        </button>
        <div class="modal__container">
          <div class="modal__title">Select a wallet provider</div>
          <div class="modal__inner">
            <div class="wallet-item modal__item">
              <div class="wallet-item__icon">
                <img src="../assets/images/fox.png" alt="">
              </div>
              <div class="wallet-item__title">Metamask</div>
              <div class="wallet-item__button">
                <button class="button button--yellow button--small ">Connect</button>
              </div>

            </div>
            <div class="wallet-item">
              <div class="wallet-item__icon">
                <img src="../assets/images/connect.svg" alt="">
              </div>
              <div class="wallet-item__title">WalletConnect</div>
              <div class="wallet-item__button">
                <button class="button button--yellow button--small ">Connect</button>
              </div>

            </div>
          </div>
          <div class="modal__cancel">
            <button class="button button--grey button--small" @click="closeModal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WalletModal",
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