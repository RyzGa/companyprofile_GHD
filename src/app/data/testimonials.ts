export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  product?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Siti Aminah',
    location: 'Jakarta Selatan',
    rating: 5,
    date: '2026-02-10',
    comment: 'Kualitas kayunya bagus banget! Rak dindingnya kokoh dan rapih. Finishing juga halus. Puas belanja disini. Recommended!',
    product: 'Rak Dinding Minimalis 3 Tingkat',
  },
  {
    id: '2',
    name: 'Budi Santoso',
    location: 'Bandung',
    rating: 5,
    date: '2026-02-08',
    comment: 'Packaging rapi banget, aman sampai tujuan. Box kayunya kuat dan estetik. Bisa custom ukuran pula. Pelayanan fast response. Terima kasih!',
    product: 'Box Serbaguna Kayu Jati',
  },
  {
    id: '3',
    name: 'Diana Putri',
    location: 'Surabaya',
    rating: 5,
    date: '2026-02-05',
    comment: 'Tudung sajinya cantik! Anyamannya rapi dan kayunya natural. Cocok buat di meja makan, tambah estetik rumah. Pasti order lagi!',
    product: 'Tudung Saji Anyaman Rotan',
  },
  {
    id: '4',
    name: 'Rizky Pratama',
    location: 'Yogyakarta',
    rating: 5,
    date: '2026-02-03',
    comment: 'Rak sepatunya kuat dan simple. Muat banyak sepatu. Kualitas kayu oke, harga affordable. Proses produksi juga cepat. Recommended seller!',
    product: 'Rak Sepatu 4 Tingkat',
  },
  {
    id: '5',
    name: 'Linda Wijaya',
    location: 'Tangerang',
    rating: 5,
    date: '2026-01-28',
    comment: 'Kapstoknya unik dan kuat! Dipasang di dinding kamar jadi tambah aesthetic. Packingnya juga aman. Terima kasih seller, sukses terus!',
    product: 'Kapstok Dinding Model Cabang',
  },
  {
    id: '6',
    name: 'Ahmad Fauzi',
    location: 'Semarang',
    rating: 5,
    date: '2026-01-25',
    comment: 'Produk custom sesuai request, hasilnya memuaskan! Kualitas kayu bagus, finishing rapih. Pelayanan ramah dan profesional. Highly recommended!',
    product: 'Produk Custom',
  },
  {
    id: '7',
    name: 'Rina Handayani',
    location: 'Malang',
    rating: 5,
    date: '2026-01-20',
    comment: 'Rak hexagonnya lucu dan estetik banget! Set 3 pcs ukuran beda-beda. Kayunya bagus dan packingnya aman. Recommended!',
    product: 'Rak Dinding Hexagon Set 3pcs',
  },
  {
    id: '8',
    name: 'Andi Kurniawan',
    location: 'Bekasi',
    rating: 5,
    date: '2026-01-15',
    comment: 'Sudah order beberapa kali, selalu puas! Kualitas konsisten bagus, harga terjangkau. Seller fast response. Langganan terus deh!',
    product: 'Nampan Kayu Handle Kulit',
  },
  {
    id: '9',
    name: 'Dewi Kusuma',
    location: 'Solo',
    rating: 5,
    date: '2026-01-10',
    comment: 'Kotak tisunya simple tapi elegan. Cocok banget buat di ruang tamu. Kualitas oke, harga bersahabat. Pelayanan juga ramah. Thanks!',
    product: 'Kotak Tisu Kayu Minimalis',
  },
];

export const stats = {
  totalReviews: 250,
  averageRating: 4.9,
  fiveStarPercentage: 92,
  productsSold: 1500,
};
