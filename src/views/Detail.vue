<template>
  <section id="detail" class="form-control m-0">
    {{ $route.params.id }}
  </section>
</template>

<script>
export default {
  beforeCreate () {
    const { id } = this.$router.params
    if (!id) {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
