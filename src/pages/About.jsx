import React, { useEffect } from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tassel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about bringing the authentic taste of Mexico to the world through our extraordinary pastries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for authentic Mexican flavors, Tassel began as a dream to share the wonder of traditional Mexican pastries with the world. Our journey started in the heart of Mexico, where we learned from master bakers who have been perfecting their craft for generations.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we collaborate with world-class chefs to create extraordinary pastries that honor Mexican traditions while embracing modern techniques. Every product we make tells a story of heritage, craftsmanship, and the pursuit of perfection.
              </p>
              <p className="text-gray-600">
                From our family to yours, we're committed to bringing you the finest Mexican pastries that celebrate the rich culinary heritage of Mexico.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and time-honored techniques to create exceptional pastries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                Every recipe is rooted in Mexican tradition, preserving the authentic flavors and techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in building connections and sharing the joy of Mexican pastries with everyone.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Making authentic Mexican pastries accessible to people around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the passionate people behind Tassel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Carlos Rodriguez</h3>
              <p className="text-orange-600 mb-2">Master Baker</p>
              <p className="text-gray-600 text-sm">
                With over 25 years of experience in traditional Mexican baking, Carlos brings authenticity to every recipe.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Maria Santos</h3>
              <p className="text-orange-600 mb-2">Head Chef</p>
              <p className="text-gray-600 text-sm">
                Maria combines traditional techniques with modern innovation to create our signature pastries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">David Chen</h3>
              <p className="text-orange-600 mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                David ensures our products reach customers worldwide while maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Tassel?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers who have discovered the wonder of our Mexican pastries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Find Our Products
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;