import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Alert from '@/components/ui/Alert'
import type { NextPage } from 'next'

const Example: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Example Page</h1>
        <p className="text-xl text-gray-600 mb-8">
          This page demonstrates the regular layout without sidebar
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto">
        <Alert type="info" title="Layout Information">
          This page uses the standard Layout component with header and footer, but no sidebar.
          Perfect for landing pages, documentation, or any non-dashboard content.
        </Alert>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Feature One" hover>
            <p className="text-gray-600 mb-4">
              This is an example of how content looks with the regular layout.
            </p>
            <Button variant="primary" size="sm">Learn More</Button>
          </Card>

          <Card title="Feature Two" hover>
            <p className="text-gray-600 mb-4">
              The regular layout is great for marketing pages and general content.
            </p>
            <Button variant="outline" size="sm">Explore</Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Choose Your Layout</h2>
          <p className="text-gray-600 mb-6">
            This design system supports multiple layout options:
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="primary" 
              icon="th-large"
              onClick={() => window.location.href = '/'}
            >
              View Dashboard Layout
            </Button>
            <Button 
              variant="secondary" 
              icon="file-alt"
            >
              Current: Page Layout
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Example