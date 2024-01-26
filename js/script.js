//TODO invece di aprile la prima chat che trovo apro una schermata iniziale (come whatsapp web)

const {createApp} = Vue;

const {user,contacts} = data;

const app = createApp({
    data() {
        return{
            user,
            contacts,
            contact:{},
            newMessageText: '', //utilizzato quando viene scritto un nuovo messaggio
            searchContact: '', //per cercare un contantto con i carratteri all'interno di questa stringa
        }
    },

    computed:{
        //filter dell'array per trovare i contatti cercati nella search bar
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
            this.contact = this.filteredContact.find(contact => contact.id === id)
            return this.contact            
        },

        //creo un messaggio (oggetto) con tutte le caratterestiche 
        addMessage(messageStatus,messageText){
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: messageText,
                status: messageStatus
            }
            // push sull'arrey dei messaggi
            this.contact.messages.push(newMessage);
        },

        //funzione che utilizzio per stampare ogni volta il messaggio e una risposta predefinita ('ok')
        addMessages(){
            if(!this.newMessageText) return; //deve esserci un testo se no non invia nulla
            this.addMessage('sent',this.newMessageText);
            setTimeout(() =>{
                this.addMessage('received','ok')        
            },1000)
            this.newMessageText = '';
        },
    },

})

app.mount('#root');