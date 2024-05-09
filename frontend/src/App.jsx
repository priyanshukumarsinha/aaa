import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [products, error, loading ] = customReactQuery('/api/products');
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    (async () => {
      try {
        setError(false)
        setLoading(true);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal : controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Request Cancelled", error.message);
          return;
        }
        setError(true)
        setLoading(false);
      }
    })()

    // cleanup method
    return () => {
      controller.abort()
    }

  }, [search])

  // if (error) {
  //   return <h2>Something Went Wrong !!</h2>
  // }

  // if (loading) {
  //   return (
  //     <h2>Loading ...</h2>
  //   )
  // }

  return (
    <>
      <h1>API Handling in React</h1>
      <input type="text" placeholder='search' value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h2>Loading ...</h2>}
      {error && <h2>Something Went Wrong !!</h2>}
      <h2>Number of Products are : {products.length}</h2>
    </>
  )
}

export default App


// const customReactQuery = (urlPath) => {
//   return [products, error, loading]
// }