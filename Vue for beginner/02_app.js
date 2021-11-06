const App = {
    data() {
        return {
            title: 'Список покупок',
            placeholderText: 'Введите продукт',
            inputValue: '',
            notes: ['Вода', 'Хлеб']
        };
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        doubleCount() {
            return this.notes.length * 2;
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        deleteNote(index) {
            this.notes.splice(index, 1);
        }
    }
};

// const app = Vue.createApp(App);
// app.mount('#app');
//          или
Vue.createApp(App).mount('#app');