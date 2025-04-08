import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function SimpleCard({ listing }) {
  return (
    <Card 
      className="max-w-xs bg-gray-100 flex flex-col"
      style={{
        backgroundImage: `url(${listing.image_1})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '250px'
      }}
    >
      <Link to={`/product/${listing.slug}`} className="block h-full">
        <Card.Body className="flex-grow bg-black bg-opacity-50 p-4 h-full">
          <Typography type="h6" className="text-white">{listing.title}</Typography>
          <Typography className="text-white">R {listing.price}</Typography>
        </Card.Body>
      </Link>
    </Card>
  );
}

