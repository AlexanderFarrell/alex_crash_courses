const jsonGet = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'error'
}

async function GetUnits(class_name) {
    return await (await fetch(`/courses/guide/data/classes/${class_name}`, jsonGet)).json();
}

async function GetLessons(unit_name) {
    return await (await fetch(`/courses/guide/data/units/${unit_name}`, jsonGet)).json();
}

async function AddItems(data_attr_name, source_f) {
    const elements = [...document.querySelectorAll(`[data-${data_attr_name}]`)];
    for (const element of elements) {
        const data_name = element.getAttribute('data-' + data_attr_name);

        let container = document.createElement('div');
        container.classList.add("Lessons")
        element.appendChild(container);
        let loadingElement = document.createElement('div');
        loadingElement.innerHTML = 'Loading units...';
        try {
            let items = await source_f(data_name);
            items.forEach(item => {
                // let itemContainer = document.createElement('div');
                let linkContainer = document.createElement('a');
                linkContainer.classList.add('Button');
                linkContainer.setAttribute('href', `/courses/guide/lessons/${item.title}`)
                linkContainer.innerHTML = `<h3>${item.title}</h3><div class="RegText">${item.description}</div>`;
                // itemContainer.appendChild(linkContainer);
                container.appendChild(linkContainer);
            })
        } catch (e) {
            console.error(e);
            container.innerHTML = 'Error loading items. Unable to connect to server.'
        }
        loadingElement.remove();
    }
}

AddItems('unit_name', GetLessons);