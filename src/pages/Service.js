import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingBagCheck } from "iconoir-react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Breadcrumb from '../components/Breadcrumb';
import ReactMarkdown from "react-markdown";
import config from "../api/apiConfig";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch service details by slug
  const fetchServiceDetails = async () => {
    try {
      const response = await axios.get(`${config.KHETSING_API_URL}/listings/${slug}`);
      setService(response.data);
    } catch (err) {
      setError("Failed to load service details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetails();
  }, [slug]);

  if (loading) return <p>Loading service details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto my-5 w-full max-w-screen-xl">
      <Breadcrumb
        label={service ? service.title : "Service Details"}
        to={`/service/${slug}`}
      />
      {service ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {/* Left Column (Detailed Job Description) */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <div className="mb-5">
              <p className="text-md text-gray-700">{service.owner}</p>
              <p className="text-xs text-gray-500">{service.location}</p>
            </div>

            {/* Detailed Description */}
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Job Description:</p>
              <p className="mt-2">
              {service.description}
              </p>
            </div>
            <hr className="my-4 border-t border-gray-200 w-16" />
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-700">R{service.price}</p>
              <p className="text-xs text-gray-500">Posted on: {new Date(service.created_at).toLocaleDateString()}</p>
            </div>
            <Button variant="gradient" className="mt-5" color="success">
              Claim This Job
              <ShoppingBagCheck className="ml-2 h-4 w-4 stroke-2" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4 max-h-[500px] overflow-y-auto pr-2">
            <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-5">Detailed Job description:</p>
              <ReactMarkdown>
                {service.additional_info_markdown}
              </ReactMarkdown>
		<p className="mt-2 text-xs leading-relaxed">
		  <span className="text-red-500 font-bold">*</span> Before accepting this project, please ensure you have the skills, availability, and resources to complete it as described and within the specified timeframe. Taking on a project without the ability to deliver may result in delays, negative reviews, or <span className="font-semibold text-red-600">no compensation</span>.

		  <br className="mt-2" />
		  If you have any questions or uncertainties, don’t hesitate to reach out at <a href="mailto:info@khetsingmarket.com" className="text-blue-600 font-medium hover:underline">info@khetsingmarket.com</a>.
		</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No service found.</p>
      )}
    </div>
  );
};

export default ServiceDetail;

