import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Process } from "./pages/Process";
import { Testimonials } from "./pages/Testimonials";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "tentang-kami", Component: About },
      { path: "produk", Component: Products },
      { path: "produk/:id", Component: ProductDetail },
      { path: "proses-kualitas", Component: Process },
      { path: "testimoni", Component: Testimonials },
      { path: "faq", Component: FAQ },
      { path: "kontak", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
