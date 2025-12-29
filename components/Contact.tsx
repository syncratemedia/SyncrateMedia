import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Influencer Marketing',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/; // Allows digits, spaces, +, -, (), min 10 chars

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user types
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          service: 'Influencer Marketing',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0219] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 mb-8">Ready to scale your brand? Let’s talk.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-hero-gradient transition-colors">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:info@syncrate.in" className="text-white font-medium hover:text-brand-cyan transition-colors">info@syncrate.in</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-hero-gradient transition-colors">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+918210922107" className="text-white font-medium hover:text-brand-cyan transition-colors">+91 82109 22107</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-hero-gradient transition-colors">
                  <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a href="https://wa.aisensy.com/aaatfq" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-brand-cyan transition-colors">Chat on WhatsApp</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-hero-gradient transition-colors">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Patna, Bihar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden min-h-[500px]">
            {isSubmitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0219] z-20 rounded-2xl animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-scaleIn">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 animate-fadeIn delay-150">Message Sent!</h3>
                <p className="text-gray-400 max-w-xs text-center animate-fadeIn delay-300">Thank you for contacting Syncrate Media. We will get back to you shortly.</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/30 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                    placeholder="John Doe" 
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-black/30 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                    placeholder="+91..." 
                  />
                   {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/30 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                    placeholder="john@company.com" 
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full bg-black/30 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors ${errors.company ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                    placeholder="Brand Ltd." 
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                >
                  <option className="bg-[#0B0219]">Influencer Marketing</option>
                  <option className="bg-[#0B0219]">Paid Ads (Meta/Google)</option>
                  <option className="bg-[#0B0219]">Branding / Personal Branding</option>
                  <option className="bg-[#0B0219]">Social Media Marketing</option>
                  <option className="bg-[#0B0219]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-black/30 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10'}`}
                  placeholder="Tell us about your goals..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full bg-hero-gradient text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-brand-purple/40 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;