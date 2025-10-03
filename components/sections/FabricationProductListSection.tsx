'use client';

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { IconBrandWhatsapp, IconMenu3 } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

type Product = {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
};

const getRandomFabricationImage = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80',
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const productList: Product[] = [
  {
    name: 'Produk 1',
    description:
      'Deskripsi singkat produk pabrikasi 1. Kualitas tinggi dan dapat disesuaikan.',
    category: 'logam',
    imageUrl: getRandomFabricationImage(),
  },
  {
    name: 'Produk 2',
    description:
      'Deskripsi singkat produk pabrikasi 2. Kualitas tinggi dan dapat disesuaikan.',
    category: 'plastik',
    imageUrl: getRandomFabricationImage(),
  },
  {
    name: 'Produk 3',
    description:
      'Deskripsi singkat produk pabrikasi 3. Kualitas tinggi dan dapat disesuaikan.',
    category: 'elektronik',
    imageUrl: getRandomFabricationImage(),
  },
];

const allCategories = [
  ...new Set(productList.map((product) => product.category)),
];

const FabricationProductListSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('terbaru');

  const filteredProducts = productList.filter((product) => {
    return (
      (filterCategory ? product.category === filterCategory : true) &&
      (searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'terbaru') {
      return 0; // Assuming original order is by newest
    } else if (sortOption === 'populer') {
      return a.name.localeCompare(b.name); // Example sort by name
    }
    return 0;
  });

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>
          <div className='flex gap-2'>
            {/* Custom styled select for Category */}
            <div className='relative'>
              <select
                className='appearance-none border border-gray-300 rounded-md px-3 py-2 pr-8 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition text-sm'
                aria-label='Filter by Category'
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value=''>Semua Kategori</option>
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <svg width='18' height='18' fill='none' viewBox='0 0 20 20'>
                  <path
                    d='M6 8l4 4 4-4'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </div>
            {/* Custom styled select for Sort */}
            <div className='relative'>
              <select
                className='appearance-none border border-gray-300 rounded-md px-3 py-2 pr-8 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition text-sm'
                aria-label='Sort by'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value='terbaru'>Terbaru</option>
                <option value='populer'>Populer</option>
              </select>
              <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
                <svg width='18' height='18' fill='none' viewBox='0 0 20 20'>
                  <path
                    d='M6 8l4 4 4-4'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className='relative w-full md:w-72'>
            <input
              type='text'
              placeholder='Cari produk...'
              className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className='absolute right-3 top-2.5 text-gray-400'>
              <svg width='20' height='20' fill='none' viewBox='0 0 24 24'>
                <path
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Example Product Card */}
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item) => (
              <div
                key={item.name}
                className='group relative bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col hover:shadow-lg transition-shadow cursor-pointer'
              >
                {/* Top accent bar */}
                <div className='absolute top-0 left-0 w-full h-2 bg-primary rounded-t-xl' />
                {/* Product Image */}
                <div className='relative h-52 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50'>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={150}
                    height={150}
                    className='object-cover w-full h-full'
                  />
                  {/* Category badge */}
                  <span className='absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded shadow capitalize'>
                    {item.category}
                  </span>
                </div>
                <h3 className='font-semibold text-lg mb-1 text-gray-800 truncate'>
                  {item.name}
                </h3>
                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                  {item.description}
                </p>
                <div className='flex items-center gap-2 mb-4'>
                  <span className='inline-block w-2 h-2 bg-secondary rounded-full' />
                  <span className='text-xs text-gray-500 uppercase font-medium'>
                    {item.category}
                  </span>
                </div>
                <button
                  className='mt-4 bg-primary text-white rounded-md px-4 py-2 font-medium hover:bg-primary-hover transition text-sm flex items-center justify-center'
                  type='button'
                  onClick={() => setSelectedProduct(item)}
                >
                  <IconMenu3 className='inline mr-2' size={16} />
                  Lihat Detail
                </button>
              </div>
            ))
          ) : (
            <div className='col-span-full text-center text-gray-500 min-h-[200px] flex items-center justify-center'>
              Tidak ada produk yang ditemukan.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Product Details */}
      <Dialog
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        className='relative z-50'
      >
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm'
          aria-hidden='true'
        />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-xl w-full bg-white  rounded-2xl shadow-2xl p-0 overflow-hidden relative'>
            {selectedProduct && (
              <div>
                {/* Header: Image with overlay badge */}
                <div className='relative max-h-80 bg-gray-100 flex items-center justify-center border-b'>
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    width={240}
                    height={192}
                    className='object-cover w-full h-full'
                    priority
                  />
                  <span className='absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded uppercase tracking-wide shadow font-semibold'>
                    {selectedProduct.category}
                  </span>
                </div>
                {/* Main Content */}
                <div className='p-6 mt-8'>
                  <DialogTitle className='text-xl font-bold text-gray-800 mb-1'>
                    {selectedProduct.name}
                  </DialogTitle>
                  <Description className='text-gray-600 mb-4 text-sm'>
                    {selectedProduct.description}
                  </Description>
                  {/* Simple Specs */}
                  <div className='flex flex-wrap gap-4 text-xs text-gray-500 mb-2'>
                    <div className='flex items-center gap-1'>
                      <svg
                        width='16'
                        height='16'
                        fill='none'
                        viewBox='0 0 20 20'
                        className='text-secondary'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='8'
                          stroke='currentColor'
                          strokeWidth='2'
                        />
                      </svg>
                      Kategori:{' '}
                      <span className='font-medium text-gray-700 capitalize'>
                        {selectedProduct.category}
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <svg
                        width='16'
                        height='16'
                        fill='none'
                        viewBox='0 0 20 20'
                        className='text-secondary'
                      >
                        <rect
                          x='4'
                          y='4'
                          width='12'
                          height='12'
                          rx='2'
                          stroke='currentColor'
                          strokeWidth='2'
                        />
                      </svg>
                      Kualitas:{' '}
                      <span className='font-medium text-gray-700'>
                        Industri
                      </span>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className='flex justify-end gap-2 bg-gray-50 border-t border-gray-100 px-6 py-4'>
                  <button
                    className='px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm'
                    onClick={() => setSelectedProduct(null)}
                  >
                    Tutup
                  </button>
                  <button
                    className='px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition text-sm flex items-center'
                    onClick={() => setSelectedProduct(null)}
                  >
                    <IconBrandWhatsapp className='inline mr-2' size={16} />
                    Ajukan Penawaran
                  </button>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
};
export default FabricationProductListSection;
