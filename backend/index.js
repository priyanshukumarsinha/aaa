import express from 'express'
const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        { 
            id: 1, 
            name: "Shrimp", 
            price: 1.36, 
            image: "https://plus.unsplash.com/premium_photo-1688821128189-c4f2d10b33f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" },
        { 
            id: 2, 
            name: "Artichokes", 
            price: 0.35, 
            image: "https://images.unsplash.com/photo-1714891203404-b25f32706e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
        { 
            id: 3, 
            name: "Soup", 
            price: 2.79, 
            image: "https://images.unsplash.com/photo-1714837291207-4985c06c9a60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" },
        { 
            id: 4, 
            name: "Pepper", 
            price: 3.46, 
            image: "https://images.unsplash.com/photo-1715041347013-de5b8925a7a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" },
        { 
            id: 5, 
            name: "Cocktail", 
            price: 9.10, 
            image: "https://plus.unsplash.com/premium_photo-1714675739730-65a1203d6bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" },
    ]

    // http://localhost:3000/api/products?search=metal
    if(req.query.search){
        const filterProducts = products.filter((product) => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)

})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})