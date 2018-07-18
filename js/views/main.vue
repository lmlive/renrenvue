<template>
  <main
    class="site-wrapper"
    :class="{ 'site-sidebar--fold': sidebarFold }"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar />
      <main-sidebar />
      <div class="site-content__wrapper" :style="{ 'min-height': documentClientHeight + 'px' }">
        <main-content />
		 
      </div>
	   
    </template>
  </main>
</template>

<script>
	define(['vue','v!components/icon-svg/index','v!views/main-content','v!views/main-navbar','v!views/main-sidebar'],function(Vue){
 
		return Vue.component('l-main',{
			template:template,
				data () {
					return {
						loading: true
					}
				},
				computed: {
					documentClientHeight: {
						get () { return this.$store.state.common.documentClientHeight },
						set (val) { this.$store.commit('common/updateDocumentClientHeight', val) }
					},
					sidebarFold: {
						get () { return this.$store.state.common.sidebarFold }
					},
					userId: {
						get () { return this.$store.state.user.id },
						set (val) { this.$store.commit('user/updateId', val) }
					},
					userName: {
						get () { return this.$store.state.user.name },
						set (val) { this.$store.commit('user/updateName', val) }
					}
				},
				created () {
					console.log('==========created')
					//this.getUserInfo()
				},
				mounted () {
					console.log('==========mounted')
				 	this.resetDocumentClientHeight()
					this.$data.loading=false
				},
				methods: {
					// 重置窗口可视高度
					resetDocumentClientHeight () {
						this.documentClientHeight = document.documentElement['clientHeight']
						window.onresize = () => {
							this.documentClientHeight = document.documentElement['clientHeight']
						}
					},
					// 获取当前管理员信息
					getUserInfo () {
						console.log('----------getUserInfo')
						this.$http({
							url: this.$http.adornUrl('/sys/user/info'),
							method: 'get',
							params: this.$http.adornParams()
						}).then(({data}) => {
							if (data && data.code === 0) {
								this.loading = false
								this.userId = data.user.userId
								this.userName = data.user.username
							}
						})
					}
				}
			
		})
	})
  
</script>
