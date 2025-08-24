import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calculator, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
const Contact = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            console.log("Contact form submitted:", formData);
            toast.success("Message sent successfully! We'll get back to you within 24 hours.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="contact-page-root">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="contact-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="contact-header-container">
          <div className="flex justify-between items-center h-16" data-spec-id="contact-header-content">
            <div className="flex items-center" data-spec-id="contact-logo-section">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="contact-logo-icon"/>
              <div data-spec-id="contact-brand-text">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="contact-brand-name">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="contact-brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="contact-navigation">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="contact-nav-home">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="contact-nav-about">About</Link>
              <Link to="/contact" className="text-blue-600 font-medium" data-spec-id="contact-nav-contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-spec-id="contact-hero-section">
        <div className="max-w-4xl mx-auto text-center" data-spec-id="contact-hero-content">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-spec-id="contact-hero-title">
            Contact CalcSuites
          </h1>
          <p className="text-xl text-gray-600 mb-8" data-spec-id="contact-hero-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-spec-id="contact-main-section">
        <div className="max-w-6xl mx-auto" data-spec-id="contact-content-container">
          <div className="grid md:grid-cols-2 gap-12" data-spec-id="contact-content-grid">
            
            {}
            <div data-spec-id="contact-info-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-8" data-spec-id="contact-info-title">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8" data-spec-id="contact-info-description">
                Have a question about our calculators? Need help with a calculation? Want to suggest a new feature? 
                We're here to help and always excited to hear from our users.
              </p>

              <div className="space-y-6" data-spec-id="contact-info-details">
                <div className="flex items-start space-x-4" data-spec-id="contact-email-info">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" data-spec-id="contact-email-icon"/>
                  <div data-spec-id="contact-email-content">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1" data-spec-id="contact-email-title">Email Us</h3>
                    <p className="text-gray-700" data-spec-id="contact-email-address">calcsuites@gmail.com</p>
                    <p className="text-gray-500 text-sm" data-spec-id="contact-email-response">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-spec-id="contact-support-info">
                  <Calculator className="h-6 w-6 text-blue-600 mt-1" data-spec-id="contact-support-icon"/>
                  <div data-spec-id="contact-support-content">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1" data-spec-id="contact-support-title">Calculator Support</h3>
                    <p className="text-gray-700" data-spec-id="contact-support-description">
                      Having trouble with a specific calculator? Include the calculator name and describe the issue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-spec-id="contact-feedback-info">
                  <Send className="h-6 w-6 text-blue-600 mt-1" data-spec-id="contact-feedback-icon"/>
                  <div data-spec-id="contact-feedback-content">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1" data-spec-id="contact-feedback-title">Feedback & Suggestions</h3>
                    <p className="text-gray-700" data-spec-id="contact-feedback-description">
                      Your ideas help us improve. Suggest new calculators or features you'd like to see.
                    </p>
                  </div>
                </div>
              </div>

              {}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg" data-spec-id="contact-business-hours">
                <h3 className="text-lg font-semibold text-gray-900 mb-3" data-spec-id="contact-hours-title">Response Time</h3>
                <p className="text-gray-700" data-spec-id="contact-hours-description">
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent calculator issues, please mark your message as "Urgent" in the subject line.
                </p>
              </div>
            </div>

            {}
            <div data-spec-id="contact-form-section">
              <Card className="shadow-lg" data-spec-id="contact-form-card">
                <CardHeader data-spec-id="contact-form-header">
                  <CardTitle className="text-2xl" data-spec-id="contact-form-title">Send us a Message</CardTitle>
                  <CardDescription data-spec-id="contact-form-description">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent data-spec-id="contact-form-content">
                  <form onSubmit={handleSubmit} className="space-y-6" data-spec-id="contact-form">
                    <div className="grid md:grid-cols-2 gap-4" data-spec-id="contact-form-name-email">
                      <div data-spec-id="contact-form-name-field">
                        <Label htmlFor="name" data-spec-id="contact-form-name-label">Full Name *</Label>
                        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="mt-1" data-spec-id="contact-form-name-input"/>
                      </div>
                      <div data-spec-id="contact-form-email-field">
                        <Label htmlFor="email" data-spec-id="contact-form-email-label">Email Address *</Label>
                        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="mt-1" data-spec-id="contact-form-email-input"/>
                      </div>
                    </div>

                    <div data-spec-id="contact-form-subject-field">
                      <Label htmlFor="subject" data-spec-id="contact-form-subject-label">Subject *</Label>
                      <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="mt-1" data-spec-id="contact-form-subject-input"/>
                    </div>

                    <div data-spec-id="contact-form-message-field">
                      <Label htmlFor="message" data-spec-id="contact-form-message-label">Message *</Label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your question or feedback..." rows={6} className="mt-1" data-spec-id="contact-form-message-textarea"/>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting} data-spec-id="contact-form-submit-button">
                      {isSubmitting ? (<>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-spec-id="contact-form-loading-spinner"></div>
                          Sending Message...
                        </>) : (<>
                          <Send className="h-4 w-4 mr-2" data-spec-id="contact-form-send-icon"/>
                          Send Message
                        </>)}
                    </Button>

                    <p className="text-sm text-gray-500 text-center" data-spec-id="contact-form-note">
                      * Required fields. We'll never share your email address.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-spec-id="contact-faq-section">
        <div className="max-w-4xl mx-auto" data-spec-id="contact-faq-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-spec-id="contact-faq-title">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8" data-spec-id="contact-faq-grid">
            <div data-spec-id="contact-faq-item-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-spec-id="contact-faq-1-question">
                Are the calculators really free?
              </h3>
              <p className="text-gray-700" data-spec-id="contact-faq-1-answer">
                Yes! All CalcSuites calculators are completely free to use. No hidden fees, no subscriptions, 
                and no sign-up required. We're supported by advertisements to keep the service free for everyone.
              </p>
            </div>
            <div data-spec-id="contact-faq-item-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-spec-id="contact-faq-2-question">
                How accurate are the calculations?
              </h3>
              <p className="text-gray-700" data-spec-id="contact-faq-2-answer">
                Our calculators use industry-standard formulas and are regularly tested for accuracy. However, 
                for critical financial or medical decisions, we recommend consulting with professionals.
              </p>
            </div>
            <div data-spec-id="contact-faq-item-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-spec-id="contact-faq-3-question">
                Can I request a new calculator?
              </h3>
              <p className="text-gray-700" data-spec-id="contact-faq-3-answer">
                Absolutely! We love hearing about new calculator ideas from our users. Use the contact form 
                to suggest new calculators and we'll consider adding them to our collection.
              </p>
            </div>
            <div data-spec-id="contact-faq-item-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-spec-id="contact-faq-4-question">
                Do you store my calculation data?
              </h3>
              <p className="text-gray-700" data-spec-id="contact-faq-4-answer">
                No, we don't store any of your calculation inputs or results. All calculations are performed 
                locally in your browser, ensuring your privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 text-white py-12" data-spec-id="contact-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="contact-footer-content">
          <div className="flex items-center justify-center mb-4" data-spec-id="contact-footer-brand">
            <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="contact-footer-icon"/>
            <span className="text-xl font-bold" data-spec-id="contact-footer-name">CalcSuites</span>
          </div>
          <p className="text-gray-400 mb-4" data-spec-id="contact-footer-description">
            Your Complete Calculator Toolkit
          </p>
          <p className="text-gray-400 mb-2" data-spec-id="contact-footer-email">
            Email: calcsuites@gmail.com
          </p>
          <p className="text-gray-500 text-sm" data-spec-id="contact-footer-disclaimer">
            All calculators are provided for informational purposes only. Results should be verified for critical decisions.
          </p>
          <p className="text-gray-500 text-sm mt-4" data-spec-id="contact-footer-copyright">
            &copy; 2024 CalcSuites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);
};
export default Contact;
