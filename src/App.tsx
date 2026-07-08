import { useState, useMemo } from 'react';
import { tools, categories, faqs } from './data/sample-data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    let result = [...tools];

    if (selectedCategory !== 'all') {
      result = result.filter((tool) => tool.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.features.some((f) => f.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'updated':
        result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const getCategoryIcon = (category: string): string => {
    const cat = categories.find((c) => c.id === category);
    return cat?.icon || '🔧';
  };

  const getCategoryName = (category: string): string => {
    const cat = categories.find((c) => c.id === category);
    return cat?.name || category;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🤖</span>
              <span className="text-xl font-bold text-gray-900">AI Tools Directory 2026</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#tools" className="text-gray-600 hover:text-blue-600">Tools</a>
              <a href="#guide" className="text-gray-600 hover:text-blue-600">Guide</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best AI Tools Directory 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover and compare the best AI tools across image generation, writing assistants, video tools, productivity apps, and coding helpers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#tools"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Tools
              </a>
              <a
                href="#guide"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Read Guide
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search AI tools by name, feature, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="name">Sort by Name</option>
                  <option value="updated">Sort by Updated</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {selectedCategory === 'all' ? 'All AI Tools' : getCategoryName(selectedCategory)}
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Showing {filteredTools.length} tools
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden card-hover cursor-pointer"
                  onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-2xl">{getCategoryIcon(tool.category)}</span>
                        <h3 className="text-xl font-bold mt-2">{tool.name}</h3>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                        {tool.rating}/10
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">{tool.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                      {tool.features.length > 3 && (
                        <span className="text-gray-400 text-sm">+{tool.features.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        <span className="font-medium">Best for:</span> {tool.bestFor}
                      </span>
                      <span className="text-blue-600 font-medium">{tool.pricing}</span>
                    </div>

                    {expandedTool === tool.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold mb-3">Pros</h4>
                        <ul className="space-y-2 mb-4">
                          {tool.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-semibold mb-3">Cons</h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-xs text-gray-400">
                          Last Updated: {tool.lastUpdated}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="guide" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">AI Tools Guide 2026</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  1. Understanding the AI Tool Landscape
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="mb-4">
                    The AI tools ecosystem in 2026 has matured significantly from its early experimental phase. Today's tools are production-ready, with clear use cases and well-defined pricing models. The landscape can be broadly divided into several key categories, each serving distinct user needs.
                  </p>
                  <p className="mb-4">
                    Image generation tools like GPT Image 2, Midjourney, and DALL-E 3 lead the creative charge, enabling designers, marketers, and content creators to produce stunning visuals at scale. Writing assistants such as Wordtune and Grammarly Go have become essential for professionals looking to improve their communication while maintaining their unique voice.
                  </p>
                  <p className="mb-4">
                    Video AI tools represent one of the most exciting frontiers, with models like Sora 2 pushing the boundaries of what's possible with text-to-video generation. Productivity AI assistants like ChatGPT Pro, Claude Pro, and Google Gemini have become indispensable for knowledge workers across industries.
                  </p>
                  <p>
                    When choosing an AI tool, it's important to consider factors like your specific use case, budget, existing workflow integration, and the learning curve required. The best tool for one person may not be the best for another, which is why having access to comprehensive reviews and comparisons is so valuable.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  2. How to Choose the Right AI Tool
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <div>
                        <h4 className="font-semibold mb-1">Identify Your Primary Use Case</h4>
                        <p className="text-gray-600">
                          Before selecting an AI tool, clearly define what you want to accomplish. Are you generating images for social media, writing blog posts, editing videos, or improving your coding workflow? Different tools excel in different areas.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <div>
                        <h4 className="font-semibold mb-1">Evaluate Your Budget</h4>
                        <p className="text-gray-600">
                          AI tools range from free tiers to enterprise-level subscriptions costing hundreds of dollars per month. Determine what you're willing to spend and explore tools that offer free trials or freemium models to test before committing.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <div>
                        <h4 className="font-semibold mb-1">Consider Workflow Integration</h4>
                        <p className="text-gray-600">
                          Look for tools that integrate seamlessly with your existing workflow. If you use ChatGPT regularly, DALL-E 3 is a natural choice for image generation. If you're a Google Workspace user, Gemini may be the best fit.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                      <div>
                        <h4 className="font-semibold mb-1">Test Multiple Tools</h4>
                        <p className="text-gray-600">
                          Don't settle for the first tool you try. Most AI tools offer free tiers or trials. Test several options with your actual work to see which one produces the best results for your specific needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                      <div>
                        <h4 className="font-semibold mb-1">Check Community and Support</h4>
                        <p className="text-gray-600">
                          Strong community support and responsive customer service can make a big difference, especially when you're learning a new tool. Look for active forums, tutorials, and documentation.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  3. Advanced Tips for Maximizing AI Tool Performance
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-semibold mb-2">Master Prompt Engineering</h4>
                      <p className="text-gray-600">
                        The quality of your outputs depends heavily on your prompts. Learn to craft detailed, specific prompts that include context, style preferences, and constraints. Experiment with different prompt structures and refine based on results.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-2">Combine Multiple Tools</h4>
                      <p className="text-gray-600">
                        Don't limit yourself to a single tool. Many creators achieve best results by combining tools - for example, using ChatGPT to generate ideas, DALL-E 3 to create visuals, and CapCut to edit the final video.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-2">Leverage Fine-Tuning and Customization</h4>
                      <p className="text-gray-600">
                        For power users, many AI tools offer fine-tuning capabilities that let you train models on your specific data. This can significantly improve output quality for specialized use cases.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-2">Stay Updated on New Features</h4>
                      <p className="text-gray-600">
                        AI tools are constantly evolving with new features and improvements. Follow official blogs, newsletters, and community discussions to stay informed about updates that could enhance your workflow.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-2">Be Mindful of Limitations</h4>
                      <p className="text-gray-600">
                        AI tools have limitations - they can hallucinate, struggle with complex reasoning, and sometimes produce biased outputs. Always review and verify AI-generated content before using it, especially for critical applications.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left font-semibold bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                    onClick={() => {
                      const el = document.getElementById(`faq-${idx}`);
                      if (el) {
                        el.classList.toggle('hidden');
                      }
                    }}
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-600">▼</span>
                  </button>
                  <div id={`faq-${idx}`} className="hidden px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🤖</span>
                <span className="text-xl font-bold">AI Tools Directory</span>
              </div>
              <p className="text-gray-400">
                Your comprehensive guide to the best AI tools of 2026. Discover, compare, and find the perfect tools for your creative and productivity needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tools" className="hover:text-white">Image Generation</a></li>
                <li><a href="#tools" className="hover:text-white">Writing Assistants</a></li>
                <li><a href="#tools" className="hover:text-white">Video Tools</a></li>
                <li><a href="#tools" className="hover:text-white">Productivity</a></li>
                <li><a href="#tools" className="hover:text-white">Coding Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#guide" className="hover:text-white">AI Tools Guide</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#tools" className="hover:text-white">Tool Comparisons</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 AI Tools Directory. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Last Updated: July 2026 | URL: https://Max179.github.io/site-20260708-best-ai-tools-directory/
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
