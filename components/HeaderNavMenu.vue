<template>
  <nav>
    <ul class="Menu">
      <li class="Menu__Item">
        <nuxt-link class="Menu__Item__Link" to="/">
          <!--{{ $store.state.lang.links.api }}-->
         Home
        </nuxt-link>
      </li>
      <li class="Menu__Item">
        <nuxt-link class="Menu__Item__Link" to="/login">
          <!--{{ $store.state.lang.links.guide }}-->
          Login
        </nuxt-link>
      </li>
      <!--<li class="Menu__Item">-->
        <!--<nuxt-link class="Menu__Item__Link" to="/api">-->
          <!--&lt;!&ndash;{{ $store.state.lang.links.api }}&ndash;&gt;-->
          <!--API-->
        <!--</nuxt-link>-->
      <!--</li>-->
      <!--<li class="Menu__Item">-->
        <!--<nuxt-link class="Menu__Item__Link" to="/examples">-->
          <!--&lt;!&ndash;{{ $store.state.lang.links.examples }}&ndash;&gt;-->
          <!--Examples-->
        <!--</nuxt-link>-->
      <!--</li>-->
      <!--<li class="Menu__Item">-->
        <!--<nuxt-link class="Menu__Item__Link" to="/faq">-->
          <!--&lt;!&ndash;{{ $store.state.lang.links.faq }}&ndash;&gt;-->
          <!--Fac-->
        <!--</nuxt-link>-->
      <!--</li>-->
      <!--<li class="Menu__Item">-->
        <!--<nuxt-header-nav-menu-dropdown :dropdownList="dropdownList"  />-->
      <!--</li>-->
    </ul>
  </nav>
</template>

<script>
import NuxtHeaderNavMenuDropdown from '../components/HeaderNavMenuDropdown.vue'

export default {
  components: {
    NuxtHeaderNavMenuDropdown
  },
  data() {
    return {
      dropdownList: [
        {
          // name: this.$store.state.lang.links.github,
          name: 'github',
          path: 'https://github.com/nuxt',
          blank: true
        },
        {
          name: 'twitter',
          path: 'https://twitter.com/nuxt_js',
          blank: true
        },
        {
          name: 'chat',
          path: 'https://discord.nuxtjs.org',
          blank: true
        },
        {
          name: 'vuejs',
          path: 'https://vuejs.org',
          blank: true
        },
        {
          name: 'vue_jobs',
          path: 'https://vuejobs.com/?ref=nuxtjs',
          blank: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Menu {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  @media (min-width: 991px) {
    flex: 1;
    flex-wrap: nowrap;
    padding-left: 15px;
  }
  &__Item {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dbdfe1;

    @media (min-width: 991px) {
      border-bottom: none;
    }
    &:last-child {
      border-bottom: none;
    }
    &__Link {
      height: 60px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      color: #35495e;
      font-size: 16px;
      text-decoration: none;
      letter-spacing: 0.5px;
      padding: 0px 30px;
      &:hover {
        color: #41b883;
      }
      @media (min-width: 991px) {
        height: 79px;
      }
    }
    .nuxt-link-active,
    .nuxt-link-active:hover {
      color: #41b883;
    }
  }
}
</style>
