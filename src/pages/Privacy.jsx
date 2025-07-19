import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> January 1, 2025
              </p>
              <p className="text-gray-600">
                At Tassel, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Data Protection</h3>
                </div>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Eye className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Transparency</h3>
                </div>
                <p className="text-gray-600">
                  We are transparent about what information we collect and how we use it. You have the right to know how your data is being processed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Lock className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Secure Storage</h3>
                </div>
                <p className="text-gray-600">
                  Your information is stored securely using industry-standard encryption and security protocols to prevent unauthorized access.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Your Rights</h3>
                </div>
                <p className="text-gray-600">
                  You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600">
                      When you contact us or place an order, we may collect personal information such as your name, email address, phone number, and shipping address. This information is necessary to process your orders and communicate with you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
                    <p className="text-gray-600">
                      We automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, pages visited, and the time and date of your visit.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• To process and fulfill your orders</li>
                  <li>• To communicate with you about your orders and inquiries</li>
                  <li>• To improve our website and services</li>
                  <li>• To send you promotional materials (with your consent)</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• With service providers who help us operate our business</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• With your consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• The right to access your personal information</li>
                  <li>• The right to correct inaccurate information</li>
                  <li>• The right to delete your personal information</li>
                  <li>• The right to object to processing of your information</li>
                  <li>• The right to data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600">
                  Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and improve our services. You can control cookie settings through your browser.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">Email: privacy@tassel.com</p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;