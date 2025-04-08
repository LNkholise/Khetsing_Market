import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SimpleCard({ listing }) {
  return (
    <Card className="max-w-xs bg-gray-100 flex flex-col">
      <Card.Body className="flex-grow">
        <Typography type="h6">{listing.title}</Typography>
        <Typography >R {listing.price}</Typography>
        <Typography className="my-1 text-foreground">
          {listing.description}
        </Typography>
      </Card.Body>
      <Card.Footer>
       <Link to={`/service/${listing.slug}`}>
        <Button isFullWidth>Read More</Button>
       </Link>
      </Card.Footer>
    </Card>
  );
}

