import React, { useState } from 'react';
import { Mail, Phone, Clock, ChevronDown, CheckCircle2, Send, Loader2, Sparkles, HelpCircle } from 'lucide-react';

export default function HelpSupportView({ userData }) {
  const [formData, setFormData] = useState({
    name: userData?.name || 'John Doe',
    email: userData?.email || 'john.doe@harvestiq.ag',
    topic: 'Technical Support',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const topicOptions = [
    'Technical Support',
    'Sensor & IoT Integration',
    'AI Agronomy Prescriptions',
    'Billing & Subscription',
    'Account & Permissions',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData((prev) => ({
      ...prev,
      message: '',
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center justify-center animate-fadeIn">
      {/* Page Title & Subtitle */}
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Help & Support
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-normal max-w-md mx-auto">
          We're here to help. Send us a message or reach out directly.
        </p>
      </div>

      {/* Main Support Form Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-10 transition-all">
        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-700">{formData.name}</span>. Our technical agronomy and operations support team has received your ticket and will reply to <span className="font-semibold text-slate-700">{formData.email}</span> shortly.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#005c4b] hover:bg-[#00483a] text-white text-sm font-medium rounded-lg transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg font-medium">
                {errorMsg}
              </div>
            )}

            {/* Name and Email 2-Column Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="support-name" className="block text-xs font-semibold text-slate-700">
                  Name
                </label>
                <input
                  id="support-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#005c4b] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="support-email" className="block text-xs font-semibold text-slate-700">
                  Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@harvestiq.ag"
                  required
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#005c4b] transition-colors"
                />
              </div>
            </div>

            {/* Topic Dropdown Field */}
            <div className="space-y-1.5">
              <label htmlFor="support-topic" className="block text-xs font-semibold text-slate-700">
                Topic
              </label>
              <div className="relative">
                <select
                  id="support-topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#005c4b] transition-colors cursor-pointer pr-10"
                >
                  {topicOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Message Textarea Field */}
            <div className="space-y-1.5">
              <label htmlFor="support-message" className="block text-xs font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="support-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="How can we help you today?"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#005c4b] transition-colors resize-y min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[#005c4b] hover:bg-[#00483a] text-white font-medium text-sm sm:text-base rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Ticket...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Direct Contact / Support Hours Information Footer */}
      <div className="w-full max-w-2xl mt-10 pt-6 border-t border-slate-200/70">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-500">
          <a
            href="mailto:support@harvestiq.ag"
            className="flex items-center gap-2 hover:text-[#005c4b] transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            <span>support@harvestiq.ag</span>
          </a>

          <a
            href="tel:+18005550199"
            className="flex items-center gap-2 hover:text-[#005c4b] transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
            <span>+1 800 555-0199</span>
          </a>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Mon–Fri, 8am – 6pm EST</span>
          </div>
        </div>
      </div>
    </div>
  );
}
