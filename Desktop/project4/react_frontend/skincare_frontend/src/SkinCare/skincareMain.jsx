import { useEffect, useState } from "react";
import ProductComponent from "./Product/productComponent";
import NewProductComponent from "./NewProduct/newProductComponent";


const SkincareContainer = () => {
    const [requestError, setRequestError] = useState("")
    const [products, setProducts] = useState([])
    const [newProductServerError, setNewProductServerError] = useState ("")
    const createNewProduct = async (newProduct) => {
        const apiResponse = await fetch("http://localhost:3001/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-type": "application/json"
            }
        })
        // Parse response from back-end
        const parsedResponse = await apiResponse.json()
        // If the response is success:
        console.log(parsedResponse)
        if(parsedResponse.success){
            // Add the new item to the state
            setProducts([parsedResponse.data, ...products])
        } else {
            setNewProductServerError(parsedResponse.data)
        }
    }
    const deleteProduct = async (idToDelete) => {
        try{
            const apiResponse = await fetch(`http://localhost:3001/products/${idToDelete}`, {
            method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.success){
                const newProducts = products.filter(product => product._id !== idToDelete)
                setProducts(newProducts)
            }else{
            }
        } catch (err){
            console.log(err)
            setRequestError(err.message)
            // TODO: handle front-end error, not sure what the would be 
        }
        console.log("delete product ID " + idToDelete)
    }
    const getProducts = async () => {
        try{
            const products = await fetch("http://localhost:3001/products")
            const parsedProducts = await products.json();
            setProducts(parsedProducts.data)
        } catch (err){
            console.log(err)
        }
    }
    const updateProduct = async (idToUpdate, productToUpdate) => {

        const apiResponse = await fetch(`http://localhost:3001/product/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(productToUpdate),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await apiResponse.json();
        if(parsedResponse.success){
            const newProducts = products.map(products => products._id === idToUpdate ? productToUpdate : products)
            setProducts(newProducts)
        } else {
            setRequestError(parsedResponse.data) 
        }
    }
    useEffect(()=>{
        getProducts()
     }, [])
    return (
        <div>
            
            <NewProductComponent
            newProductServerError={newProductServerError}
            createNewProduct={createNewProduct}
            ></NewProductComponent>
            {products.reverse().map((product)=>{
                return <ProductComponent
                key={product._id}
                product={product}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
                ></ProductComponent>
            })}
        </div>
    )
}
export default SkincareContainer;