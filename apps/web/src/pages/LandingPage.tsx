import React from 'react';
import { ArrowRight, BarChart3, Users, ShoppingBag, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Track Your Shopify
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get comprehensive insights into your Shopify store performance with real-time analytics, 
              customer tracking, and beautiful visualizations that help you make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-200 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Floating Cards Animation */}
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-32 right-10 animate-bounce delay-2000">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to track your store
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics and insights to help you understand your customers, 
              track your orders, and optimize your product performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Real-time Analytics',
                description: 'Track sales, revenue, and performance metrics with live charts and visualizations.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Customer Insights',
                description: 'Understand your customers better with detailed profiles and filtering options.',
                color: 'green'
              },
              {
                icon: ShoppingBag,
                title: 'Order Management',
                description: 'Monitor order status, track fulfillment, and analyze purchasing patterns.',
                color: 'purple'
              },
              {
                icon: TrendingUp,
                title: 'Sales Trends',
                description: 'Identify trends and patterns in your sales data to make informed decisions.',
                color: 'orange'
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Your data is protected with enterprise-grade security and reliability.',
                color: 'red'
              },
              {
                icon: Zap,
                title: 'Fast Performance',
                description: 'Lightning-fast loading times and responsive design for optimal experience.',
                color: 'yellow'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-lg bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by growing businesses
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of Shopify merchants who rely on our analytics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '1M+', label: 'Orders Tracked' },
              { number: '50K+', label: 'Products Analyzed' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start tracking your Shopify analytics today and make data-driven decisions 
            that grow your business.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}