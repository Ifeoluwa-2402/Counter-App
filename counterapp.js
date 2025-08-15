let count = 0;
        function increment() {
            count+= 1;
            document.getElementById('count-display').innerText = count;
            };
        function decrement() {
            count--;
            document.getElementById('count-display').innerText = count;
        };
        function reset() {
            count = 0;
            document.getElementById('count-display').innerText = count;
            document.getElementById('save-el').textContent =  "Previous entries: ";
        };


        let welcomeIf = document.getElementById('welcome-if');
        let name = "Ifeoluwa";
        let greeting = "Welcome to the counter app, ";
        welcomeIf.innerText = greeting + name;
        welcomeIf.innerText += "👋";



        let saveEl = document.getElementById('save-el');
        function save() {
            let countStr = count + " - ";
            saveEl.textContent += countStr;
            count = 0;
            document.getElementById('count-display').textContent = 0;
        }