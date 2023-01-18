import { useState, useEffect } from 'react'
import './App.css'

import axios from 'axios'

import Nav from './components/Nav'
import ProductList from './sections/ProductList'
import Analysis from './sections/Analysis'
import Loader from './components/Loader'

const App = () => {
  const [products, setProducts] = useState([])
  const [categories, setCateogories] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('')

  const fetchData = async () => {
    setLoading(true)
    const p = await axios.get('https://fakestoreapi.com/products')
    setProducts(p.data)
    const c = await axios.get('https://fakestoreapi.com/products/categories')
    setCateogories(c.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="App">
      <Nav
        categories={['All', ...categories]}
        category={category}
        setCategory={setCategory}
      />
      <ProductList products={products} category={category} />
      <Analysis products={products} categories={categories} />
    </div>
  )
}

export default App
