import { useEffect, useState } from 'react';
import { getProducts, categories, getCategory } from '../Api/Api';
import CardItem from './CardItem';

const Card = () => {
    const [products, setProducts] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);

    const chooseCategory = async (category) => {
        const categoryData = await getCategory(category);
        setProducts(categoryData);
    };
    const fetchProducts = async () => {
        const productData = await getProducts();
        setProducts(productData);

        const categoryData = await categories();
        setAvailableCategories(categoryData);
    };
    useEffect(() => {


        fetchProducts();
    }, []);

    return (
        <>
            <h2 className="w-full text-center text-4xl lg:text-7xl font-bold my-8 underline underline-offset-8">Our Products</h2>
            <ul className="flex flex-col gap-5 justify-center items-center lg:flex-row  ">
                <li className={`bg-gradient-to-r from-blue-200 to-fuchsia-200 text-3xl leading-10 px-3 mx-2 rounded cursor-pointer transition hover:scale-105`}
                    onClick={fetchProducts} >All</li>
                {availableCategories.map((category) => (
                    <li
                        key={category}
                        className={`bg-gradient-to-r from-blue-200 to-fuchsia-200 text-3xl leading-10 px-3 mx-2 rounded cursor-pointer transition hover:scale-105`}
                        onClick={() => chooseCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div className="container flex justify-center items-center flex-wrap gap-3 my-12">
                {products.map((item) => (
                    <CardItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Card;