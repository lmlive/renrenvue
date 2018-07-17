requirejs.config({
    basePath: 'lib',
    paths: {
        'vue': "lib/vue",
        "ELEMENT": "lib/elementjs",
        "v": "lib/requirejs-vue",
        "VueRouter": "lib/vue-router",
        "axios": "lib/axios.min",
        "mock": "lib/axios-mock-adapter.min",
        'httputil': "lib/httputil",
        "validate": 'utils/validate',
        'request': 'utils/httpRequest',
		"routeInfo":'router/index',
		"loader":'lib/loader',
		'merge':'lib/merge',
		'vuex':'lib/vuex',
		'validate':'utils/validate',
		//'vue-cookie':'lib/vue-cookie'
		 
    },
	shim: {
			'VueRouter': {exports: "VueRouter"}

	}

})

require(['vue', 'ELEMENT', 'store/index','routeInfo','utils/httpRequest'],
    function (Vue, elementui, store,routeInfo,http,cookie) {
        Vue.use(elementui)

	    Vue.prototype.$http=http
        new Vue({
            router: routeInfo,
			store,
            el: '#root',

        })

    })
