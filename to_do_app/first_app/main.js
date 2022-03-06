function add() {
            const todo = document.getElementById('todo');
            // 1. Get value text
            let newText = document.getElementById('new_text');

            // add new list to ul  
            if (newText.value == "") {

            } else {
                let newTodo = `<li class="list-item">
                <span class="listValue" onclick="toggle(this)">
                `
                    + newText.value +
                    `
                </span>
                
                <span class="delList" onclick="delList(this)">
                    [X]
                </span>
            </li>`;

                todo.insertAdjacentHTML('afterbegin', newTodo);
            }
            // remove field
            newText.value = "";
        }

        function toggle(el) {
            el.classList.toggle('done');
        }


        function delList(el) {
            el.parentElement.remove();
        }