<template>
  <section id="detail" class="container-fluid m-0">
    <div class="row border-bottom border-dark py-2 mb-3">
      <div class="col text-left">
        <span class="h3 custom-title pointer" @click="toHome" >
          <strong>Github</strong> <em>Search</em>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate () {
    const { login } = this.$route.params
    if (!login) {
      this.$router.go(-1)
    }
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'search' })
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  height: 100%;
}
</style>
