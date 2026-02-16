import { Target, Eye, Award, Heart, Leaf, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Kualitas adalah prioritas utama kami. Setiap produk melalui quality control ketat untuk memastikan standar terbaik.',
    },
    {
      icon: Heart,
      title: 'Craftsmanship',
      description: 'Dibuat dengan tangan oleh pengrajin berpengalaman yang memiliki dedikasi tinggi terhadap detail dan kesempurnaan.',
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Kepuasan pelanggan adalah kebanggaan kami. Kami selalu berusaha memberikan pelayanan terbaik.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Kami menggunakan kayu dari sumber yang bertanggung jawab dan ramah lingkungan untuk masa depan yang lebih baik.',
    },
  ];

  const processSteps = [
    {
      title: 'Pemilihan Kayu',
      description: 'Kami memilih kayu grade A dengan teliti, memastikan tidak ada cacat dan memiliki serat yang indah.',
      image: 'https://images.unsplash.com/photo-1722411927625-0e478acf502b?w=600',
    },
    {
      title: 'Pemotongan & Pembentukan',
      description: 'Kayu dipotong dan dibentuk dengan presisi menggunakan alat-alat berkualitas untuk hasil yang sempurna.',
      image: 'https://images.unsplash.com/photo-1701606547381-b35e5a407b56?w=600',
    },
    {
      title: 'Perakitan',
      description: 'Setiap bagian dirakit dengan hati-hati, memastikan konstruksi yang kokoh dan tahan lama.',
      image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?w=600',
    },
    {
      title: 'Finishing',
      description: 'Proses finishing menggunakan cat water-based ramah lingkungan untuk hasil yang halus dan natural.',
      image: 'https://images.unsplash.com/photo-1759523113527-9706b9f128e8?w=600',
    },
    {
      title: 'Quality Control',
      description: 'Setiap produk diperiksa secara menyeluruh untuk memastikan memenuhi standar kualitas kami.',
      image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?w=600',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Awal Perjalanan',
      description: 'Dimulai dari workshop kecil dengan 2 orang pengrajin, fokus pada pembuatan rak dinding custom.',
    },
    {
      year: '2020',
      title: 'Ekspansi Produk',
      description: 'Menambah variasi produk seperti box penyimpanan, tudung saji, dan kapstok. Mulai memasarkan secara online.',
    },
    {
      year: '2021',
      title: 'Peningkatan Kapasitas',
      description: 'Workshop diperluas dan tim bertambah menjadi 8 pengrajin. Mulai melayani custom order dalam jumlah besar.',
    },
    {
      year: '2023',
      title: 'Sertifikasi & Penghargaan',
      description: 'Mendapat sertifikat SVLK (Sistem Verifikasi Legalitas Kayu) dan penghargaan Best Craft dari komunitas lokal.',
    },
    {
      year: '2026',
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi dengan desain-desain baru dan meningkatkan standar kualitas. Lebih dari 1500 produk terjual.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Tentang Kayu Estetik
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Menghadirkan keindahan dan kenyamanan untuk rumah Anda melalui kerajinan kayu berkualitas tinggi
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Perusahaan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-6">
                Perjalanan Kami
              </h2>
              <p className="text-lg text-[#4A2C1A]/80 mb-6">
                Kayu Estetik didirikan pada tahun 2019 dengan visi untuk menghadirkan perabot rumah tangga yang tidak hanya fungsional, tetapi juga estetik dan ramah lingkungan. Berawal dari workshop kecil dengan 2 pengrajin, kami terus berkembang dan berinovasi.
              </p>
              <p className="text-lg text-[#4A2C1A]/80 mb-6">
                Setiap produk dibuat dengan tangan oleh pengrajin berpengalaman yang memiliki passion tinggi terhadap kerajinan kayu. Kami percaya bahwa detail dan kualitas adalah kunci kepuasan pelanggan.
              </p>
              <p className="text-lg text-[#4A2C1A]/80">
                Hingga saat ini, kami telah melayani ribuan pelanggan di seluruh Indonesia dan terus berkomitmen untuk memberikan yang terbaik.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1722411927625-0e478acf502b?w=800"
                  alt="Workshop Kayu Estetik"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#4A2C1A] mb-12 text-center">
              Tonggak Perjalanan
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {item.year}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#4A2C1A]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C1A] mb-4">Visi Kami</h3>
              <p className="text-lg text-[#4A2C1A]/80">
                Menjadi produsen perabot rumah tangga estetik dan berkualitas tinggi terdepan di Indonesia, yang dikenal dengan kerajinan tangan, desain minimalis modern, dan komitmen terhadap keberlanjutan lingkungan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C1A] mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-[#4A2C1A]/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Menghadirkan produk berkualitas tinggi dengan bahan pilihan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Memberikan desain minimalis yang estetik dan fungsional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Memastikan kepuasan pelanggan melalui pelayanan terbaik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Berkontribusi pada keberlanjutan lingkungan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Perusahaan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Prinsip yang menjadi fondasi bisnis kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4A2C1A]/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Produksi */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Proses Produksi Kami
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Setiap tahap dilakukan dengan penuh perhatian pada detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                    Tahap {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#4A2C1A]/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#6B5538]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Bergabunglah dengan Ribuan Pelanggan Puas Kami
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Wujudkan rumah impian Anda dengan perabot kayu berkualitas tinggi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
              >
                Hubungi Kami
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
      </section>
    </div>
  );
}
