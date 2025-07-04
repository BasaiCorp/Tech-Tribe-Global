export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-semibold">Razen</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Features
                </a>
                <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Documentation
                </a>
                <a href="#examples" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Examples
                </a>
                <a href="#community" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Community
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/BasaiCorp/Tech-Tribe-Global"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <button className="rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-8">
              <i className="fas fa-rocket text-blue-600 mr-2"></i>
              <span className="text-sm font-medium">Introducing Razen v1.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Programming
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Razen is a modern, fast, and secure programming language designed for the next generation of software development. Build anything from web applications to system software with unprecedented ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="rounded-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 shadow-lg">
                <i className="fas fa-download mr-2"></i>
                Install Razen
              </button>
              <button className="rounded-full border border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all hover:scale-105">
                <i className="fas fa-play mr-2"></i>
                Try Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple. Powerful. Elegant.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Write less code, do more with Razen&apos;s intuitive syntax
            </p>
          </div>
          
          <div className="bg-white dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500">hello_world.rz</span>
            </div>
            <div className="p-6">
              <pre className="text-sm">
                <code className="language-razen">
{`// Hello World in Razen
fn main() {
    println("Hello, World!");
    
    // Variables are immutable by default
    let message = "Welcome to Razen";
    
    // Mutable variables use mut
    let mut counter = 0;
    
    // Pattern matching
    match counter {
        0 => println("Starting..."),
        _ => println("Counter: {}", counter)
    }
    
    // Async/await built-in
    async fn fetch_data() -> Result<String> {
        let response = await http::get("https://api.example.com");
        Ok(response.text())
    }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Razen?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built for modern development challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-bolt",
                title: "Lightning Fast",
                description: "Compile-time optimizations and zero-cost abstractions make Razen incredibly fast.",
                color: "text-yellow-500"
              },
              {
                icon: "fas fa-shield-alt",
                title: "Memory Safe",
                description: "Advanced type system prevents common bugs like null pointer dereferences and buffer overflows.",
                color: "text-green-500"
              },
              {
                icon: "fas fa-code",
                title: "Expressive Syntax",
                description: "Clean, readable syntax that doesn&apos;t sacrifice power for simplicity.",
                color: "text-blue-500"
              },
              {
                icon: "fas fa-sync-alt",
                title: "Concurrent by Design",
                description: "Built-in async/await and lightweight threads make concurrent programming easy.",
                color: "text-purple-500"
              },
              {
                icon: "fas fa-puzzle-piece",
                title: "Interoperable",
                description: "Seamless integration with existing codebases and libraries.",
                color: "text-red-500"
              },
              {
                icon: "fas fa-cogs",
                title: "Zero Runtime",
                description: "Compile to native code with no runtime overhead or garbage collection pauses.",
                color: "text-indigo-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6`}>
                  <i className={`${feature.icon} ${feature.color} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10x", label: "Faster Compilation" },
              { number: "99.9%", label: "Memory Safe" },
              { number: "50K+", label: "GitHub Stars" },
              { number: "1M+", label: "Downloads" }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who are already building amazing things with Razen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              <i className="fas fa-download mr-2"></i>
              Download Razen
            </button>
            <button className="rounded-full border border-white/30 px-8 py-4 text-lg font-medium hover:bg-white/10 transition-all hover:scale-105">
              <i className="fas fa-book mr-2"></i>
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-semibold">Razen</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The modern programming language for the next generation of software development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Download</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Examples</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">GitHub</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © 2025 Razen Programming Language. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
