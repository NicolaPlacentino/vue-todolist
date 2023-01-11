/*Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, 
che quindi viene aggiunto alla lista dei todo esistenti. */

const app = Vue.createApp({
    data(){
        return{
            newTask: {text:'', done:false},
            tasks:[
                {
                    text: 'Fare la spesa',
                    done: false
                },{
                    text: 'Controllare le email',
                    done: false
                },{
                    text: 'Dare da mangiare al cane',
                    done: true
                },{
                    text: 'Buttare la spazzatura',
                    done: true
                },{
                    text: 'Dare da bere alle piante',
                    done: false
                },
            ]
        }
    },
    methods:{
        deleteTask(i){
            this.tasks.splice(i, 1)
        },
        toggleDone(i){
            if(this.tasks[i].done === true){
                this.tasks[i].done = false
            } else {
                this.tasks[i].done = true
            }
        },
        addNewTask(){
            if(this.newTask.text){
                this.tasks.push(this.newTask)
                this.newTask = {text:'', done:false}
            }
        },
        deleteAll(){
            this.tasks = []
        }
    }
});

app.mount('#root');