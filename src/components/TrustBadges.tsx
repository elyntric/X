import React from 'react';
import { DollarSign, Users, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TrustBadges: React.FC = () => {
  return (
    <section className="px-4 py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={0} animation="fade-up">
            <div className="relative group text-center p-4 sm:p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-500/20 dark:hover:shadow-green-400/20 active:scale-95 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="relative group mb-3 sm:mb-4">
                  <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400 mx-auto group-hover:text-green-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 transform" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md group-hover:bg-green-300/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">$0 Start</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Begin your journey without any upfront costs
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/35 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={150} animation="fade-up">
            <div className="relative group text-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="relative group mb-4">
                  <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md group-hover:bg-blue-300/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">Beginner Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed specifically for newcomers to online business
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300} animation="fade-up">
            <div className="relative group text-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="relative group mb-4">
                  <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md group-hover:bg-purple-300/30 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">No Scams</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparent, honest guidance you can trust
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;