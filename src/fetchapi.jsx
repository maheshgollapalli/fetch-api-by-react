import { Component } from "react";
import "./fetchApi.css"

class FetchApi extends Component{

    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>{
                this.setState({products:data})
            })
            .catch(e=>{console.log(e);
            })
    }
    
    render(){
        return(
            
            <div className="container">
                <h1>Product List</h1>
                {this.state.products.map(product=>(
                    <div className="product-card" key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <img src={product.image} alt="" />
                    </div>
                ))}
            </div>
        )
    }
}
export default FetchApi