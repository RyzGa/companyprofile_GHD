import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Instagram, ShoppingBag } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#4A2C1A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Kayu Estetik</span>
                <span className="text-xs text-white/70">Perabot Rumah Berkualitas</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Produsen perabot rumah tangga dari kayu berkualitas dengan desain minimalis dan estetik. Handmade dengan penuh perhatian pada detail.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-white/80 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-white/80 hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/proses-kualitas" className="text-white/80 hover:text-white transition-colors">
                  Proses & Kualitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/testimoni" className="text-white/80 hover:text-white transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-white/80 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Jl. Kerajinan No. 123<br />
                  Yogyakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-white/80 hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@kayuestetik.com" className="text-white/80 hover:text-white transition-colors">
                  info@kayuestetik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Kayu Estetik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
