'use client'

import { FC } from 'react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import { Plus, Upload, Download, Filter, Grid, List } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Modern Desk Lamp',
    sku: 'LAMP001',
    price: 49.99,
    stock: 150,
    image: 'https://picsum.photos/seed/1/200/200'
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    sku: 'CHAIR001',
    price: 299.99,
    stock: 50,
    image: 'https://picsum.photos/seed/2/200/200'
  },
  {
    id: 3,
    name: 'Wireless Keyboard',
    sku: 'KEY001',
    price: 79.99,
    stock: 200,
    image: 'https://picsum.photos/seed/3/200/200'
  }
]

const CatalogPage: FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Catalog Management</h1>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-[#FF4747] text-white rounded-lg flex items-center space-x-2 hover:bg-[#ff3333]">
              <Plus className="w-5 h-5" />
              <span>Add Product</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
              <Upload className="w-5 h-5" />
              <span>Import</span>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Grid className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <List className="w-5 h-5 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Showing {products.length} products
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    product.stock > 100
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 50
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock} in stock
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CatalogPage
