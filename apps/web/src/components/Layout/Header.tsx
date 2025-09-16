import React from 'react';
import { ShoppingCart, BarChart3, LogOut, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ShopifyTracker</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/dashboard' 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/' 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}