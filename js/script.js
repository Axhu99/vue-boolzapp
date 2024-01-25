
const {createApp} = Vue;

const {user,contacts} = data;

const app = createApp({
    data() {
        return{
            user,
            contacts,
            contact: {},
        }
    },
    methods:{
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },
        getContactById(id){

            this.contact = this.contacts.find(contact => contact.id === id)

            return this.contact
            
        }
    },

})

app.mount('#root');