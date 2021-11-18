// creating a element with div for tag and search box
const container1 = document.createElement('div')
container1.className = 'container'


const heading = document.createElement('h1')
heading.innerHTML = 'Search your product here !'
container1.appendChild(heading)
document.body.appendChild(container1)


const container2 = document.createElement('div')
container2.className = 'container'

const product_type = document.createElement('input')
const search = document.createElement('button')
search.innerHTML = 'SEARCH HERE'
container2.appendChild(product_type)
container2.appendChild(search)
document.body.appendChild(container2)
const container3 = document.createElement('div')
container3.className = 'container3'



// creating a function to get value from backend 

async function getProducts() {

    let type = product_type.value
    
    // reset
    container3.innerHTML = ''

    product_type.value = ''


   //   fetching the product from api
    const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)

    const data = await response.json()


    console.log(data)

    appendData(data)

}
//creating a function to print from backend to front end
function appendData(data) {


    data.forEach(item => {

        const smallbox = document.createElement('div')

        smallbox.className = 'small-container'

        const images = document.createElement('img')
        const names = document.createElement('h2')
        const brands = document.createElement('h3')
        const prices = document.createElement('h3')
        const product_link = document.createElement('a')
        const description = document.createElement('p')




        images.src = item.image_link
        names.innerHTML = item.name
        brands.innerHTML = `Brand : ${item.brand}`

        prices.innerHTML = `Price : $${item.price}`
        // link for product
        product_link.href = item.product_link
        product_link.innerHTML = 'Check the Product'
        description.innerHTML = item.description



        smallbox.appendChild(images)
        smallbox.appendChild(names)
        smallbox.appendChild(brands)
        smallbox.appendChild(prices)

        smallbox.appendChild(product_link)
        smallbox.appendChild(description)




        container3.appendChild(smallbox)

    });

    document.body.appendChild(container3)



}



search.addEventListener('click', getProducts)
