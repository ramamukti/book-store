import instance from "@/lib/axios";

// Register user
export async function register(name, email, password) {
    try {
        const response = await instance.post('/register', { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

// Login user
export async function login(email, password) {
    try {
        const response = await instance.post('/login', { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}