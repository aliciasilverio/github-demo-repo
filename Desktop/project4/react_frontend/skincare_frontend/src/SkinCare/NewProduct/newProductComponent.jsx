import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap"

const NewProductComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const [newProduct, setNewProduct] = useState({
        productName: "",
        image: "",
        brand: "",
        price: "",
        benefits: "" 

    })
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})

    const toggleShowing = () => {
        setShowing(!showing)
    }
    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value 
        })
    }
    const submitNewProduct = (e)=>{
        e.preventDefault()
        let validSubmission = true;

        if(newProduct.benefits.length < 1){
            setIsValidState({
                valid: false,
                message: "But what benefits is it?"
            })
            validSubmission = false;
        }if(newProduct.price < 1){
            setIsValidState({
                valid: false,
                message: "IT'S FREE?! I don't believe you."
            })
            validSubmission = false;
        }if(newProduct.brand.length < 1){
            setIsValidState({
                valid: false,
                message: "Restaurant needs a name"
            })
            validSubmission = false;
        }if(newProduct.productName.length < 1){
            setIsValidState({
                valid: false,
                message: "What's the name of the project?"
            })
            validSubmission = false;
        }
        if(validSubmission){
            props.createNewProduct(newProduct)
            setNewProduct({
                productName: "",
                image: "",
                brand: "",
                price: "",
                benefits: "" 
            })
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
        }
    }
    return(
        <>
        {
            showing 
            ?
            
            <div id="new-product-form">
                <form onSubmit={submitNewProduct}>
                    {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                    { props.newProductServerError ? <p className="form-error">{props.newProductServerError}</p> : null}
                
                    <Form.Control onChange={handleInputChange} className="w-50" type="text" name="productName" placeholder="Product Name" value={newProduct.productName}/>
                    <br />
                    <Form.Control onChange={handleInputChange} className="w-50" type="text" name="brand" placeholder="Brand Name" value={newProduct.brand}/>
                    <br />
                    <Form.Control onChange={handleInputChange} className="w-50" type="number" name="price" placeholder="Price" value={newProduct.price}/>
                    <br />
                    <Form.Control onChange={handleInputChange} className="w-50" type="text" name="benefits" placeholder="Skin Benefits" value={newProduct.benefits}/>
                    {/* <br /> */}
                    {/* <Form.Control as="textarea" onChange={handleInputChange} type="text" placeholder="Review"rows={3} /> */}
                    <br />
                    <Form.Control onChange={handleInputChange} className="w-50" type="file" size="sm" />

                    <Button variant="success"type="submit">Submit Product</Button>
                    <p></p>
                    <Button variant="secondary" onClick={toggleShowing}>Close Post</Button>
                </form>

            </div>
            :
            <Button variant="success" onClick={toggleShowing}>Add a Product</Button>
        }            
        </>
    )
}
export default NewProductComponent;