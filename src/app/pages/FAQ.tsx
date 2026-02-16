import { HelpCircle, MessageCircle } from 'lucide-react';

export function FAQ() {
  const faqCategories = [
    {
      category: 'Produk & Kualitas',
      questions: [
        {
          question: 'Apakah produk ready stock?',
          answer: 'Sebagian besar produk kami dibuat berdasarkan pesanan (made to order) untuk memastikan kualitas terbaik dan kesegaran produk. Estimasi produksi berkisar 2-7 hari kerja tergantung jenis produk. Untuk beberapa produk best seller, kami kadang memiliki ready stock.',
        },
        {
          question: 'Apa jenis kayu yang digunakan?',
          answer: 'Kami menggunakan berbagai jenis kayu grade A seperti Kayu Pinus, Jati, dan Mahoni. Setiap jenis kayu memiliki karakteristik yang berbeda. Kayu Pinus cocok untuk produk ringan, Jati untuk premium quality, dan Mahoni untuk tampilan elegan.',
        },
        {
          question: 'Apakah kayu yang digunakan legal dan ramah lingkungan?',
          answer: 'Ya, kami memiliki sertifikat SVLK (Sistem Verifikasi Legalitas Kayu) dan hanya menggunakan kayu dari sumber yang legal dan bertanggung jawab. Kami berkomitmen untuk menjaga kelestarian lingkungan.',
        },
        {
          question: 'Bagaimana dengan quality control produk?',
          answer: 'Setiap produk melewati 5 tahap quality control: pemilihan material, presisi pemotongan, kekuatan konstruksi, kualitas finishing, dan inspeksi akhir. Kami memastikan setiap produk yang dikirim memenuhi standar kualitas kami.',
        },
      ],
    },
    {
      category: 'Pemesanan & Custom',
      questions: [
        {
          question: 'Bagaimana cara memesan?',
          answer: 'Anda bisa memesan melalui WhatsApp di 0812-3456-7890 atau melalui marketplace kami (Tokopedia, Shopee). Untuk custom order, kami sarankan menghubungi WhatsApp langsung untuk diskusi detail.',
        },
        {
          question: 'Apakah bisa custom ukuran dan model?',
          answer: 'Ya, kami melayani custom order untuk sebagian besar produk. Anda bisa request ukuran, warna finishing, bahkan desain khusus. Hubungi kami untuk konsultasi gratis dan estimasi harga.',
        },
        {
          question: 'Berapa minimal order untuk custom?',
          answer: 'Tidak ada minimal order untuk custom. Kami melayani custom bahkan untuk 1 unit saja. Namun, untuk order dalam jumlah banyak, kami bisa memberikan harga spesial.',
        },
        {
          question: 'Berapa lama estimasi produksi untuk custom order?',
          answer: 'Estimasi produksi custom order tergantung kompleksitas desain, biasanya 5-14 hari kerja. Kami akan memberikan estimasi yang lebih akurat setelah diskusi detail mengenai spesifikasi yang Anda inginkan.',
        },
      ],
    },
    {
      category: 'Harga & Pembayaran',
      questions: [
        {
          question: 'Apakah harga di website sudah final?',
          answer: 'Harga yang tertera adalah harga dasar untuk ukuran dan finishing standar. Untuk custom order atau ukuran khusus, harga bisa berbeda. Silakan hubungi kami untuk mendapatkan quotation yang akurat.',
        },
        {
          question: 'Apa saja metode pembayaran yang tersedia?',
          answer: 'Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (OVO, GoPay, Dana), dan COD untuk area tertentu. Untuk pembelian via marketplace, ikuti metode pembayaran yang tersedia di platform tersebut.',
        },
        {
          question: 'Apakah ada diskon untuk pembelian dalam jumlah banyak?',
          answer: 'Ya, kami memberikan harga spesial untuk pembelian dalam jumlah banyak atau untuk pemesanan grosir. Hubungi customer service kami untuk mendapatkan penawaran terbaik.',
        },
      ],
    },
    {
      category: 'Pengiriman & Packing',
      questions: [
        {
          question: 'Apakah ongkir sudah termasuk dalam harga?',
          answer: 'Harga yang tertera belum termasuk ongkir. Biaya pengiriman akan dihitung berdasarkan berat produk dan tujuan pengiriman. Kami akan menginformasikan total biaya sebelum Anda melakukan pembayaran.',
        },
        {
          question: 'Apa saja ekspedisi yang digunakan?',
          answer: 'Kami bekerja sama dengan berbagai ekspedisi terpercaya seperti JNE, J&T, SiCepat, Ninja Express, dan lainnya. Anda bisa memilih ekspedisi sesuai preferensi.',
        },
        {
          question: 'Bagaimana cara packing produk?',
          answer: 'Kami sangat memperhatikan packing produk. Setiap produk dibungkus berlapis bubble wrap, dikemas dalam kardus tebal, dan ruang kosong diisi packing foam agar tidak goyang. Label fragile juga ditempel untuk kehati-hatian ekstra.',
        },
        {
          question: 'Apakah ada asuransi pengiriman?',
          answer: 'Ya, kami menyarankan untuk menggunakan asuransi pengiriman terutama untuk produk dengan harga tinggi. Biaya asuransi biasanya berkisar 0.2-0.5% dari nilai barang.',
        },
        {
          question: 'Berapa lama estimasi pengiriman?',
          answer: 'Estimasi pengiriman tergantung ekspedisi dan tujuan, biasanya 2-7 hari kerja untuk pulau Jawa dan 5-14 hari untuk luar Jawa. Anda akan mendapatkan tracking number untuk memantau paket Anda.',
        },
      ],
    },
    {
      category: 'Garansi & Retur',
      questions: [
        {
          question: 'Apakah ada garansi?',
          answer: 'Kami memberikan garansi terhadap cacat produksi. Jika ada cacat produksi atau kerusakan akibat pengiriman, kami akan mengganti produk atau melakukan refund sesuai kesepakatan.',
        },
        {
          question: 'Bagaimana jika produk rusak saat diterima?',
          answer: 'Jika produk rusak saat diterima, segera foto/video unboxing sebagai bukti dan hubungi kami maksimal 1x24 jam setelah paket diterima. Kami akan membantu proses klaim ke ekspedisi atau penggantian produk.',
        },
        {
          question: 'Apakah bisa retur atau tukar produk?',
          answer: 'Karena produk kami made to order dan custom, kami tidak menerima retur untuk alasan berubah pikiran atau tidak sesuai ekspektasi pribadi. Namun, untuk cacat produksi atau kesalahan order dari kami, kami akan bertanggung jawab penuh.',
        },
      ],
    },
    {
      category: 'Perawatan Produk',
      questions: [
        {
          question: 'Bagaimana cara merawat produk kayu?',
          answer: 'Bersihkan dengan lap kering atau sedikit lembab. Hindari paparan sinar matahari langsung dan air berlebihan. Untuk menjaga finishing, Anda bisa mengaplikasikan wood polish setiap 3-6 bulan sekali.',
        },
        {
          question: 'Apakah produk tahan air?',
          answer: 'Produk kami memiliki finishing water resistant (tahan percikan air), namun tidak waterproof. Hindari terkena air dalam jumlah banyak atau waktu lama. Jika terkena air, segera keringkan.',
        },
        {
          question: 'Bagaimana jika warna pudar atau kusam?',
          answer: 'Warna natural kayu bisa berubah seiring waktu, ini adalah karakteristik alami. Anda bisa mengaplikasikan wood stain atau wood polish untuk memperbarui tampilan. Kami juga melayani re-finishing dengan biaya tertentu.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#EADBC8] to-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/80 rounded-full mb-6">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C1A] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#4A2C1A]/80">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-[#4A2C1A] mb-6 pb-3 border-b-2 border-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <details
                      key={index}
                      className="bg-secondary/20 p-6 rounded-xl border border-border group hover:bg-secondary/30 transition-colors"
                    >
                      <summary className="font-semibold text-[#4A2C1A] cursor-pointer list-none flex items-center justify-between">
                        <span className="pr-8">{faq.question}</span>
                        <span className="text-primary text-2xl group-open:rotate-45 transition-transform shrink-0">
                          +
                        </span>
                      </summary>
                      <p className="text-[#4A2C1A]/70 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C1A] mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-lg text-[#4A2C1A]/70 mb-8">
              Tim customer service kami siap membantu Anda. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
              <a
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
