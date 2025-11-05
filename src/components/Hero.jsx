import { motion } from 'framer-motion';
import { Zap, MapPin, CreditCard, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Charge ahead with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> ZapStation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-600 max-w-xl"
            >
              A professional two‑sided EV charging platform connecting drivers with station operators for real‑time discovery, booking, payments, and management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                <Zap className="w-5 h-5" />
                Find chargers near me
              </button>
              <button className="px-6 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors font-medium">I'm an operator</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: MapPin, label: 'Live discovery' },
                { icon: CreditCard, label: 'Razorpay payments' },
                { icon: Shield, label: 'Secure & reliable' },
                { icon: Zap, label: 'Smart bookings' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/60 px-3 py-2">
                  <f.icon className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-slate-700">{f.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-white p-1 shadow-lg">
              <div className="h-full w-full rounded-xl bg-white p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-emerald-600 text-white">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Nearby Chargers</p>
                        <p className="text-xs text-slate-500">Live availability</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">Map Preview</span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="border border-slate-200 rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-slate-900">Station #{i}</p>
                            <p className="text-xs text-slate-500">Fast • 50kW • 24/7</p>
                          </div>
                          <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">Available</span>
                        </div>
                        <div className="mt-3 h-20 rounded-md bg-gradient-to-tr from-slate-100 to-slate-50" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">Book and pay in seconds</p>
                  <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800">Open Map</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
