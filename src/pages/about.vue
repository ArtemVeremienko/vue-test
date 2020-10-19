<template>
  <div class="info info--pt">
    <div class="container">
      <div class="title">Farming</div>
      <div class="info__block">
        <div class="info__about">
          <div class="info__about-text">The idea is simple, we give Roobee to liquidity providers of Roobee/ETH pool.
          </div>
          <div class="info__about-text">Roobee Farm allow liquidity providers to add their tokens to liquidity pools and
            earn ROOBEE.
          </div>
          <div class="info__about-text">1,000,000 ROOBEE will be allocated per pool to LPs proportional to liquidity,
            which roughly
            <br> translates to: <br>
            83,333 ROOBEE per pool per day <br>
            13.5 UNI per pool per block (14s blocktime)
          </div>
        </div>
        <div class="info__security">
          <div class="title title--small">Security</div>
          <div class="info__about-text">
            We care about the safety of our users. Our contracts are based on Uniswap and we have a lot of our own ideas and improvements. We have done a full audit of our code. We removed all possible bugs in Uniswap contracts!
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

</style>