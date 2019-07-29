<template>
  <div class="category">
    <nuxt-affix :list="list" category="guide" />
    <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
      <welcome />
    </div>
    <div class="category__footer">
      <!--<nuxt-footer/>-->
    </div>
  </div>
</template>

<script>

import NuxtAffix from '~/components/Affix.vue'
import Welcome from '../partials/home/welcome'
export default {
  components: {
    NuxtAffix,
    Welcome
  },
  computed: {
    visible() { return this.$store.state.visibleAffix },
    list() {
      return [
              {
                'title': 'title 1',
                'links': [
                  {
                    'to': '/personne',
                    'name': 'link name 1',
                    'contents': [
                      {
                        'to': 'content to 1',
                        'name': 'content name 1'
                      }
                    ]
                  },
                  {
                    'to': 'link to 11',
                    'name': 'link name 11',
                    'contents': [
                      {
                        'to': 'content to 11',
                        'name': 'content name 11'
                      }
                    ]
                  }
                ]
              },
        {
          'title': 'title 2',
          'links': [
            {
              'to': 'link to 2',
              'name': 'link name 2',
              'contents': [
                {
                  'to': 'content to 2',
                  'name': 'content name 2'
                }
              ]
            },
            {
              'to': 'link to 22',
              'name': 'link name 22',
              'contents': [
                {
                  'to': 'content to 22',
                  'name': 'content name 22'
                }
              ]
            }
          ]
        }
      ]
    }
  },
}
</script>

<style>

</style>
