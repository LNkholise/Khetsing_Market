import React, { useState, useEffect } from "react";
import axios from "axios";
import Listings from "../components/Listings";
import config from "../api/apiConfig";

const ListingsContainer = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchListings = async () => {
    try {
      const response = await axios.get(`${config.KHETSING_API_URL}/listings/`);
      setListings(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();

    const interval = setInterval(() => {
      fetchListings();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Listings listings={listings} />
      )}
    </>
  );
};

export default ListingsContainer;

