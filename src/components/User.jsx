import { Typography, Avatar, Rating } from "@material-tailwind/react";

export default function RatingWithComment({ rating=0, username, location }) {
  return (
    <div className="px-8 text-center">
      <Typography as="p" type="h5" className="mb-6">
        User has not added a description yet.;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography className="mt-4 font-bold">{username}</Typography>
      <Typography as="p" type="small" className="mb-4 text-foreground">
        {location}
      </Typography>
      <Rating value={rating} color="warning" readonly />
    </div>
  );
}

