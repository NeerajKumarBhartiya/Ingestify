const API_BASE_URL = 'http://localhost:4000';

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error occurred', 500);
  }
}

export const api = {
  getProducts: () => fetchApi('/products'),
  getOrders: () => fetchApi('/orders'), 
  getCustomers: () => fetchApi('/customers'),
};