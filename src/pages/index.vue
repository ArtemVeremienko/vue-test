<template>
    <div>
      <div class="info">
        <div class="container">
          <div class="info__image">
             <img src="../assets/images/cat.png" alt="">
          </div>
          <div class="title">Roobee Farm</div>
          <div class="balance">
            <div class="balance__inner">
              <div class="balance__item">
                <div class="balance__title">Your Roobee Balance</div>
                <div class="balance__amount">
                  0.000
                </div>
                <div class="balance__field">
                  <span class="balance__field-name">
                    Reward per token
                  </span>
                  <span class="balance__field-value">
                    {{ yourBalance.toFixed(3) }} tokens
                  </span>
                </div>
              </div>
              <div class="balance__item">
                <div class="balance__title"> Total Roobee Supply</div>
                <div class="balance__amount">
                  0.000
                </div>
                <div class="balance__field">
                  <span class="balance__field-name">
                    New rewards per block
                  </span>
                  <span class="balance__field-value">
                    {{ totalBalance.toFixed(3) }} tokens
                  </span>
                </div>
              </div>
            </div>
            <div class="balance__info">
              <div class="balance__icon">!</div>
              <div class="balance__name">Pro Tip</div> -  ROOBEE-ETH SLP token pool yields 4.8x more token rewards per block
            </div>
            <div class="balance__button">
              <a href="#" class="button button--yellow button--small">Start Farming</a>
            </div>

          </div>
        </div>
      </div>

    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      yourBalance: 0.000,
      totalBalance: 0.000,
    }
  }
}
</script>

<style lang="scss">

</style>
