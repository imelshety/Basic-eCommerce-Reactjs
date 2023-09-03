import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Api/Api";
const DetailsItem = () => {
    const [details, setDetails] = useState([]);
    let parmas = useParams();
    async function getData() {
        let details = await getProductDetails(parmas.id);
        setDetails(details);
    }
    useEffect(() => {
        getData();
    }, [parmas])
    return (
        <div to={`/item-details/${details.id}`} className="w-full md:w-[80%] lg:w-[70%] group relative block overflow-hidden text-left mx-auto mt-8 rounded shadow-lg border cursor-pointer">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition duration-200 hover:bg-yellow-400 hover:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>
            <img
                src={details.image}
                alt={details.title}
                className="m-auto h-72 object-contain  transition duration-500 group-hover:scale-105"
            />
            <div className="relative bg-white p-6">
                <span
                    className=" bg-yellow-400 py-1.5 text-sm font-medium rounded"
                >
                    New {details.title}
                </span>
                <p className="mt-1.5 text-sm lg:text-lg text-gray-500">{details.price}$</p>
                <p className="mt-1.5 text-sm lg:text-lg text-gray-500">{details.description}</p>
            </div>
            <div>
                <button
                    className=" w-full bg-yellow-400 text-sm font-medium rounded p-4 transition hover:scale-105"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default DetailsItem