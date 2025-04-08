import React, { useState } from "react";
import Tabs from "./Tabs";
import ProductCard from "./ProductCard";
import ServiceCard from "./ServiceCard";
import { Button } from "@material-tailwind/react";

const Listings = ({ listings }) => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredListings = listings.filter(
    (listing) =>
      (filter === "all" || listing.listing_type === filter) &&
      (listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      {/* Tab and Search Bar Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4">
        {/* Search Bar */}
        <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
          <input
            color="success"
            placeholder="Search listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

      {/* Filter Dropdown for Small Screens */}
      <div className="sm:hidden w-full sm:w-auto mb-2 sm:mb-0 relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full p-2 border rounded-lg text-left"
        >
          {filter === "all" ? "All Listings" : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>

        {showDropdown && (
          <div className="absolute left-0 right-0 bg-white border rounded-lg shadow-md w-full mt-2 max-w-full">
            <button
              onClick={() => {
                setFilter("all");
                setShowDropdown(false);
              }}
              className="w-full p-2 text-left hover:bg-gray-100"
            >
              All Listings
            </button>
            <button
              onClick={() => {
                setFilter("product");
                setShowDropdown(false);
              }}
              className="w-full p-2 text-left hover:bg-gray-100"
            >
              Products
            </button>
            <button
              onClick={() => {
                setFilter("service");
                setShowDropdown(false);
              }}
              className="w-full p-2 text-left hover:bg-gray-100"
            >
              Services
            </button>
          </div>
        )}
      </div>

        {/* Tabs for Filtering on Larger Screens */}
        <div className="hidden sm:block ml-auto">
          {/* Filter Buttons for Larger Screens */}
          <div className="flex space-x-4">
            <Button
              variant={filter === "all" ? "outline" : "gradient"}
              onClick={() => setFilter("all")}
            >
              All Listings
            </Button>
            <Button
              variant={filter === "product" ? "outline" : "gradient"}
              onClick={() => setFilter("product")}
            >
              Products
            </Button>
            <Button
              variant={filter === "service" ? "outline" : "gradient"}
              onClick={() => setFilter("service")}
            >
              Services
            </Button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {filteredListings.map((listing) =>
          listing.listing_type === "product" ? (
            <ProductCard key={listing.slug} listing={listing} />
          ) : (
            <ServiceCard key={listing.slug} listing={listing} />
          )
        )}
      </div>
    </div>
  );
};

export default Listings;

