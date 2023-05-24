import Loading from './src/main.vue'

// eslint-disable-next-line no-unused-vars
Loading.install = function (Vue, options) {
  Vue.component(Loading.name, Loading)
}

export default Loading
