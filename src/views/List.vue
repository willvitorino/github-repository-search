<template>
  <section id="list" class="container-fluid">
    <div class="row border-bottom border-dark py-2 mb-3">
      <div class="col text-left">
        <span class="h3 custom-title" @click="toHome" >
          <strong>Github</strong> <em>Search</em>
        </span>
      </div>
      <div class="col">
        <div class="input-group d-flex flex-row justify-content-end">
          <input
            type="text"
            class="custom-input"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="search-addon"
            @keypress.enter="search"
            v-model="query"
          />
          <div class="input-group-append custom-append" @click="search">
            <span class="input-group-text bg-dark text-light" id="search-addon">
              <b-icon icon="search" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row d-flex justify-content-around">
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 text-center" style="min-width: 20%" v-for="user in result.items" :key="user.id">
        <b-card tag="article" body-class="p-1" class="rounded-0 pointer my-3 p-0" @click="toDetail(user.login)" >
          <b-card-header class="bg-dark text-light rounded-0">
            <span class="flex-nowrap font-weight-bold">{{ user.login }}</span>
          </b-card-header>
          <b-card-img class="rounded-0 border border-dark card-img" :src="user.avatar_url" :alt="user.login" ></b-card-img>
          <b-card-footer class="bg-dark text-white big-border pointer" >
            Ver mais
          </b-card-footer>
        </b-card>
      </div>
    </div>
    <!-- Paginação -->
    <div class="d-flex flex-row justify-content-end mb-3" >
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group>
          <button class="btn btn-sm bg-dark text-white rounded-0" @click="setPage(1)" >
            <b-icon icon="chevron-double-left" />
          </button>
          <button class="btn btn-sm bg-dark text-white rounded-0" @click="setPage(params.page - 1)" >
            <b-icon icon="chevron-compact-left" />
          </button>
        </b-button-group>
        <b-button-group class="mx-1">
          <button class="btn btn-sm btn-outline-dark rounded-0" > {{ params.page }} de {{ pages }} </button>
        </b-button-group>
        <b-button-group>
          <button class="btn btn-sm bg-dark text-white rounded-0" @click="setPage(params.page + 1)" >
            <b-icon icon="chevron-compact-right" />
          </button>
          <button class="btn btn-sm bg-dark text-white rounded-0" @click="setPage(pages)" >
            <b-icon icon="chevron-double-right" />
          </button>
        </b-button-group>
      </b-button-toolbar>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      result: {
        total_count: 0,
        incomplete_results: false,
        items: []
      },
      params: {
        page: 1
      }
    }
  },
  computed: {
    pages () {
      const max = parseInt(this.result.total_count / 30)
      return max <= 100 ? max : 100
    }
  },
  created () {
    const { query } = this.$route.params
    this.query = query
  },
  mounted () {
    this.params.page = 1
    this.init()
  },
  methods: {
    init () {
      const { page } = this.params
      this.$store.commit('setLoading', true)
      this.$http.get('/search/users', {
        params: {
          q: this.query,
          sort: 'repositories',
          order: 'desc',
          per_page: 30,
          page
        }
      }).then(res => {
        this.result = res.data
      }).finally(() => {
        this.$store.commit('setLoading', false)
        window.scrollTo(window.scrollX, 0)
      })
    },
    search () {
      this.$router.push(`/list/${this.query}`)
      this.init()
    },
    toHome () {
      this.$router.push({ name: 'search' })
    },
    toDetail (username) {
      this.$router.push(`/detail/${username}`)
    },
    setPage (page) {
      if (page < 1) {
        return
      }
      this.$store.commit('setLoading', true)
      this.params.page = page
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
  #list {
    overflow-x: hidden !important;
  }
  .custom-title {
    cursor: pointer;
  }
  .card {
    border: solid black 2px;
  }
  .custom-append {
    cursor: pointer;
    border-radius: 0px;
    border: solid black thin;

    > .input-group-text {
      background-color: black;
      color: white;
      border-radius: 0px;
      border: solid black thin;;

      &:hover {
        border: solid white thin;
      }
    }

  }
  .custom-input:focus {
    box-shadow: none;
    border-color: black;
    font-weight: bold;
  }
  .bg-dark {
    background-color: black !important;
  }
  .big-border {
    border-width: thick;
  }
  .card-img {
    min-height: 200px;
  }
</style>
