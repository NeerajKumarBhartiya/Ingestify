import React, { useState } from 'react';
import { Users, ShoppingBag, Package } from 'lucide-react';
import { useApiData } from '../hooks/useApiData';
import { api } from '../utils/api';
import CustomersSection from '../components/Dashboard/CustomersSection';
import OrdersSection from '../components/Dashboard/OrdersSection';
import ProductsSection from '../components/Dashboard/ProductsSection';

type TabType = 'customers' | 'orders' | 'products';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('customers');

  const {
    data: customers,
    loading: customersLoading,
    error: customersError,
    refetch: refetchCustomers
  } = useApiData(api.getCustomers);

  const {
    data: orders,
    loading: ordersLoading,
    error: ordersError,
    refetch: refetchOrders
  } = useApiData(api.getOrders);

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    refetch: refetchProducts
  } = useApiData(api.getProducts);

  const tabs = [
    {
      id: 'customers' as TabType,
      name: 'Customers',
      icon: Users,
      count: customers?.length || 0
    },
    {
      id: 'orders' as TabType,
      name: 'Orders',
      icon: ShoppingBag,
      count: orders?.length || 0
    },
    {
      id: 'products' as TabType,
      name: 'Products',
      icon: Package,
      count: products?.length || 0
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'customers':
        return (
          <CustomersSection
            customers={customers}
            loading={customersLoading}
            error={customersError}
            onRefetch={refetchCustomers}
          />
        );
      case 'orders':
        return (
          <OrdersSection
            orders={orders}
            loading={ordersLoading}
            error={ordersError}
            onRefetch={refetchOrders}
          />
        );
      case 'products':
        return (
          <ProductsSection
            products={products}
            loading={productsLoading}
            error={productsError}
            onRefetch={refetchProducts}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor your Shopify store performance and customer insights
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className={`mr-2 h-5 w-5 ${
                    activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  {tab.name}
                  <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}