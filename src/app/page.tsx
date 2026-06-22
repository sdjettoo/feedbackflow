export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="font-bold text-xl text-indigo-600">FeedbackFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">Get Started Free</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            AI-Powered Feedback for Small Businesses
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">Turn Customer Feedback<br /><span className="text-indigo-600">Into Growth</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">FeedbackFlow uses AI to collect, analyze, and surface actionable insights from your customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors">Start Free Trial</a>
            <a href="#features" className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">See How It Works</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required. 14-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to listen better</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From collecting feedback to generating executive summaries.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "AI", title: "AI-Powered Analysis", desc: "Categorizes and prioritizes feedback automatically." },
              { icon: "Chart", title: "Real-Time Dashboard", desc: "Watch customer sentiment in real-time with beautiful charts." },
              { icon: "Survey", title: "Smart Surveys", desc: "Create engaging surveys in minutes with AI follow-up questions." },
              { icon: "Alert", title: "Instant Alerts", desc: "Get notified immediately when a customer leaves a critical review." },
              { icon: "Link", title: "50+ Integrations", desc: "Connect with Slack, Shopify, HubSpot and more." },
              { icon: "Lock", title: "Enterprise Security", desc: "SOC 2 Type II compliant. Data encrypted at rest and in transit." }
            ].map((f) => (
              <div key={f.title} className="p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="text-lg font-mono bg-indigo-50 text-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">{f.icon.slice(0,2)}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-gray-600">Scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$0", period: "forever", features: ["100 responses/mo", "1 survey", "Basic analytics"], highlighted: false },
              { name: "Growth", price: "$49", period: "per month", features: ["2,000 responses/mo", "Unlimited surveys", "AI insights", "Slack integration"], highlighted: true },
              { name: "Pro", price: "$149", period: "per month", features: ["Unlimited responses", "Custom branding", "API access", "Dedicated support"], highlighted: false }
            ].map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border ${plan.highlighted ? "bg-indigo-600 text-white border-indigo-600 shadow-xl" : "bg-white border-gray-200"}`}>
                <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${plan.highlighted ? "text-indigo-200" : "text-indigo-600"}`}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={`text-sm pb-1 ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                      <span className={plan.highlighted ? "text-indigo-300" : "text-indigo-500"}>checkmark</span>{feat}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-xl font-semibold transition-colors ${plan.highlighted ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-indigo-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to listen better?</h2>
          <p className="text-indigo-200 text-lg mb-10">Join 500+ small businesses using FeedbackFlow.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 rounded-xl text-gray-900 outline-none" />
            <button type="submit" className="bg-white text-indigo-600 px-6 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">Start Free Trial</button>
          </form>
          <p className="text-indigo-300 text-sm mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-white">FeedbackFlow</span>
          <p className="text-sm">2026 FeedbackFlow. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
