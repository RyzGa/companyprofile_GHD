export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  priceRange?: string;
  image: string;
  images?: string[];
  description: string;
  specifications: {
    size: string;
    material: string;
    color: string;
    weight: string;
  };
  isBestSeller?: boolean;
  customizable?: boolean;
  productionTime?: string;
}

export const categories = [
  { id: 'rak', name: 'Rak & Ambalan Dinding', icon: 'Grid3x3' },
  { id: 'box', name: 'Box & Wadah Kayu', icon: 'Box' },
  { id: 'tudung', name: 'Tudung Saji & Anyaman', icon: 'CircleDot' },
  { id: 'kapstok', name: 'Kapstok & Gantungan', icon: 'Shirt' },
  { id: 'rak-sepatu', name: 'Rak Sepatu', icon: 'Package' },
  { id: 'custom', name: 'Produk Custom', icon: 'Sparkles' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Rak Dinding Minimalis 3 Tingkat',
    category: 'rak',
    price: 175000,
    priceRange: 'Rp 175.000 - Rp 250.000',
    image: 'wooden-wall-shelf',
    description: 'Rak dinding kayu solid dengan desain minimalis modern. Cocok untuk menyimpan buku, tanaman hias, atau dekorasi rumah. Finishing halus dan rapi.',
    specifications: {
      size: '60x15x40 cm',
      material: 'Kayu Pinus Grade A',
      color: 'Natural Wood / Walnut',
      weight: '2.5 kg',
    },
    isBestSeller: true,
    customizable: true,
    productionTime: '3-5 hari kerja',
  },
  {
    id: '2',
    name: 'Box Serbaguna Kayu Jati',
    category: 'box',
    price: 125000,
    priceRange: 'Rp 125.000 - Rp 200.000',
    image: 'wooden-storage-box',
    description: 'Box kayu jati dengan tutup sliding. Multifungsi untuk penyimpanan peralatan, aksesoris, atau kebutuhan rumah tangga lainnya.',
    specifications: {
      size: '30x20x15 cm',
      material: 'Kayu Jati Solid',
      color: 'Natural Teak',
      weight: '1.8 kg',
    },
    isBestSeller: true,
    customizable: true,
    productionTime: '2-4 hari kerja',
  },
  {
    id: '3',
    name: 'Tudung Saji Anyaman Rotan',
    category: 'tudung',
    price: 85000,
    priceRange: 'Rp 85.000 - Rp 150.000',
    image: 'woven-food-cover',
    description: 'Tudung saji anyaman rotan alami dengan rangka kayu. Tersedia berbagai ukuran, aman untuk makanan, dan estetik di meja makan.',
    specifications: {
      size: 'Diameter 35 cm, Tinggi 20 cm',
      material: 'Rotan Alami + Kayu',
      color: 'Natural Brown',
      weight: '0.5 kg',
    },
    isBestSeller: true,
    customizable: false,
    productionTime: '2-3 hari kerja',
  },
  {
    id: '4',
    name: 'Kapstok Dinding Model Cabang',
    category: 'kapstok',
    price: 95000,
    priceRange: 'Rp 95.000 - Rp 140.000',
    image: 'wooden-coat-hanger',
    description: 'Kapstok kayu dengan desain unik menyerupai cabang pohon. 6 pengait kuat, mudah dipasang di dinding.',
    specifications: {
      size: '50x10x8 cm',
      material: 'Kayu Mahoni',
      color: 'Dark Brown / Natural',
      weight: '1.2 kg',
    },
    isBestSeller: true,
    customizable: false,
    productionTime: '3-4 hari kerja',
  },
  {
    id: '5',
    name: 'Rak Sepatu 4 Tingkat',
    category: 'rak-sepatu',
    price: 225000,
    priceRange: 'Rp 225.000 - Rp 350.000',
    image: 'wooden-shoe-rack',
    description: 'Rak sepatu kayu dengan 4 tingkat, kapasitas hingga 12 pasang sepatu. Konstruksi kokoh dan tahan lama.',
    specifications: {
      size: '80x30x70 cm',
      material: 'Kayu Pinus + MDF',
      color: 'Natural / White Wash',
      weight: '5 kg',
    },
    isBestSeller: true,
    customizable: true,
    productionTime: '5-7 hari kerja',
  },
  {
    id: '6',
    name: 'Nampan Kayu Handle Kulit',
    category: 'box',
    price: 115000,
    priceRange: 'Rp 115.000 - Rp 160.000',
    image: 'wooden-tray-leather',
    description: 'Nampan kayu dengan handle kulit sintetis. Cocok untuk serving makanan atau dekorasi meja.',
    specifications: {
      size: '40x25x5 cm',
      material: 'Kayu Pinus + Leather Handle',
      color: 'Natural Wood',
      weight: '0.8 kg',
    },
    isBestSeller: false,
    customizable: true,
    productionTime: '2-3 hari kerja',
  },
  {
    id: '7',
    name: 'Rak Dinding Hexagon Set 3pcs',
    category: 'rak',
    price: 195000,
    priceRange: 'Rp 195.000',
    image: 'hexagon-shelves',
    description: 'Set 3 rak dinding bentuk hexagon dengan ukuran berbeda. Desain modern dan instagramable.',
    specifications: {
      size: 'S: 20cm, M: 25cm, L: 30cm',
      material: 'Kayu Pinus',
      color: 'Natural / Black / White',
      weight: '1.5 kg (set)',
    },
    isBestSeller: true,
    customizable: false,
    productionTime: '4-5 hari kerja',
  },
  {
    id: '8',
    name: 'Kotak Tisu Kayu Minimalis',
    category: 'box',
    price: 65000,
    priceRange: 'Rp 65.000 - Rp 95.000',
    image: 'wooden-tissue-box',
    description: 'Kotak tisu kayu solid dengan desain minimalis. Menambah estetika ruangan Anda.',
    specifications: {
      size: '26x14x10 cm',
      material: 'Kayu Pinus',
      color: 'Natural / Espresso',
      weight: '0.5 kg',
    },
    isBestSeller: false,
    customizable: true,
    productionTime: '2-3 hari kerja',
  },
];
