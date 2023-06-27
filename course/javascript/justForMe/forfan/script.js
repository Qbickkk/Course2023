let url = 'https://jsonplaceholder.typicode.com/users';


fetch(url)
    .then((response) => response.json())
    .then(users =>{

        const div = document.createElement('div');
        document.body.appendChild(div);

        const ol = document.createElement('ol');
        ol.style.listStyleType = 'upper-roman';
        div.appendChild(ol);

        users.map(user => {
            console.log(user);

            const li = document.createElement('li');
            li.style.margin = `7px`
            ol.appendChild(li);
            li.innerHTML = `<b>id:</b> ${user.id}, <b>name:</b> ${user.name}`

            const btn = document.createElement('button');
            btn.style.marginLeft = `10px`
            btn.innerText = `Click me`
            li.appendChild(btn);
            
            btn.onclick = function (ev) {
                ev.preventDefault();
                location.href = `index2.html?userId=${user.id}`
            }

        })
    })