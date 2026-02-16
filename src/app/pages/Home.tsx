import { Link } from 'react-router';
import { 
  ArrowRight, 
  Award, 
  Hammer, 
  Shield, 
  Truck, 
  MessageCircle,
  Star,
  Grid3x3,
  Box,
  CircleDot,
  Shirt,
  Package,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

export function Home() {
  const bestSellerProducts = products.filter(p => p.isBestSeller).slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  const categories = [
    { 
      id: 'rak', 
      name: 'Rak & Ambalan Dinding', 
      icon: Grid3x3,
      image: 'https://images.unsplash.com/photo-1732287286635-c3e2c2012301?w=400'
    },
    { 
      id: 'box', 
      name: 'Box & Wadah Kayu', 
      icon: Box,
      image: 'https://images.unsplash.com/photo-1752981560877-8f18ab9c2787?w=400'
    },
    { 
      id: 'tudung', 
      name: 'Tudung Saji & Anyaman', 
      icon: CircleDot,
      image: 'https://images.unsplash.com/photo-1589734686576-5d594317a5eb?w=400'
    },
    { 
      id: 'kapstok', 
      name: 'Kapstok & Gantungan', 
      icon: Shirt,
      image: 'https://images.unsplash.com/photo-1549752871-f4870f2bc8de?w=400'
    },
    { 
      id: 'rak-sepatu', 
      name: 'Rak Sepatu', 
      icon: Package,
      image: 'https://images.unsplash.com/photo-1664439669880-93f14b4416d6?w=400'
    },
    { 
      id: 'custom', 
      name: 'Produk Custom', 
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?w=400'
    },
  ];

  const features = [
    {
      icon: Hammer,
      title: 'Handmade & Quality Control',
      description: 'Setiap produk dibuat dengan tangan oleh pengrajin berpengalaman dan melalui quality control ketat.'
    },
    {
      icon: Sparkles,
      title: 'Bisa Custom Ukuran & Model',
      description: 'Kami melayani pemesanan custom sesuai kebutuhan Anda dengan berbagai pilihan ukuran dan model.'
    },
    {
      icon: Award,
      title: 'Material Kayu Solid',
      description: 'Menggunakan kayu pilihan grade A seperti Pinus, Jati, dan Mahoni untuk hasil berkualitas tinggi.'
    },
    {
      icon: Shield,
      title: 'Packing Aman',
      description: 'Dikemas dengan sangat hati-hati menggunakan bubble wrap dan kardus tebal agar produk aman sampai tujuan.'
    },
    {
      icon: MessageCircle,
      title: 'Respon Cepat & Ramah',
      description: 'Tim kami siap membantu Anda dengan respon cepat dan pelayanan yang ramah setiap hari.'
    },
    {
      icon: Truck,
      title: 'Pengiriman ke Seluruh Indonesia',
      description: 'Kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi terpercaya.'
    },
  ];

  const getProductImage = (imageKey: string) => {
    const imageMap: Record<string, string> = {
      'wooden-wall-shelf': 'https://images.unsplash.com/photo-1732287286635-c3e2c2012301?w=400',
      'wooden-storage-box': 'https://images.unsplash.com/photo-1752981560877-8f18ab9c2787?w=400',
      'woven-food-cover': 'https://images.unsplash.com/photo-1589734686576-5d594317a5eb?w=400',
      'wooden-coat-hanger': 'https://images.unsplash.com/photo-1549752871-f4870f2bc8de?w=400',
      'wooden-shoe-rack': 'https://images.unsplash.com/photo-1664439669880-93f14b4416d6?w=400',
      'wooden-tray-leather': 'https://images.unsplash.com/photo-1756387462027-77f122674c23?w=400',
      'hexagon-shelves': 'https://images.unsplash.com/photo-1736612762476-83f56ca2034f?w=400',
      'wooden-tissue-box': 'https://images.unsplash.com/photo-1763994682440-6e596fce21b5?w=400',
    };
    return imageMap[imageKey] || imageMap['wooden-wall-shelf'];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/80 rounded-full mb-6">
                <span className="text-sm text-primary">✨ Handmade with Love</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#4A2C1A] mb-6 leading-tight">
                Perabot Rumah Estetik & Fungsional dari Kayu Berkualitas
              </h1>
              <p className="text-lg text-[#4A2C1A]/80 mb-8">
                Ciptakan rumah impian Anda dengan perabot kayu handmade berkualitas tinggi. Desain minimalis modern yang tahan lama dan ramah lingkungan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/produk"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Lihat Produk
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#4A2C1A]/20">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">1500+</div>
                  <div className="text-sm text-[#4A2C1A]/70">Produk Terjual</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
                  <div className="text-sm text-[#4A2C1A]/70">Rating Pelanggan</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">250+</div>
                  <div className="text-sm text-[#4A2C1A]/70">Review Positif</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1732575966442-b2d665c080d2?w=800"
                  alt="Workshop Kayu Estetik"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl blur-2xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-2xl blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Singkat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-6">
              Tentang Kayu Estetik
            </h2>
            <p className="text-lg text-[#4A2C1A]/80 mb-6">
              Kami adalah produsen perabot rumah tangga dari kayu berkualitas tinggi dengan fokus pada desain minimalis dan estetik. Setiap produk dibuat dengan penuh perhatian pada detail, menggunakan kayu pilihan grade A, dan melalui proses quality control yang ketat.
            </p>
            <p className="text-lg text-[#4A2C1A]/80 mb-6">
              Dengan pengalaman lebih dari 5 tahun di industri kerajinan kayu, kami berkomitmen untuk menghadirkan produk berkualitas dengan harga yang terjangkau. Kami juga melayani custom order sesuai kebutuhan Anda.
            </p>
            <Link 
              to="/tentang-kami"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Baca Selengkapnya
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kategori Unggulan */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Kategori Produk
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Jelajahi berbagai kategori produk perabot kayu kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/produk?kategori=${category.id}`}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <category.icon className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Terlaris */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-sm text-accent">⭐ Best Seller</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Produk Terlaris
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Produk pilihan pelanggan dengan rating tertinggi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellerProducts.map((product) => (
              <Link
                key={product.id}
                to={`/produk/${product.id}`}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary/20">
                  <ImageWithFallback 
                    src={getProductImage(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-sm rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#4A2C1A] mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#4A2C1A]/60 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#4A2C1A]/60 mb-1">Mulai dari</div>
                      <div className="text-xl font-bold text-primary">
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Lihat Semua Produk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Komitmen kami untuk memberikan yang terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4A2C1A]/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-sm text-accent">💬 Testimoni</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Kepuasan pelanggan adalah prioritas kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-secondary/20 p-8 rounded-xl border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-[#4A2C1A]/80 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-[#4A2C1A]">{testimonial.name}</div>
                    <div className="text-sm text-[#4A2C1A]/60">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/testimoni"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              Lihat Semua Testimoni
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#6B5538]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Wujudkan Rumah Estetik Anda Sekarang
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Dapatkan perabot kayu berkualitas dengan desain yang sesuai kebutuhan Anda. Konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
              <Link
                to="/produk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Lihat Katalog
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
