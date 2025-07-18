import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterProps {
  apiKey?: string;
  formId?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ 
  apiKey = 'YOUR_CONVERTKIT_API_KEY', 
  formId = 'YOUR_FORM_ID' 
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok && data.subscription) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-gray-800 dark:text-white">Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-base leading-relaxed">
        Subscribe to our newsletter for the latest updates and insights on building your online presence.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          
            {/* Traveling light effects */}
          <div className="absolute -inset-0.5 rounded-lg overflow-hidden">
            {/* Blue traveling light */}
            <div 
              className="absolute w-48 h-4 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-100 blur-none shadow-2xl shadow-blue-400/80"
              style={{
                animation: 'travelBorder 8s linear infinite',
                transformOrigin: 'center'
              }}
            ></div>
            {/* Purple traveling light */}
            <div 
              className="absolute w-40 h-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-90 blur-none shadow-2xl shadow-purple-500/80"
              style={{
                animation: 'travelBorder 10s linear infinite',
                transformOrigin: 'center'
              }}
            ></div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg opacity-20 blur-sm animate-pulse"></div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={isLoading}
            className="relative w-full px-4 lg:px-4 py-4 lg:py-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-base md:text-lg lg:text-base disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-cyan-400 dark:group-hover:border-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-400/20 z-10"
          />
        </div>
        
        <button 
          type="submit"
          disabled={isLoading}
          className="relative w-full px-6 lg:px-6 py-4 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-cyan-600 disabled:to-blue-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 text-base md:text-lg lg:text-base flex items-center justify-center space-x-2 group overflow-hidden shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 transform hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          {isLoading ? (
            <div className="relative z-10 flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </div>
          ) : (
            <div className="relative z-10 flex items-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}
        </button>
        
        {status !== 'idle' && (
          <div className={`flex items-center space-x-2 text-sm ${
            status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4" />
            ) : (
              <AlertCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4" />
            )}
            <span>{message}</span>
          </div>
        )}
        
        {status === 'idle' && (
          <p className="text-sm md:text-base lg:text-sm text-gray-500 dark:text-gray-400 text-center">No spam, only system.</p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;