class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.done = false;
    }

    describe() {
        return `${this.title} - ${this.done ? 'Done' : 'Not Done'}`;
    }
}
function loadFromServer() {
    const data = [
        { title: 'Task 1', description: 'Description 1' },
        { title: 'Task 2', description: 'Description 2' },
        { title: 'Task 3', description: 'Description 3' }
    ];
    return data.map(item => new Task(item.title, item.description));
}


    
