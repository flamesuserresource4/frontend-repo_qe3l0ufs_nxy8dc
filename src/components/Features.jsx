import { motion } from 'framer-motion';
import { Car, MapPin, CreditCard, Bell, Building2, Smartphone } from 'lucide-react';

const featuresDrivers = [
  {
    icon: MapPin,
    title: 'Real-time discovery',
    desc: 'Find nearby chargers with live availability and smart filters including connector type, power, and pricing.',
  },
  {
    icon: CreditCard,
    title: 'Seamless payments',
    desc: 'Pay via UPI, cards, or wallets through Razorpay with instant receipts and refunds.',
  },
  {
    icon: Bell,
    title: 'Instant updates',
    desc: 'Get notified about booking status, session start/stop, and promotions with FCM.',
  },
];

const featuresOperators = [
  {
    icon: Building2,
    title: 'Partner console',
    desc: 'Monitor stations, pricing, and utilization with a clean dashboard and role-based access.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    desc: 'All tools are responsive and PWA-ready for teams on the move.',
  },
  {
    icon: Car,
    title: 'EV-first mapping',
    desc: 'Designed around EV journeys with accurate geospatial search and routing foundations.',
  },
];

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="inline-flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 w-10 h-10">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Two‑sided platform
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Built for drivers and operators</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            An extensible architecture that scales from MVP to millions, without rewrites.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-700">For Drivers</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresDrivers.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700">For Operators</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresOperators.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
