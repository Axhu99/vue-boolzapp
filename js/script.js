
const {createApp} = Vue;

const {user,contacts} = data;

const app = createApp({
    data() {
        return{
            user,
            contacts,
            contact:{},
            newMessageText: '',
        }
    },
    methods:{
        //restituicsce una scriga con dentro l' AVATAR delle elemento dato 
        getAvatarUrl({avatar}){
            return `img/avatar${avatar}.jpg`
        },

        //metodo che mi restituisce il contatto con quel ID
        getContactById(id){
            this.contact = this.contacts.find(contact => contact.id === id)
            return this.contact            
        },

        addMessage(messageStatus,messageText){
            const newMessage = {
                id: 1,
                date: '10/01/2020 15:30:55',
                text: messageText,
                status: messageStatus
            }
            this.contact.messages.push(newMessage);
        },

        addMessages(){
            this.addMessage('sent',this.newMessageText);
            setTimeout(() =>{
                this.addMessage('received','ok')        
            },1000)
            this.newMessageText = '';
        },
    },

})

app.mount('#root');