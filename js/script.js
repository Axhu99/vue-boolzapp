
const {createApp} = Vue;

const app = createApp({
    data() {
        return{...data}
    },
    methods:{
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        }
    }
})

app.mount('#root');