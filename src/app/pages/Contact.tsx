import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Kami siap membantu mewujudkan rumah impian Anda dengan perabot kayu berkualitas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#4A2C1A] mb-6">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A2C1A] mb-1">Alamat Workshop</h3>
                    <p className="text-[#4A2C1A]/70">
                      Jl. Kerajinan No. 123<br />
                      Bantul, Yogyakarta 55711<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A2C1A] mb-1">Telepon / WhatsApp</h3>
                    <a 
                      href="tel:+6281234567890"
                      className="text-[#4A2C1A]/70 hover:text-primary transition-colors block"
                    >
                      +62 812-3456-7890
                    </a>
                    <a 
                      href="tel:+6281234567891"
                      className="text-[#4A2C1A]/70 hover:text-primary transition-colors block"
                    >
                      +62 812-3456-7891
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A2C1A] mb-1">Email</h3>
                    <a 
                      href="mailto:info@kayuestetik.com"
                      className="text-[#4A2C1A]/70 hover:text-primary transition-colors block"
                    >
                      info@kayuestetik.com
                    </a>
                    <a 
                      href="mailto:order@kayuestetik.com"
                      className="text-[#4A2C1A]/70 hover:text-primary transition-colors block"
                    >
                      order@kayuestetik.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4A2C1A] mb-1">Jam Operasional</h3>
                    <p className="text-[#4A2C1A]/70">
                      Senin - Sabtu: 08.00 - 17.00 WIB<br />
                      Minggu: Libur
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-[#4A2C1A] mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors text-primary"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors text-primary"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-white rounded-lg flex items-center justify-center transition-colors text-accent"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary/20 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-[#4A2C1A] mb-6">
                  Kirim Pesan
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-[#4A2C1A]">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 text-[#4A2C1A]">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#4A2C1A]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-[#4A2C1A]">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="inquiry">Pertanyaan Produk</option>
                      <option value="custom">Custom Order</option>
                      <option value="complaint">Keluhan</option>
                      <option value="collaboration">Kerjasama</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-[#4A2C1A]">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-accent">
                      ✓ Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
                      ✗ Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4A2C1A] mb-8 text-center">
            Lokasi Kami
          </h2>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31668.123456789!2d110.3695!3d-7.8753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTInMzEuMSJTIDExMMKwMjInMTAuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kayu Estetik"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-br from-primary to-[#6B5538]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Butuh Respon Cepat?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Chat langsung dengan customer service kami via WhatsApp untuk respon lebih cepat
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
