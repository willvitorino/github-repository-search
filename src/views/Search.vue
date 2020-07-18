<template>
  <section id="search">
    <label for="searchInput"> <strong>Github</strong> <em>Search</em> </label>
    <div class="input-group">
      <input type="text" id="searchInput" />
      <button class="icon-search">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,300;1,400;1,700&display=swap');

  #search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > label {
      font-family: 'Roboto Mono', monospace;
      font-style: normal;
      color: black;

      font-size: 4rem;
      // line-height: 75px;

      > em {
        font-weight: 300;
      }
    }
  }

  #searchInput {
    min-width: 41vw;
  }
</style>
