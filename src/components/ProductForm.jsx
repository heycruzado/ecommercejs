"use client"
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function ProductForm(){
    const [product, setProduct] = useState({
        name: "",
        price: 0, 
        description: ""
    });
    const form = useRef(null);
    const router = useRouter();

    const handleChange = e => {     
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product);
        const res = await axios.post('/api/products', product);
        console.log(res);
        form.current.reset();
        router.push('/products');
    };

    return (
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
            ref={form}
        >
                <label htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Product Name: </label>
                <input name="name" type="text" placeholder="name" onChange={handleChange} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                />

                <label htmlFor="price"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Product price: </label>
                <input name="price" type="text" placeholder="00.00" onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                />

                <label htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >Product Description: </label>
                <textarea name="description" rows={3} placeholder="description" onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                py-2 px-4 rounded">
                    Save product
                </button>
            </form>
    );
}

export default ProductForm