<template>
  <section id="detail" class="container-fluid m-0">
    <div class="row border-bottom border-dark py-2 mb-3">
      <div class="col text-left">
        <span class="h3 custom-title pointer" @click="toHome" >
          <strong>Github</strong> <em>Search</em>
        </span>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col text-center d-flex flex-column justify-content-center align-items-center">
        <span class="h3"> {{ state.name }} </span>
        <b-avatar :src="state.avatar_url" size="10rem"></b-avatar>
      </div>
    </div>
    <div class="row my-2">
      <div class="col d-flex justify-content-around flex-wrap ">
        <button v-show="state[info.key]" v-for="info in infos" :key="info.key" type="button" class="bg-dark my-2">
          {{ info.label }} <span class="badge badge-light my-2"> {{ state[info.key] }} </span>
        </button>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12" v-for="repo in repos" :key="repo.id">
        <b-card tag="article" body-class="p-1" class="rounded-0 my-3 p-0" >
          <b-card-header ref="cardHeader" class="bg-dark text-light c-header" :style="style.header">
            {{ repo.name }}
          </b-card-header>
          <b-card-body ref="cardBody" class="text-center d-flex flex-column justify-content-between" :style="style.body" >
            <p v-if="repo.description"> {{ repo.description }} </p>
            <p v-else> Sem Descrição </p>
            <button @click="openRepo(repo)" >Ver Mais</button>
          </b-card-body>
          <b-card-footer class="d-flex justify-content-between" >
            <span>
              {{ repo.watchers }} x <b-icon icon="eye-fill" />
            </span>
            <span>
              {{ repo.watchers }} x <b-icon icon="shuffle" rotate="-90" />
            </span>
            <span>
              {{ repo.stargazers_count }}
              x
              <b-icon icon="star-fill" />
            </span>
          </b-card-footer>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      state: {},
      repos: [],
      infos: [
        {
          label: 'Organização',
          key: 'company'
        },
        {
          label: 'Localização',
          key: 'location'
        },
        {
          label: 'Seguidores',
          key: 'followers'
        },
        {
          label: 'Repositórios',
          key: 'public_repos'
        },
        {
          label: 'Estrelas',
          key: 'stargazers_count'
        }
      ],
      style: {
        header: {},
        body: {
          minHeight: '100px'
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'search' })
    },
    init () {
      this.$store.commit('setLoading', true)
      const { login } = this.$route.params
      this.$http.get(`users/${login}`).then(response => {
        this.state = { ...response.data, stargazers_count: 0 }
      }).finally(() => {
        this.$http.get(this.state.repos_url, { params: { sort: 'stargazers' } }).then(response => {
          this.repos = response.data
        }).finally(() => {
          this.state.stargazers_count = [0, ...this.repos].reduce((acc, cur) => {
            return acc + cur.stargazers_count
          })
          this.$store.commit('setLoading', false)
        })
      })
      this.$nextTick(() => {
        setTimeout(this.calcHeights, 2000)
      })
    },
    calcHeights () {
      // Height dos Bodies
      const headerHeight = Math.max(...this.$refs.cardHeader.map(el => el.clientHeight))
      // console.log(headerHeight)
      this.style.header.minHeight = `${headerHeight}px`

      // Height dos Bodies
      const bodyHeight = Math.max(...this.$refs.cardBody.map(el => el.clientHeight))
      this.style.body.minHeight = `${bodyHeight}px` || '100px'
    },
    openRepo (repo) {
      window.open(repo.html_url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  height: 100%;
  .c-header {
    // display: flex;
    // justify-content: center;
    // align-items: center;

    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
  }
  .custom-img {
    width: 20vw;
  }
}
</style>
