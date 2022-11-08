const {createApp} = Vue;
const app = createApp({
    data(){
        return {
            mailList: [],
        }
    },
    methods: {
        generateMail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then ((answer)=>{
                this.mailList.push(answer.data.response);
            });
            };
            this.mailList = [];
        },
    },
});
app.mount('#app');