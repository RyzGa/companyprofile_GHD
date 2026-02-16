import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Filter, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products, categories } from '../data/products';

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('kategori') || 'all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      setSearchParams({ kategori: category });
    } else {
      setSearchParams({});
    }
  };

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
      <section className="py-16 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Katalog Produk
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Jelajahi koleksi lengkap perabot kayu berkualitas tinggi kami
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white p-6 rounded-xl border border-border sticky top-24">
                <h3 className="font-semibold text-[#4A2C1A] mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter Kategori
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-white'
                        : 'hover:bg-secondary/50 text-[#4A2C1A]'
                    }`}
                  >
                    Semua Produk
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'hover:bg-secondary/50 text-[#4A2C1A]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-border rounded-lg"
              >
                <Filter className="w-5 h-5" />
                Filter Kategori
              </button>
              
              {showFilters && (
                <div className="mt-4 bg-white p-4 rounded-xl border border-border">
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        handleCategoryChange('all');
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-primary text-white'
                          : 'hover:bg-secondary/50 text-[#4A2C1A]'
                      }`}
                    >
                      Semua Produk
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-primary text-white'
                            : 'hover:bg-secondary/50 text-[#4A2C1A]'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-[#4A2C1A]/70">
                  Menampilkan <span className="font-semibold text-[#4A2C1A]">{filteredProducts.length}</span> produk
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
                      {product.isBestSeller && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-sm rounded-full">
                          Best Seller
                        </div>
                      )}
                      {product.customizable && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-sm rounded-full">
                          Bisa Custom
                        </div>
                      )}
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-[#4A2C1A]/60 text-lg">
                    Tidak ada produk dalam kategori ini
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Tidak Menemukan yang Anda Cari?
            </h2>
            <p className="text-lg text-[#4A2C1A]/70 mb-8">
              Kami melayani pemesanan custom sesuai kebutuhan Anda. Hubungi kami untuk konsultasi gratis!
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
