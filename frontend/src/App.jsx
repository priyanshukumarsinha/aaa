import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false)
        setLoading(true);
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data)
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false);
      }
    })()
  }, [])

  if (error) {
    return <h2>Something Went Wrong !!</h2>
  }

  if (loading) {
    return (

      <h2>Loading ...</h2>

    )
  }

  return (
    <>
      <h1>API Handling in React</h1>
      <h2>Number of Products are : {products.length}</h2>
    </>
  )
}

export default App
