import { 
  TreePine, 
  Droplet, 
  Shield, 
  Package as PackageIcon,
  CheckCircle2,
  Leaf,
  Award,
  Truck
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Process() {
  const materials = [
    {
      name: 'Kayu Pinus Grade A',
      icon: TreePine,
      description: 'Kayu pinus pilihan dengan serat halus dan kuat. Cocok untuk berbagai jenis produk.',
      features: ['Ringan namun kuat', 'Serat halus', 'Mudah di-finishing', 'Tahan lama'],
      image: 'https://images.unsplash.com/photo-1725471307256-b3957924e0bb?w=600',
    },
    {
      name: 'Kayu Jati Solid',
      icon: TreePine,
      description: 'Kayu jati asli dengan tekstur natural yang cantik. Sangat tahan terhadap cuaca.',
      features: ['Premium quality', 'Anti rayap', 'Tahan air', 'Warna natural indah'],
      image: 'https://images.unsplash.com/photo-1770351978708-a43ece156f81?w=600',
    },
    {
      name: 'Kayu Mahoni',
      icon: TreePine,
      description: 'Kayu mahoni dengan warna coklat kemerahan yang elegan dan kokoh.',
      features: ['Warna elegan', 'Struktur kokoh', 'Mudah dibentuk', 'Serat halus'],
      image: 'https://images.unsplash.com/photo-1722411927625-0e478acf502b?w=600',
    },
  ];

  const finishingTypes = [
    {
      name: 'Clear Coat',
      description: 'Finishing transparan yang mempertahankan warna natural kayu',
      icon: Droplet,
    },
    {
      name: 'Water Based Paint',
      description: 'Cat berbasis air yang ramah lingkungan dan aman',
      icon: Leaf,
    },
    {
      name: 'Wood Stain',
      description: 'Pewarna kayu untuk memberikan nuansa warna tertentu',
      icon: Droplet,
    },
    {
      name: 'Natural Oil',
      description: 'Minyak natural untuk finishing yang food-safe',
      icon: Leaf,
    },
  ];

  const qcStandards = [
    {
      title: 'Pemilihan Material',
      description: 'Kami hanya menggunakan kayu grade A tanpa cacat, retak, atau hama.',
      icon: CheckCircle2,
    },
    {
      title: 'Presisi Pemotongan',
      description: 'Setiap potongan diukur dengan teliti untuk hasil yang sempurna.',
      icon: CheckCircle2,
    },
    {
      title: 'Kekuatan Konstruksi',
      description: 'Pengujian kekuatan dan stabilitas sebelum proses finishing.',
      icon: CheckCircle2,
    },
    {
      title: 'Kualitas Finishing',
      description: 'Permukaan halus tanpa noda, rata, dan sesuai standar.',
      icon: CheckCircle2,
    },
    {
      title: 'Inspeksi Akhir',
      description: 'Pemeriksaan menyeluruh sebelum packing untuk memastikan kualitas.',
      icon: CheckCircle2,
    },
  ];

  const packingSteps = [
    {
      title: 'Pembersihan Produk',
      description: 'Produk dibersihkan dari debu dan sisa finishing',
    },
    {
      title: 'Wrapping Bubble Wrap',
      description: 'Dibungkus berlapis bubble wrap untuk proteksi maksimal',
    },
    {
      title: 'Kardus Tebal',
      description: 'Dikemas dalam kardus tebal dengan label fragile',
    },
    {
      title: 'Pengisian Void',
      description: 'Ruang kosong diisi dengan packing foam agar tidak goyang',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Proses & Kualitas
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Komitmen kami pada kualitas di setiap tahap produksi
            </p>
          </div>
        </div>
      </section>

      {/* Material Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Material Berkualitas
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Kami hanya menggunakan kayu pilihan grade A dari sumber yang bertanggung jawab
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {materials.map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <material.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                    {material.name}
                  </h3>
                  <p className="text-[#4A2C1A]/70 mb-4">
                    {material.description}
                  </p>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#4A2C1A]/70">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/20 p-8 rounded-xl max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                  Komitmen Keberlanjutan
                </h3>
                <p className="text-[#4A2C1A]/70">
                  Kami memastikan kayu yang kami gunakan berasal dari sumber yang legal dan bertanggung jawab. 
                  Kami memiliki sertifikat SVLK (Sistem Verifikasi Legalitas Kayu) dan berkomitmen untuk 
                  menjaga kelestarian hutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-6">
                Finishing Berkualitas
              </h2>
              <p className="text-lg text-[#4A2C1A]/80 mb-8">
                Proses finishing adalah tahap krusial yang menentukan tampilan akhir dan daya tahan produk. 
                Kami menggunakan bahan finishing berkualitas tinggi yang aman dan ramah lingkungan.
              </p>
              
              <div className="space-y-4">
                {finishingTypes.map((finish, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <finish.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2C1A] mb-1">{finish.name}</h4>
                      <p className="text-sm text-[#4A2C1A]/70">{finish.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1583651981196-fdbaa5f8b662?w=800"
                  alt="Proses Finishing"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Standar Quality Control
            </h2>
            <p className="text-lg text-[#4A2C1A]/70">
              Setiap produk melewati 5 tahap quality control untuk memastikan kualitas terbaik
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {qcStandards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-secondary/20 p-6 rounded-xl hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#4A2C1A] mb-2">
                      {standard.title}
                    </h3>
                    <p className="text-[#4A2C1A]/70">
                      {standard.description}
                    </p>
                  </div>
                  <standard.icon className="w-6 h-6 text-accent shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing & Shipping Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1589322434410-9f7a4d139b57?w=800"
                  alt="Packing Process"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-2xl blur-2xl -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-6">
                Packing Aman & Pengiriman
              </h2>
              <p className="text-lg text-[#4A2C1A]/80 mb-8">
                Produk Anda adalah prioritas kami. Kami memastikan setiap produk dikemas dengan sangat hati-hati 
                agar sampai ke tangan Anda dalam kondisi sempurna.
              </p>

              <div className="space-y-4 mb-8">
                {packingSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center font-semibold shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2C1A] mb-1">{step.title}</h4>
                      <p className="text-sm text-[#4A2C1A]/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2C1A] mb-2">Pengiriman Terpercaya</h4>
                    <p className="text-sm text-[#4A2C1A]/70 mb-3">
                      Kami bekerja sama dengan ekspedisi terpercaya seperti JNE, J&T, SiCepat, dan lainnya.
                    </p>
                    <ul className="space-y-1 text-sm text-[#4A2C1A]/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Pengiriman ke seluruh Indonesia
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Asuransi pengiriman tersedia
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Tracking number untuk semua pesanan
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-[#6B5538] p-8 lg:p-12 rounded-2xl text-white text-center">
              <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
                <Shield className="w-12 h-12" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Terjamin & Tersertifikasi
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Kami memiliki sertifikat SVLK (Sistem Verifikasi Legalitas Kayu) dan berbagai 
                penghargaan dari komunitas kerajinan lokal.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/90">Kayu Legal</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-white/90">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1500+</div>
                  <div className="text-white/90">Produk Terjual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Yakin dengan Kualitas Kami?
            </h2>
            <p className="text-lg text-[#4A2C1A]/70 mb-8">
              Konsultasikan kebutuhan Anda dan dapatkan produk dengan kualitas terjamin
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
