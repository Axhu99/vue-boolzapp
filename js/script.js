
const {createApp} = Vue;

const {user,contacts} = data;

const app = createApp({
    data() {
        return{
            user,
            contacts,
            contact:{},
            newMessageText: '',
            searchContact: '',
        }
    },

    computed:{
        filteredContact(){
            const searchTerm = this.searchContact.toLowerCase()
            const filteredContact = this.contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm));
            return filteredContact;
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

        //creo un messaggio (oggetto) con tutte le caratterestiche 
        addMessage(messageStatus,messageText){
            const newMessage = {
                id: 1,
                date: '10/01/2020 15:30:55',
                text: messageText,
                status: messageStatus
            }
            // push sull'arrey dei messaggi
            this.contact.messages.push(newMessage);
        },

        //funzione che utilizzio per stampare ogni volta il messaggio e una risposta predefinita ('ok')
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