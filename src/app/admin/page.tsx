import Link from 'next/link';
import { 
  ShoppingBag, Users, Package, CreditCard, FileText, 
  Image, MessageSquare, Star, Settings, BarChart3,
  TrendingUp, Clock, CheckCircle
} from 'lucide-react';

const stats = [
  { label: 'Total Orders', value: '127', change: '+12%', icon: ShoppingBag, color: 'bg-purple-100 text-purple-700' },
  { label: 'Revenue', value: '₹4.8L', change: '+23%', icon: CreditCard, color: 'bg-gold/20 text-yellow-700' },
  { label: 'Customers', value: '89', change: '+8%', icon: Users, color: 'bg-blue-100 text-blue-700' },
  { label: 'Pending Quotes', value: '14', change: '3 new', icon: FileText, color: 'bg-orange-100 text-orange-700' },
];

const navItems = [
  { label: 'Overview', href: '/admin', icon: BarChart3 },
  { label: 'Orders', href: '/admin/orders', icon: ShoppingBag },
  { label: 'Leads & Quotes', href: '/admin/leads', icon: FileText },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Customers', href: '/admin/customers', icon: Users },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'Blog', href: '/admin/blog', icon: MessageSquare },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

const recentOrders = [
  { id: 'DOX-001', customer: 'Priya Sharma', product: 'IVF Journey Hamper', amount: '₹3,999', status: 'Delivered', date: 'Jan 20' },
  { id: 'DOX-002', customer: 'Infosys Ltd', product: 'Executive Welcome Kit ×50', amount: '₹1,74,950', status: 'Processing', date: 'Jan 21' },
  { id: 'DOX-003', customer: 'Rahul Mehta', product: 'Gourmet Luxury Box', amount: '₹9,999', status: 'Shipped', date: 'Jan 22' },
  { id: 'DOX-004', customer: 'Apollo Hospitals', product: 'Patient Wellness ×20', amount: '₹99,980', status: 'Confirmed', date: 'Jan 22' },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4A235A] text-white flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="font-display text-2xl font-bold text-gold">Doxora</h1>
          <p className="text-white/50 text-xs mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="text-white/50 hover:text-white text-xs transition-colors">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-charcoal">Good morning, Doxora Team 👋</h2>
          <p className="text-gray-500 mt-1">Here's what's happening with your gifting business today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map(({ label, value, change, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-charcoal">{value}</p>
              <p className="text-gray-500 text-sm mt-0.5">{label}</p>
              <p className="text-green-600 text-xs font-medium mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {change}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-charcoal">Recent Orders</h3>
            <Link href="/admin/orders" className="text-purple-700 text-sm hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-400 uppercase tracking-wider border-b border-gray-50">
                  <th className="px-5 py-3">Order ID</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Product</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-sm font-mono text-purple-700">{order.id}</td>
                    <td className="px-5 py-3 text-sm font-medium text-charcoal">{order.customer}</td>
                    <td className="px-5 py-3 text-sm text-gray-600 max-w-xs truncate">{order.product}</td>
                    <td className="px-5 py-3 text-sm font-bold text-charcoal">{order.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {order.status === 'Delivered' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Add Product', href: '/admin/products/new', icon: Package },
            { label: 'View Quotes', href: '/admin/leads', icon: FileText },
            { label: 'Add Blog Post', href: '/admin/blog/new', icon: MessageSquare },
            { label: 'Upload to Gallery', href: '/admin/gallery', icon: Image },
          ].map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow group"
            >
              <div className="w-9 h-9 bg-[#4A235A]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4A235A] transition-colors">
                <Icon className="w-4 h-4 text-[#4A235A] group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium text-charcoal">{label}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
