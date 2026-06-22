export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">FeedbackFlow</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <a href="#pricing" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">Get Started Free</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">AI-Powered Feedback Platform</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">Turn Customer Feedback<br /><span className="text-indigo-600">Into Growth</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">FeedbackFlow uses AI to collect, analyze, and act on customer feedback so small businesses can compete with enterprise-grade insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">Start Free Trial</a>
            <a href="#features" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors">See How It Works</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required · 14-day free trial</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Understand Your Customers</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Powerful AI tools designed for small business owners — no data science degree required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AI Sentiment Analysis", desc: "Automatically detect customer emotions and flag urgent issues before they escalate." },
              { icon: "📊", title: "Smart Survey Builder", desc: "Create beautiful surveys in minutes. AI suggests the best questions for your industry." },
              { icon: "📈", title: "Actionable Insights Dashboard", desc: "Turn raw feedback into clear action items. Track trends over time." },
              { icon: "🔗", title: "Seamless Integrations", desc: "Connect with Shopify, Stripe, Mailchimp, and 40+ tools your business already uses." },
              { icon: "⚡", title: "Automated Follow-Ups", desc: "Automatically reach out to unhappy customers with personalized messages." },
              { icon: "🔒", title: "Enterprise-Grade Security", desc: "SOC 2 Type II compliant. GDPR and CCPA ready." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-500">Start free. Scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$0", period: "/month", desc: "Perfect for getting started", features: ["Up to 100 responses/mo", "3 active surveys", "Basic AI analysis", "Email support"], cta: "Get Started Free", highlight: false },
              { name: "Growth", price: "$49", period: "/month", desc: "For growing businesses", features: ["Up to 2,000 responses/mo", "Unlimited surveys", "Advanced AI insights", "Automated follow-ups", "Priority support", "5 team members"], cta: "Start 14-Day Trial", highlight: true },
              { name: "Pro", price: "$129", period: "/month", desc: "For established businesses", features: ["Unlimited responses", "Unlimited surveys", "Custom AI models", "White-label surveys", "API access", "Dedicated account manager"], cta: "Start 14-Day Trial", highlight: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border-2 ${plan.highlight ? "border-indigo-600 bg-indigo-600 text-white shadow-xl scale-105" : "border-gray-200 bg-white text-gray-900"}`}>
                {plan.highlight && <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-indigo-200" : "text-gray-500"}`}>{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-gray-500"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <span className={plan.highlight ? "text-indigo-200" : "text-indigo-600"}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${plan.highlight ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-indigo-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-lg text-gray-500 mb-10">Join 500+ small businesses already using FeedbackFlow. Our team will help you get value from day one.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white" />
              <input type="text" placeholder="Last name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white" />
            </div>
            <input type="email" placeholder="Work email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white" />
            <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white" />
            <textarea placeholder="Tell us about your feedback challenges..." rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white resize-none" />
            <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg">Get Your Free Demo</button>
          </form>
          <p className="mt-4 text-sm text-gray-400">We respond within 24 hours. No spam, ever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xl font-bold text-white">FeedbackFlow</span>
              <p className="text-sm mt-1">AI-powered feedback for small businesses.</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs">© 2026 FeedbackFlow Inc. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
