'use client'

import { FC } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Save, Key, Users, Database, Bell } from 'lucide-react'

const ConfigurationPage: FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Configuration</h1>
          <button className="px-4 py-2 bg-[#FF4747] text-white rounded-lg flex items-center space-x-2 hover:bg-[#ff3333]">
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <nav className="space-y-1 p-4">
                <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg bg-[#FF4747] bg-opacity-10 text-[#FF4747]">
                  <Key className="w-5 h-5" />
                  <span>API Settings</span>
                </button>
                <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-50">
                  <Users className="w-5 h-5" />
                  <span>User Management</span>
                </button>
                <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-50">
                  <Database className="w-5 h-5" />
                  <span>Data Management</span>
                </button>
                <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-50">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">API Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      API Key
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="password"
                        value="••••••••••••••••"
                        readOnly
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4747] focus:border-transparent"
                      />
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Regenerate
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Webhook URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4747] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Request Timeout (seconds)
                    </label>
                    <input
                      type="number"
                      defaultValue={30}
                      min={1}
                      max={120}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4747] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#FF4747] border-gray-300 rounded focus:ring-[#FF4747]"
                      />
                      <span className="text-sm text-gray-700">Enable Debug Mode</span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-[#FF4747] border-gray-300 rounded focus:ring-[#FF4747]"
                      />
                      <span className="text-sm text-gray-700">Allow Anonymous Usage Statistics</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ConfigurationPage
