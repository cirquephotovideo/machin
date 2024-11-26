'use client'

import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { RefreshCw, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'

const integrations = [
  {
    id: 1,
    name: 'Shopify',
    status: 'connected',
    lastSync: '2023-12-03 14:30',
    nextSync: '2023-12-03 15:30',
    productsCount: 1250,
    image: 'https://picsum.photos/seed/shopify/40/40'
  },
  {
    id: 2,
    name: 'WooCommerce',
    status: 'error',
    lastSync: '2023-12-03 13:15',
    nextSync: 'Manual',
    productsCount: 850,
    image: 'https://picsum.photos/seed/woo/40/40'
  },
  {
    id: 3,
    name: 'Amazon',
    status: 'syncing',
    lastSync: '2023-12-03 14:00',
    nextSync: '2023-12-03 15:00',
    productsCount: 2100,
    image: 'https://picsum.photos/seed/amazon/40/40'
  }
]

const SyncIntegrationPage: FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Sync & Integration</h1>
          <button className="px-4 py-2 bg-[#FF4747] text-white rounded-lg flex items-center space-x-2 hover:bg-[#ff3333]">
            <RefreshCw className="w-5 h-5" />
            <span>Sync All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Products</p>
                <p className="text-xl font-bold">4,200</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Sync</p>
                <p className="text-xl font-bold">14:30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 space-y-6">
            {integrations.map((integration) => (
              <div key={integration.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                    <img
                      src={integration.image}
                      alt={integration.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-500">{integration.productsCount} products</p>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div>
                    <p className="text-sm text-gray-500">Last Sync</p>
                    <p className="text-sm font-medium">{integration.lastSync}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Sync</p>
                    <p className="text-sm font-medium">{integration.nextSync}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {integration.status === 'connected' && (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-green-500">Connected</span>
                      </>
                    )}
                    {integration.status === 'error' && (
                      <>
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-red-500">Error</span>
                      </>
                    )}
                    {integration.status === 'syncing' && (
                      <>
                        <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />
                        <span className="text-sm text-blue-500">Syncing</span>
                      </>
                    )}
                  </div>
                  <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    Configure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default SyncIntegrationPage
