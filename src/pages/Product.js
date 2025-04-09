import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingBagCheck } from "iconoir-react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import ProductGallery from '../components/FeaturedGallery';
import Breadcrumb from '../components/Breadcrumb';
import config from "../api/apiConfig";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch product details by slug
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${config.KHETSING_API_URL}/listings/${slug}`);
      setProduct(response.data);
    } catch (err) {
      setError("Failed to load product details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [slug]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto my-5 w-full max-w-screen-xl">
        <Breadcrumb
  	label="Samsung Galaxy S23"
  	to="/product/samsung-galaxy-s23-3"
  	/>
      {product ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          <div>
           <ProductGallery
             img1 = {product.image_1}
             img2 = {product.image_2}
             img3 = {product.image_3}
             img4 = {product.image_4}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <div className="mb-5">
            	<p className="text-md text-gray-700">{product.owner}</p>
            	<p className="text-xs text-gray-500">{product.location}</p>
            </div>
            <p className="text-sm text-gray-600">{product.description}</p>
            <hr className="my-4 border-t border-gray-200 w-16" />
            <p className="text-lg mt-4">R{product.price}</p>
	   <div className="flex items-center gap-3 mt-5">
		<Button variant="gradient" color="success">
		    Buy Now
		    <ShoppingBagCheck className="ml-2 h-4 w-4 stroke-2" />
		  </Button>

		  <Button
		    color="error"
		    size="sm"
		    className="border-red-500"
		  >
		    Report
		  </Button>
		</div>
		<p className="text-xs text-gray-500 mt-2 italic">
		  This is a space for honest sellers. We support production, original craft, and fair trade. Electronics, counterfeit goods, and mass-market reselling are not permitted.  
		  <br />
		  <br />
		  <span className="font-medium">Please report any listings that violate this policy.</span>
		</p>
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};

export default ProductDetail;

