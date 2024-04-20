import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById } from "@/modules/books";
import { deleteBook } from "@/modules/books";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBook() {
      try {
        const resData = await getBookById(id);
        setBook(resData.book);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    }
    fetchBook();
  }, [id]);

  async function handleDelete() {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Book Details</h1>
      </div>
      {loading ? (
        <Skeleton className="h-12 w-12 rounded-full" />
      ) : (
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 grid-cols-1">
          <Card className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src={`http://localhost:8000/${book.image}`} />
            </div>
            <div className="w-full md:w-1/2">
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Author: {book.author}</p>
                <p className="text-sm font-medium">
                  Publisher: {book.publisher}
                </p>
                <p className="text-sm font-medium">Year: {book.year}</p>
                <p className="text-sm font-medium">Page: {book.pages} pages</p>
              </CardContent>
              {token && (
                <CardFooter className="gap-2">
                  <Button>Edit</Button>
                  <Dialog>
                    <DialogTrigger>
                      <Button variant="destructive">Delete</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={handleDelete} variant="destructive">
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              )}
            </div>
          </Card>
        </div>
      )}
    </main>
  );
}
