import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { 
  ArrowLeft, 
  Star, 
  MessageCircle, 
  ShoppingCart, 
  Ruler,
  Package,
  Palette,
  Weight,
  Clock,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#4A2C1A] mb-4">Produk Tidak Ditemukan</h2>
          <Link to="/produk" className="text-primary hover:text-primary/80">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  const getProductImage = (imageKey: string) => {
    const imageMap: Record<string, string> = {
      'wooden-wall-shelf': 'https://images.unsplash.com/photo-1732287286635-c3e2c2012301?w=800',
      'wooden-storage-box': 'https://images.unsplash.com/photo-1752981560877-8f18ab9c2787?w=800',
      'woven-food-cover': 'https://images.unsplash.com/photo-1589734686576-5d594317a5eb?w=800',
      'wooden-coat-hanger': 'https://images.unsplash.com/photo-1549752871-f4870f2bc8de?w=800',
      'wooden-shoe-rack': 'https://images.unsplash.com/photo-1664439669880-93f14b4416d6?w=800',
      'wooden-tray-leather': 'https://images.unsplash.com/photo-1756387462027-77f122674c23?w=800',
      'hexagon-shelves': 'https://images.unsplash.com/photo-1736612762476-83f56ca2034f?w=800',
      'wooden-tissue-box': 'https://images.unsplash.com/photo-1763994682440-6e596fce21b5?w=800',
    };
    return imageMap[imageKey] || imageMap['wooden-wall-shelf'];
  };

  const productImages = [
    getProductImage(product.image),
    getProductImage(product.image),
    getProductImage(product.image),
  ];

  const productReviews = testimonials.filter(t => t.product === product.name).slice(0, 3);

  const faqs = [
    {
      question: 'Apakah produk ini ready stock?',
      answer: 'Produk kami dibuat berdasarkan pesanan (made to order) untuk memastikan kualitas terbaik. Estimasi produksi adalah ' + product.productionTime + '.',
    },
    {
      question: 'Apakah bisa custom ukuran?',
      answer: product.customizable 
        ? 'Ya, produk ini bisa custom sesuai kebutuhan Anda. Silakan hubungi kami via WhatsApp untuk diskusi detail.'
        : 'Untuk produk ini, kami menyediakan ukuran standar. Namun, kami bisa membuatkan custom order dengan desain serupa.',
    },
    {
      question: 'Bagaimana cara pemesanannya?',
      answer: 'Anda bisa memesan melalui WhatsApp atau marketplace kami. Hubungi customer service kami untuk informasi lebih lanjut dan proses pemesanan.',
    },
    {
      question: 'Apakah ada garansi?',
      answer: 'Kami memberikan garansi kualitas. Jika ada cacat produksi atau kerusakan saat pengiriman, kami akan menggantinya.',
    },
  ];

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.name}. Bisa minta info lebih lanjut?`
  );

  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-6 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-[#4A2C1A]/60 hover:text-primary">
              Beranda
            </Link>
            <span className="text-[#4A2C1A]/40">/</span>
            <Link to="/produk" className="text-[#4A2C1A]/60 hover:text-primary">
              Produk
            </Link>
            <span className="text-[#4A2C1A]/40">/</span>
            <span className="text-primary">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/produk"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Katalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="rounded-xl overflow-hidden bg-secondary/20 mb-4">
                <ImageWithFallback 
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <ImageWithFallback 
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex gap-2 mb-4">
                {product.isBestSeller && (
                  <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                    Best Seller
                  </span>
                )}
                {product.customizable && (
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Bisa Custom
                  </span>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <span className="text-[#4A2C1A]/60">4.9 (250+ review)</span>
              </div>

              <div className="mb-6">
                <div className="text-sm text-[#4A2C1A]/60 mb-2">Harga mulai dari</div>
                <div className="text-4xl font-bold text-primary">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </div>
                {product.priceRange && (
                  <div className="text-sm text-[#4A2C1A]/60 mt-1">
                    Range harga: {product.priceRange}
                  </div>
                )}
              </div>

              <div className="bg-secondary/20 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-[#4A2C1A] mb-4">Deskripsi Produk</h3>
                <p className="text-[#4A2C1A]/80">
                  {product.description}
                </p>
              </div>

              <div className="bg-white border border-border p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-[#4A2C1A] mb-4">Spesifikasi</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ruler className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-[#4A2C1A]/60">Ukuran</div>
                      <div className="font-semibold text-[#4A2C1A]">{product.specifications.size}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-[#4A2C1A]/60">Material</div>
                      <div className="font-semibold text-[#4A2C1A]">{product.specifications.material}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-[#4A2C1A]/60">Pilihan Warna</div>
                      <div className="font-semibold text-[#4A2C1A]">{product.specifications.color}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Weight className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-sm text-[#4A2C1A]/60">Berat</div>
                      <div className="font-semibold text-[#4A2C1A]">{product.specifications.weight}</div>
                    </div>
                  </div>
                  {product.productionTime && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="text-sm text-[#4A2C1A]/60">Estimasi Produksi</div>
                        <div className="font-semibold text-[#4A2C1A]">{product.productionTime}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pesan via WhatsApp
                </a>
                <a
                  href="#"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Beli di Marketplace
                </a>
              </div>

              {product.customizable && (
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#4A2C1A] mb-1">Custom Order Tersedia</h4>
                      <p className="text-sm text-[#4A2C1A]/70">
                        Produk ini bisa disesuaikan dengan kebutuhan Anda. Hubungi kami untuk diskusi lebih lanjut.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4A2C1A] mb-8 text-center">
            Pertanyaan Umum
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white p-6 rounded-xl border border-border group"
              >
                <summary className="font-semibold text-[#4A2C1A] cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#4A2C1A]/70 mt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {productReviews.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#4A2C1A] mb-8 text-center">
              Review Pembeli
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {productReviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-[#4A2C1A]/80 mb-4 text-sm">"{review.comment}"</p>
                  <div className="pt-3 border-t border-border">
                    <div className="font-semibold text-[#4A2C1A] text-sm">{review.name}</div>
                    <div className="text-xs text-[#4A2C1A]/60">{review.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
