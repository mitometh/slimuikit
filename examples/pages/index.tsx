import dynamic from 'next/dynamic'
import DashboardLayout from '@/components/layout/DashboardLayout'
import StatsCard from '@/components/dashboard/StatsCard'
import Chart from '@/components/dashboard/Chart'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Alert from '@/components/ui/Alert'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Table from '@/components/ui/Table'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/InputGroup'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import type { NextPage } from 'next'

// Dynamically import ClientOnly for client-side rendering
const ClientOnly = dynamic(() => import('@/components/ClientOnly'), {
  ssr: false
})

interface CategoryOption {
  value: string
  label: string
}

interface Color {
  name: string
  value: string
}

interface AccentColor extends Color {
  gradient: string
}

interface StatusColor extends Color {
  bgClass: string
}

interface UserData {
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
  initials: string
  avatarColor: string
}

interface StatsData {
  title: string
  value: string
  icon: string
  trend?: 'up' | 'down'
  trendValue?: string
  iconColor?: string
}

const Home: NextPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const { darkMode, toggleDarkMode } = useTheme()

  const categoryOptions: CategoryOption[] = [
    { value: 'tech', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'design', label: 'Design' }
  ]

  const statsData: StatsData[] = [
    {
      title: 'Total Revenue',
      value: '$48,574',
      icon: 'dollar-sign',
      trend: 'up',
      trendValue: '12.5%',
      iconColor: 'from-primary-400 to-primary-600'
    },
    {
      title: 'Active Users',
      value: '12,843',
      icon: 'users',
      trend: 'up',
      trendValue: '8.2%',
      iconColor: 'from-accent-purple to-accent-pink'
    },
    {
      title: 'Total Orders',
      value: '3,721',
      icon: 'shopping-cart',
      trend: 'down',
      trendValue: '3.1%',
      iconColor: 'from-accent-orange to-yellow-500'
    },
    {
      title: 'Performance',
      value: '94.2%',
      icon: 'chart-line',
      trend: 'up',
      trendValue: '18.7%',
      iconColor: 'from-accent-teal to-green-500'
    }
  ]

  const primaryColors: Color[] = [
    { name: '50', value: '#f0f9ff' },
    { name: '100', value: '#e0f2fe' },
    { name: '200', value: '#bae6fd' },
    { name: '300', value: '#7dd3fc' },
    { name: '400', value: '#38bdf8' },
    { name: '500', value: '#0ea5e9' },
    { name: '600', value: '#0284c7' },
    { name: '700', value: '#0369a1' },
    { name: '800', value: '#075985' },
    { name: '900', value: '#0c4a6e' },
  ]

  const neutralColors: Color[] = [
    { name: '50', value: '#f9fafb' },
    { name: '100', value: '#f3f4f6' },
    { name: '200', value: '#e5e7eb' },
    { name: '300', value: '#d1d5db' },
    { name: '400', value: '#9ca3af' },
    { name: '500', value: '#6b7280' },
    { name: '600', value: '#4b5563' },
    { name: '700', value: '#374151' },
    { name: '800', value: '#1f2937' },
    { name: '900', value: '#111827' },
  ]

  const accentColors: AccentColor[] = [
    { name: 'Purple', value: '#8b5cf6', gradient: 'from-accent-purple to-accent-pink' },
    { name: 'Orange', value: '#f97316', gradient: 'from-accent-orange to-yellow-500' },
    { name: 'Teal', value: '#14b8a6', gradient: 'from-accent-teal to-green-500' },
    { name: 'Primary', value: '#0ea5e9', gradient: 'from-primary-500 to-accent-purple' },
  ]

  const statusColors: StatusColor[] = [
    { name: 'Success', value: '#10b981', bgClass: 'bg-green-500' },
    { name: 'Warning', value: '#f59e0b', bgClass: 'bg-yellow-500' },
    { name: 'Error', value: '#ef4444', bgClass: 'bg-red-500' },
    { name: 'Info', value: '#3b82f6', bgClass: 'bg-blue-500' },
  ]

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (value: string, row: UserData) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <div className={`h-10 w-10 rounded-full ${row.avatarColor} flex items-center justify-center text-white font-semibold`}>
              {row.initials}
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">{value}</div>
          </div>
        </div>
      )
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'role',
      label: 'Role',
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'default'}>
          {value}
        </Badge>
      )
    },
  ]

  const data: UserData[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Administrator',
      status: 'Active',
      initials: 'JD',
      avatarColor: 'bg-primary-500'
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Manager',
      status: 'Active',
      initials: 'JS',
      avatarColor: 'bg-accent-purple'
    },
    {
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      role: 'User',
      status: 'Inactive',
      initials: 'RJ',
      avatarColor: 'bg-gray-500'
    },
    {
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'Developer',
      status: 'Active',
      initials: 'SW',
      avatarColor: 'bg-accent-orange'
    },
    {
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      role: 'Designer',
      status: 'Active',
      initials: 'MB',
      avatarColor: 'bg-accent-teal'
    },
    {
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      role: 'Developer',
      status: 'Active',
      initials: 'ED',
      avatarColor: 'bg-primary-600'
    },
    {
      name: 'David Wilson',
      email: 'david.w@example.com',
      role: 'User',
      status: 'Active',
      initials: 'DW',
      avatarColor: 'bg-green-500'
    },
    {
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      role: 'Manager',
      status: 'Active',
      initials: 'LA',
      avatarColor: 'bg-yellow-500'
    },
    {
      name: 'James Martinez',
      email: 'james.m@example.com',
      role: 'Administrator',
      status: 'Inactive',
      initials: 'JM',
      avatarColor: 'bg-red-500'
    },
    {
      name: 'Patricia Garcia',
      email: 'patricia.g@example.com',
      role: 'Designer',
      status: 'Active',
      initials: 'PG',
      avatarColor: 'bg-indigo-500'
    },
    {
      name: 'Christopher Lee',
      email: 'chris.l@example.com',
      role: 'Developer',
      status: 'Active',
      initials: 'CL',
      avatarColor: 'bg-pink-500'
    },
    {
      name: 'Nancy Walker',
      email: 'nancy.w@example.com',
      role: 'User',
      status: 'Active',
      initials: 'NW',
      avatarColor: 'bg-purple-500'
    },
    {
      name: 'Daniel Hall',
      email: 'daniel.h@example.com',
      role: 'Manager',
      status: 'Active',
      initials: 'DH',
      avatarColor: 'bg-blue-500'
    },
    {
      name: 'Karen Allen',
      email: 'karen.a@example.com',
      role: 'Designer',
      status: 'Inactive',
      initials: 'KA',
      avatarColor: 'bg-gray-600'
    },
    {
      name: 'Steven Young',
      email: 'steven.y@example.com',
      role: 'Developer',
      status: 'Active',
      initials: 'SY',
      avatarColor: 'bg-teal-500'
    },
  ]

  const handleEdit = (row: UserData) => {
    console.log('Edit:', row)
  }

  const handleDelete = (row: UserData) => {
    console.log('Delete:', row)
  }

  return (
    <DashboardLayout>
      <ClientOnly>
        {/* Hero Section */}
        <section className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-dark-800 to-dark-600 dark:from-gray-100 dark:to-white bg-clip-text text-transparent">
            Modern Management Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A comprehensive design system for next-generation dashboards
          </p>
          <div className="flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">View Documentation</Button>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section id="dashboard" className="mb-10">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Dashboard Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Modern analytics and metrics visualization</p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Chart */}
          <Chart title="Revenue Analytics" />
        </section>

        {/* Color System */}
        <section id="colors" className="mb-10">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Color System</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Carefully crafted color palette for modern interfaces</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Primary Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Primary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-primary-500 rounded-xl shadow-lg"></div>
                  <div className="text-right">
                    <p className="font-medium text-dark-700 dark:text-gray-200">Sky Blue</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">#0ea5e9</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {primaryColors.slice(0, 5).map((color) => (
                    <div
                      key={color.name}
                      className={`h-8 bg-primary-${color.name} rounded dark:opacity-90`}
                      style={{ backgroundColor: color.value }}
                      title={color.value}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {primaryColors.slice(5, 10).map((color) => (
                    <div
                      key={color.name}
                      className={`h-8 bg-primary-${color.name} rounded dark:opacity-90`}
                      style={{ backgroundColor: color.value }}
                      title={color.value}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Accent</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {accentColors.slice(0, 2).map((color) => (
                    <div
                      key={color.name}
                      className={`h-12 bg-gradient-to-r ${color.gradient} rounded-lg`}
                      title={color.name}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {accentColors.slice(2, 4).map((color) => (
                    <div
                      key={color.name}
                      className={`h-12 bg-gradient-to-r ${color.gradient} rounded-lg`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Neutrals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Neutrals</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-dark-800 rounded-xl shadow-lg"></div>
                  <div className="text-right">
                    <p className="font-medium text-dark-700 dark:text-gray-200">Dark</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">#1f2937</p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {neutralColors.slice(0, 5).map((color) => (
                    <div
                      key={color.name}
                      className="h-8 rounded dark:opacity-90"
                      style={{ backgroundColor: color.value }}
                      title={color.value}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {neutralColors.slice(5, 10).map((color) => (
                    <div
                      key={color.name}
                      className="h-8 rounded dark:opacity-90"
                      style={{ backgroundColor: color.value }}
                      title={color.value}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Status Colors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Status</h3>
              <div className="space-y-2">
                {statusColors.map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${color.bgClass} rounded-lg`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section id="components" className="mb-10">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Components</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Essential UI components for modern applications</p>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-dark-800 dark:text-white">Buttons</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <div className="space-y-8">
                {/* Primary Buttons */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Primary Actions</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button icon="plus">Create New</Button>
                    <Button variant="gradient" icon="upload">Upload</Button>
                    <Button variant="dark" icon="download">Download</Button>
                    <Button variant="outline" icon="share">Share</Button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Icon Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="icon" icon="search" />
                    <Button variant="secondary" size="icon" icon="cog" />
                    <Button variant="danger" size="icon" icon="trash" />
                    <Button variant="gradient" size="icon" icon="star" />
                  </div>
                </div>

                {/* Loading States */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Loading States</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button loading>Processing</Button>
                    <Button disabled icon="ban">Disabled</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div id="forms" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-dark-800 dark:text-white">Form Elements</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft dark:shadow-none dark:border dark:border-gray-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Modern Input</label>
                    <Input placeholder="Enter your name" icon="user" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search Input</label>
                    <Input type="search" placeholder="Search..." icon="search" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <Select
                      options={categoryOptions}
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      icon="layer-group"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                    <Input type="date" icon="calendar" />
                  </div>
                </div>

                {/* Input Groups */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Input Groups</h4>
                  
                  {/* Search with button */}
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Search with Button</label>
                    <InputGroup>
                      <InputGroupAddon position="left">
                        <i className="fas fa-search text-gray-400"></i>
                      </InputGroupAddon>
                      <InputGroupInput type="text" placeholder="Search products..." />
                      <InputGroupButton position="right">Search</InputGroupButton>
                    </InputGroup>
                  </div>

                  {/* URL Input */}
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">URL Input</label>
                    <InputGroup>
                      <InputGroupAddon position="left" variant="dark">https://</InputGroupAddon>
                      <InputGroupInput type="text" placeholder="example.com" />
                    </InputGroup>
                  </div>

                  {/* Price Input */}
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Price Input</label>
                    <InputGroup>
                      <InputGroupAddon position="left" variant="primary">$</InputGroupAddon>
                      <InputGroupInput type="number" placeholder="0.00" />
                      <InputGroupAddon position="right">USD</InputGroupAddon>
                    </InputGroup>
                  </div>

                  {/* Email with subscribe */}
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Newsletter Signup</label>
                    <InputGroup>
                      <InputGroupInput type="email" placeholder="Enter your email" />
                      <InputGroupButton position="right" variant="primary">
                        <i className="fas fa-paper-plane mr-2"></i>Subscribe
                      </InputGroupButton>
                    </InputGroup>
                  </div>

                  {/* Username Input */}
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Username</label>
                    <InputGroup>
                      <InputGroupAddon position="left">@</InputGroupAddon>
                      <InputGroupInput type="text" placeholder="username" />
                      <InputGroupButton position="right" variant="secondary">
                        <i className="fas fa-check"></i>
                      </InputGroupButton>
                    </InputGroup>
                  </div>
                </div>

                {/* Modern Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200">Dark Mode</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Enable dark theme across the platform</p>
                  </div>
                  <button
                    type="button"
                    className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                      darkMode ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    onClick={toggleDarkMode}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                        darkMode ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Alerts */}
          <div id="alerts" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Alerts</h3>
            <div className="space-y-4">
              <Alert type="info" title="Information">
                This is an informational alert message.
              </Alert>
              <Alert type="success" title="Success">
                Your action was completed successfully!
              </Alert>
              <Alert type="warning" title="Warning">
                Please review this important information.
              </Alert>
              <Alert type="error" title="Error">
                An error occurred. Please try again.
              </Alert>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="primary" size="md">Large Badge</Badge>
            </div>
          </div>

          {/* Cards */}
          <div id="cards" className="mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Basic Card">
                <p className="text-gray-600 dark:text-gray-300">This is a basic card with a title and description.</p>
              </Card>

              <Card title="Card with Image" image>
                <p className="text-gray-600 dark:text-gray-300 mb-3">This card includes an image placeholder at the top.</p>
                <Button variant="primary" size="sm">Learn more →</Button>
              </Card>

              <Card 
                title="Interactive Card" 
                badge="Active" 
                hover
                footer={
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Updated 2 hours ago</span>
                    <button className="text-primary-500 hover:text-primary-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                }
              >
                <p className="text-gray-600 dark:text-gray-300">This card has hover effects and a status badge.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Tables Section */}
        <section id="tables" className="mb-8">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Data Display</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">User Management Table</h3>
            <Table 
              columns={columns} 
              data={data}
              onEdit={handleEdit}
              onDelete={handleDelete}
              itemsPerPage={5}
              showPagination={true}
            />
          </div>

          {/* Progress Bars Section */}
          <div id="progress">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Progress Bars</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft dark:shadow-none dark:border dark:border-gray-700 space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">Project Alpha</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">25%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">Project Beta</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">50%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">Project Gamma</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">Project Delta</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-accent-purple h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ClientOnly>
    </DashboardLayout>
  )
}

export default Home