<template>
	<div id="app">
		<h1>Hello Vuex</h1>
		<p>{{ count }}</p>
		<p>{{$store.state.a.count}}</p>
		<p>
			<button @click="jiaplus">+plus</button>
			<button @click="jianplus"></button>
		</p>
		<p>
			<button @click="$store.commit('jia',10)"></button>
			<button @click="jian"></button>
		</p>
	</div>
</template>

<script type="text/javascript">
import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		name: 'app',
		data() {
			return {
				count: 0
			}
		},
		// computed: {
		// 	count() {
		// 		return this.$store.state.count+1
		// 	}
		// }
		computed:mapState([
          "count"
			]),
		count(){
			return this.$store.getters.count
		}
		...mapGetters() {
	      "count"
		}
		methods:mapMutations([
            'jia',
            'jian'
			])

		methods: {
			...mapMutations([
                 'jian',
                 'jia'
				])
			...mapAction([
                'jiaplus'
				])
			...mapAction({
				jiaplus: 'jiaplus'
			})
		}
	}

	actions: {
		actionA ({ commit }) {
			return new Promise((resolve,reject) => {
				setTimeout(() => {
					commit('someMutation')
					resolve()
				},1000)
			})
		}
	}
	store.dispatch('actionA').then(() => {

	})

	actions： {
		actionB ({
			dispatch,commit
		}) {
			return dispatch('actionA').then(() => {
				commit('someOtherMutation')
			}),
			async actionB ({dispatch,commit}) {
				await
			}
		}
	}
	actions: {
		async actionA ({commit}) {
			commit('gotData',await getData)
		}
	}

	const moduleA = {
		state: {},
		mutations: {},
		actions: {},
		getter: {}
	}

	cosnt moduleB = {
		state: {},
		mutations: {},
		actions: {}
	}

	const store = new Vuex.Store({
		modules: {
			a: moduleA,
			b: moduleB
		}
	})
	const store = new Vuex.Store({
		modules: {
			a: moduleA,
			b: moduleB
		}
	})

	store.state.a
	store.state.b

	const moduleA = {
		state: {count: 0},
		mutations: {
			increment (state) {
				state.count++
			}
		}
	}
	const moduleA = {
		state: {count: 0},
		mutations: {
			increment (state) {
				state.count++
			}
		}
	}
	getters: {
		doubleCount (state) {
			return state.count * 2
		}
	}

	const moduleA {
		state,
		mutations,
		getters,
		actions
	}
	export default new Vuex.Store ({
       moudles: {
       	a: moduleA
       }
	})
  export default new Vuex.Stroe ({
  	moudles: {
  		a: moduleA
  	}
  })
  export default new Vuex.Stroe ({
  	modules: {
  		a: moduleA
  	}
  })
</script>