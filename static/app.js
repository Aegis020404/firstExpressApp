const App = {
    data: () => ({
        name: '',
        working: '',
        servers: []
    }),
    methods: {
        async remove(id) {
              await fetch(`/api/server:${id}`,{
                  method: "DELETE"
              })
              this.servers = this.servers.filter(s => id !== s.id)
        },

        async addServer() {
                console.log(this.working)
            const data = {
                name: this.name,
                status: this.working ? 'working' : 'pending'
            }
            const res = await fetch(`/api/server`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            this.name = ''
            this.working = ''
            const newServer = await res.json()
            this.servers.push(newServer)
        }
    },
    async mounted () {
        const res = await fetch('./api/server')
         console.log(res)
         this.servers = await res.json()
    }

}

Vue.createApp(App).mount('#app')