import instance from "@/lib/axios";

// Get all books
export async function getAllBooks() {
    try {
        const response = await instance.get('/books');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

// Create book
export async function createBook(formData) {
    try {
        const response = await instance.post('/books', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

// Get book by id 
export async function getBookById(id) {
    try {
        const response = await instance.get(`/books/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

// Update book by id
export async function updateBook(id, title, author, publisher, year, pages) {
    try {
        const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

// Delete book by id
export async function deleteBook(id) {
    try {
        const response = await instance.delete(`/books/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}
