"use client";

import { getProduct } from '@/utils/products';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Button from '@/components/Button';
import { useToast } from '@/app/providers/ToastProvider';

const CheckoutPage = ({params}) => {
  const { id } = React.use(params);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [currentPrice, setCurrentPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'card',
  });
  const addToast  = useToast();

  useEffect(() => {
    const loadProduct = async () => {
      const p = await getProduct(id);
      setProduct(p);
      setCurrentPrice(p.price);
      const initialVariants = {};
      p.variants.forEach(v => {
        initialVariants[v.type] = null;
      });
      setSelectedVariants(initialVariants);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleVariantSelect = (type, value) => {
    const newVariants = { ...selectedVariants, [type]: value };
    setSelectedVariants(newVariants);

    const variant = product.variants.find(v => v.type === type && v.value === value);
    if (variant && variant.price) {
      setCurrentPrice(variant.price);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (value) => {
    const newQty = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQty);
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, address, city, state, zipCode } = formData;
    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zipCode) {
      addToast('Please fill all required fields', 'error');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      addToast('Please enter a valid email', 'error');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      addToast('Order placed successfully!', 'success');
      setTimeout(() => window.history.back(), 1500);
    }
  };

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-500">Loading...</div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">Product not found</div>
      </section>
    );
  }

  const subtotal = currentPrice * quantity;
  const shipping = 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Order Summary</h2>
              <div className="flex gap-4">
                <div className="relative w-20 h-20 shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">₹{currentPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Variants Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Select Options</h2>
                <div className="space-y-4">
                  {Array.from(new Set(product.variants.map(v => v.type))).map(type => (
                    <div key={type}>
                      <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                        {type}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {product.variants
                          .filter(v => v.type === type)
                          .map(variant => (
                            <button
                              key={`${type}-${variant.value}`}
                              onClick={() => handleVariantSelect(type, variant.value)}
                              className={`px-4 py-2 rounded border-2 transition ${
                                selectedVariants[type] === variant.value
                                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                                  : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                              }`}
                            >
                              {variant.value}
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Quantity</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Billing Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="sm:col-span-2 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="sm:col-span-2 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="sm:col-span-2 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="sm:col-span-2 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Payment Method</h2>
              <div className="space-y-3">
                {['card', 'upi', 'netbanking'].map(method => (
                  <label key={method} className="flex items-center p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="capitalize font-medium text-gray-900">
                      {method === 'card' ? 'Credit/Debit Card' : method === 'upi' ? 'UPI' : 'Net Banking'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-20">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">Order Total</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-medium">₹{shipping}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (18%)</span>
                  <span className="font-medium">₹{tax}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">₹{total.toLocaleString()}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Place Order
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Secure checkout powered by</p>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>🔒 SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;