<template>
  <section id="search" class="container-flex d-flex flex-column align-items-center justify-content-center" >
    <div class="row">
      <div class="col">
        <span class="h1 custom-title"> <strong>Github</strong> <em>Search</em> </span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group">
          <input
            type="text"
            class="form-control custom-input"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="search-addon"
            @keypress.enter="search"
            v-model="query"
          />
          <div class="input-group-append custom-append" @click="search">
            <span class="input-group-text" id="search-addon">
              <b-icon icon="search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  beforeCreate () {
    this.$store.commit('setLoading', true)
  },
  mounted () {
    this.$store.commit('setLoading', false)
  },
  methods: {
    search () {
      this.$store.commit('toggleLoading')
      this.$router.push(`../list/${this.query}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  $sm-break: 540px;
  $md-break: 720px;
  $xl-break: 1440px;

  #search {
    width: 100%;
    height: 100%;
  }

  .custom-title {
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    color: black;
  }

  .custom-append {
    border-radius: 0px;
    border: solid black thin;
    cursor: pointer;

    > .input-group-text {
      background-color: black;
      color: white;
      border-radius: 0px;
      border: solid black thin;;

      &:hover {
        // border-top: solid white 2px;
        border: solid white thin;
      }
    }

  }

  .custom-input {

    width: 40vw;
    &:focus {
      box-shadow: none;
      border-color: black;
      font-weight: bold;
    }
  }

  @media (max-width: $md-break) {
    .custom-input {
      width: 80vw;
    }
  }

  @media (min-width: $xl-break) {
    .custom-input {
      width: 30vw;
    }
  }
</style>
