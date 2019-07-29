<template>
  <div class="App" :class="{'App--hidden': visible}">
    <Header />
    <nuxt />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import EventInfo from '../components/EventInfo.vue'
  export default {
    components:{
      Header,
      EventInfo
    },
    computed: {
      visible() {
        return this.$store.state.visibleHeader
      }
    },
    mounted(){
      // console.log('DEFAULT mounted')
      // if (!localStorage.getItem('token')) {
      //   return this.$router.push({path: '/'})
      // }
    },
    methods: {
      setStoreApp() {
        console.log('DEFAULT methods setStoreApp')
        if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
        if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
      }
    },
    head() {
      let canonical = `https://nuxtjs.org${this.$route.path}`
      if (this.$store.state.locale !== 'en') {
        canonical = `https://${this.$store.state.locale}.nuxtjs.org${this.$route.path}`
      }
      let link = [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'en', href: `https://nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'zh', href: `https://zh.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'ru', href: `https://ru.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'ja', href: `https://ja.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'ko', href: `https://ko.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'fr', href: `https://fr.nuxtjs.org${this.$route.path}` },
        { rel: 'alternate', hreflang: 'id', href: `https://id.nuxtjs.org${this.$route.path}` }
      ]
      link.forEach((l) => {
        if (l.href.slice(-1) !== '/') {
          l.href = l.href + '/'
        }
      })
      return {
        htmlAttrs: { lang: this.$store.state.locale },
        link
      }
    },
    watch: {
      $route: 'setStoreApp'
    }
  }
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
