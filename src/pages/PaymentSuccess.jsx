import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <CheckCircle className="mx-auto h-24 w-24 text-green-500 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order. Your delicious Mexican pastries are on their way!
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Confirmation</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">#TAS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">3-5 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking Info:</span>
                <span className="font-semibold text-orange-600">Will be sent via email</span>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li>• You'll receive an order confirmation email shortly</li>
              <li>• We'll send tracking information once your order ships</li>
              <li>• Your pastries will be carefully packaged to ensure freshness</li>
              <li>• Enjoy your authentic Mexican treats!</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
            <Link
              to="/products"
              className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Continue Shopping
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;