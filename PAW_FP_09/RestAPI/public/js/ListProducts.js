function render() {
    const listElement = document.querySelector('.my-list')
    listElement.innerHTML = 'loading...'
    fetch('/api/products')
        .then((result) => result.json())
        .then((result) => {

            const children = result.map((product) => {
                if (product.name != undefined) {
                    return `<div>${product.name}</div>`
                } else {
                    console.log('undefined')
                }
            }).join('')
            listElement.innerHTML = children
        })
}

render()