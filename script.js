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
            tasks:[
                {
                    text: 'Fare la spesa',
                    done: true
                }
            ]
        }
    }
});

// todo DA AGGIUNGERE ID ROOT

app.mount('#root');