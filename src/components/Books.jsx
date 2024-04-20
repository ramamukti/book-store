import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card key={id}>
        <CardHeader>
          <CardTitle>
            {title} ({year})
          </CardTitle>
          <CardDescription>{author}</CardDescription>
          <CardDescription>Publisher: {publisher}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={`http://localhost:8000/${image}`} />
        </CardContent>
      </Card>
    </Link>
  );
}
