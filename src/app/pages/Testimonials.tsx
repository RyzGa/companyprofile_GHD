import { Star, Users, ShoppingBag, TrendingUp, Palette, Award, Sparkles, MessageCircle } from 'lucide-react';
import { testimonials, stats } from '../data/testimonials';

export function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Testimoni Pelanggan
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Kepuasan pelanggan adalah kebanggaan kami
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stats.averageRating}</div>
              <div className="text-sm text-[#4A2C1A]/70">Rating Rata-rata</div>
            </div>
            
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{stats.totalReviews}+</div>
              <div className="text-sm text-[#4A2C1A]/70">Total Review</div>
            </div>
            
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <ShoppingBag className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stats.productsSold}+</div>
              <div className="text-sm text-[#4A2C1A]/70">Produk Terjual</div>
            </div>
            
            <div className="text-center p-6 bg-secondary/20 rounded-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{stats.fiveStarPercentage}%</div>
              <div className="text-sm text-[#4A2C1A]/70">Review Bintang 5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-[#4A2C1A]/80 mb-6 italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Product */}
                  {testimonial.product && (
                    <div className="mb-4 pb-4 border-b border-border">
                      <div className="text-xs text-[#4A2C1A]/60 mb-1">Produk:</div>
                      <div className="text-sm font-semibold text-primary">{testimonial.product}</div>
                    </div>
                  )}

                  {/* Customer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#4A2C1A]">{testimonial.name}</div>
                      <div className="text-sm text-[#4A2C1A]/60">{testimonial.location}</div>
                    </div>
                    <div className="text-xs text-[#4A2C1A]/50">
                      {new Date(testimonial.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-[#6B5538] p-8 lg:p-12 rounded-2xl text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Bergabunglah dengan Ribuan Pelanggan Puas
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Kami bangga melayani pelanggan dari berbagai kota di Indonesia dengan tingkat kepuasan yang tinggi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
                >
                  Pesan Sekarang
                </a>
                <a
                  href="/produk"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Lihat Produk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-12 text-center">
              Mengapa Pelanggan Memilih Kami
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="mb-4">
                  <Palette className="w-12 h-12 text-[#4A2C1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">Desain Estetik</h3>
                <p className="text-[#4A2C1A]/70">
                  Desain minimalis modern yang cocok untuk berbagai gaya interior rumah
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <div className="mb-4">
                  <Award className="w-12 h-12 text-[#4A2C1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">Kualitas Terjamin</h3>
                <p className="text-[#4A2C1A]/70">
                  Material grade A dengan quality control ketat di setiap tahap produksi
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <div className="mb-4">
                  <Sparkles className="w-12 h-12 text-[#4A2C1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">Custom Order</h3>
                <p className="text-[#4A2C1A]/70">
                  Bisa custom ukuran dan model sesuai kebutuhan spesifik Anda
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <div className="mb-4">
                  <MessageCircle className="w-12 h-12 text-[#4A2C1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">Pelayanan Ramah</h3>
                <p className="text-[#4A2C1A]/70">
                  Tim customer service yang responsif dan siap membantu Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
