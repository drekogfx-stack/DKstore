import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { HomePage } from "./features/home";
import { ShopPage } from "./features/shop/pages/shop-page";
import { ProductDetailPage } from "./features/shop/pages/product-detail-page";
import { PortfolioPage } from "./features/portfolio/portfolio-page";
import { OrdersPage } from "./features/orders/pages/orders-page";
import { QueuePage } from "./features/orders/pages/queue-page";
import { PartnersPage } from "./features/partners/partners-page";
import { PrivacyPage } from "./features/legal/privacy-page";
import { TermsPage } from "./features/legal/terms-page";
import { ErrorPage } from "./features/error/error-page";
import { NotFoundPage } from "./features/error/not-found-page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      gcTime: 5 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log('App con todas las rutas cargando...')
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:itemId" element={<ProductDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;