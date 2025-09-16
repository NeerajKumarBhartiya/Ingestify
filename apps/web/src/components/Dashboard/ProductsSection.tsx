import React from 'react';
import { Package, Tag, Calendar, Store } from 'lucide-react';
import { Product } from '../../types';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorMessage from '../UI/ErrorMessage';

interface ProductsSectionProps {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
  onRefetch: () => void;
}

export default function ProductsSection({ products, loading, error, onRefetch }: ProductsSectionProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        <LoadingSpinner size="lg" className="h-32" />
        <p className="text-center text-gray-500 mt-4">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={onRefetch}
        className="mx-4"
      />
    );
  }

  const activeProducts = products?.filter(p => p.status === 'active').length || 0;
  const uniqueVendors = new Set(products?.map(p => p.vendor).filter(Boolean)).size;
  const productTypes = new Set(products?.map(p => p.product_type).filter(Boolean)).size;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{products?.length || 0}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <Store className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">{activeProducts}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <Tag className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Product Types</p>
              <p className="text-2xl font-bold text-gray-900">{productTypes}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-orange-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Vendors</p>
              <p className="text-2xl font-bold text-gray-900">{uniqueVendors}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.slice(0, 12).map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  {product.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {product.description}
                    </p>
                  )}
                </div>
                <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  product.status === 'active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {product.status}
                </span>
              </div>
              
              <div className="space-y-2">
                {product.vendor && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Store className="h-4 w-4 mr-2" />
                    <span>{product.vendor}</span>
                  </div>
                )}
                {product.product_type && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>{product.product_type}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Created {new Date(product.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              
              {product.tags && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {product.tags.split(',').slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {(!products || products.length === 0) && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
          <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Products will appear here once they are created in your Shopify store.</p>
        </div>
      )}
    </div>
  );
}