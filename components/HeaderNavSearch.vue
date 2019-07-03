<template>
  <div class="Search">
    <input class="Search__Input"
           type="text" name="search"
           id="algolia"
           :placeholder="$store.state.lang.text" />
  </div>
</template>

<script>

export default {
  mounted() {
    console.log('mounted')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.Search {
  width: 100%;
  height: 100%;
  position: relative;
  &__Input {
    width: 100%;
    display: block;
    border: none;
    font-weight: 400;
    height: 100%;
    color: #35495e;
    font-size: 16px;
    padding: 0 15px;
    letter-spacing: 0.5px;
    background-color: #fff;
    @media (min-width: 991px) {
      padding: 0 30px;
      border-left: 1px solid #dbdfe1;
      border-right: 1px solid #dbdfe1;
      &:focus,
      &:visited,
      &:active {
        border-left: 1px solid #dbdfe1;
        border-right: 1px solid #dbdfe1;
      }
    }
  }
}
</style>
