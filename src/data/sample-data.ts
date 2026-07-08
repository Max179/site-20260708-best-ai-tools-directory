export interface Tool {
  id: string;
  name: string;
  category: string;
  rating: number;
  description: string;
  features: string[];
  pricing: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Tools', icon: '🔧', count: 30 },
  { id: 'image', name: 'Image Generation', icon: '🎨', count: 8 },
  { id: 'writing', name: 'Writing Assistants', icon: '✍️', count: 6 },
  { id: 'video', name: 'Video Tools', icon: '🎬', count: 5 },
  { id: 'productivity', name: 'Productivity', icon: '📊', count: 5 },
  { id: 'coding', name: 'Coding Tools', icon: '💻', count: 6 },
];

export const tools: Tool[] = [
  {
    id: 'gpt-image-2',
    name: 'GPT Image 2',
    category: 'image',
    rating: 9.5,
    description: 'OpenAI\'s latest image generation model with exceptional text rendering and prompt adherence. Leads on balanced overall performance and precise instruction-following.',
    features: ['Exact pixel dimensions', 'Text rendering', 'Prompt adherence', 'Batch generation', '4K output'],
    pricing: 'Free tier with watermark, paid from $0.04/image',
    bestFor: 'Marketers, designers, content creators',
    pros: ['Best overall performance', 'Exceptional text rendering', 'Precise prompt adherence', 'Multiple aspect ratios'],
    cons: ['15 second generation time', 'Free tier has watermark'],
    lastUpdated: '2026-06-15'
  },
  {
    id: 'midjourney-v8',
    name: 'Midjourney v8',
    category: 'image',
    rating: 9.2,
    description: 'The aesthetic powerhouse for artistic quality. Still untouchable for stylized, editorial, and concept art with native 2K resolution.',
    features: ['Artistic styles', 'Style references', 'Fast generation', 'Community gallery', 'Personalization'],
    pricing: '$10-$60/month',
    bestFor: 'Artists, illustrators, concept designers',
    pros: ['Best artistic quality', 'Fast generation (4s)', 'Native 2K output', 'Strong community'],
    cons: ['No API access', 'Discord-based workflow', 'Text rendering issues'],
    lastUpdated: '2026-05-20'
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    category: 'image',
    rating: 9.0,
    description: 'Built into ChatGPT for seamless workflow. Best for users who want easy integration with their existing ChatGPT Plus subscription.',
    features: ['ChatGPT integration', 'Text rendering', 'Natural language prompts', 'Safety guardrails', 'Multiple outputs'],
    pricing: 'Free with ChatGPT Plus ($20/month)',
    bestFor: 'ChatGPT users, casual creators, quick iterations',
    pros: ['Zero-friction workflow', 'Best text-in-image', 'Built-in prompt refinement', 'No separate tool needed'],
    cons: ['Output can feel generic', 'Limited style presets'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'flux-2',
    name: 'FLUX.2 Pro',
    category: 'image',
    rating: 8.8,
    description: 'Open-weight leader for photorealism with exceptional skin texture and lighting detail. Developer-focused with no native UI.',
    features: ['Open-source', 'Self-hostable', 'Best photorealism', 'Fine-tuning', 'API access'],
    pricing: 'Free to self-host, managed APIs pay-per-use',
    bestFor: 'Developers, power users, custom workflows',
    pros: ['Best photorealism', 'No per-image cost', 'Full control', 'Fine-tuning capabilities'],
    cons: ['Complex setup', 'No native UI', 'Requires GPU'],
    lastUpdated: '2026-05-10'
  },
  {
    id: 'seedream-45',
    name: 'Seedream 4.5',
    category: 'image',
    rating: 8.7,
    description: 'ByteDance\'s strong model for text-heavy imagery and multi-asset consistency. Handles legible, correctly-spelled copy reliably.',
    features: ['Text rendering', 'Multi-asset consistency', '4K output', '1.8s render', 'No watermark'],
    pricing: '$0.035 per image',
    bestFor: 'Brand campaigns, posters, multilingual layouts',
    pros: ['Best text rendering', 'Fast generation', 'Consistency across assets', 'No watermark'],
    cons: ['Limited availability', 'Newer to market'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'coding',
    rating: 9.3,
    description: 'The coding agent that actually understands your codebase. Reasons about entire project structure, tracing dependencies across multiple files.',
    features: ['Codebase understanding', 'Dependency tracing', 'Breaking change detection', 'Terminal-first', 'CRUD scaffolding'],
    pricing: '$20/month bundled with Claude Pro',
    bestFor: 'Developers, engineers, coding teams',
    pros: ['Understands project structure', 'Flags breaking changes', 'Produces runnable code', 'Best value in AI coding'],
    cons: ['Terminal-first approach', 'Can over-edit large files'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'coding',
    rating: 9.1,
    description: 'VS Code-based AI coding assistant with best-in-class features like plan mode, debug mode, and semantic search.',
    features: ['Plan mode', 'Debug mode', 'In-app browser', 'Semantic search', 'Multi-model support'],
    pricing: 'Usage-based, ~$200-500/month for heavy users',
    bestFor: 'Professional developers, teams',
    pros: ['Best UI/UX', 'Plan mode feature', 'Debug integration', 'VS Code extensions'],
    cons: ['Expensive for heavy use', 'Middleman pricing'],
    lastUpdated: '2026-05-15'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'coding',
    rating: 8.8,
    description: 'The original AI pair programmer. Integrated into VS Code and JetBrains with broad language support.',
    features: ['Code completion', 'Natural language to code', 'Multiple IDEs', 'CLI support', 'Security scanning'],
    pricing: '$19/month, $9/month for students',
    bestFor: 'Developers, students, enterprise teams',
    pros: ['Broad language support', 'IDE integration', 'Affordable', 'Enterprise features'],
    cons: ['Less context awareness', 'Occasional hallucinations'],
    lastUpdated: '2026-05-01'
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    category: 'writing',
    rating: 9.0,
    description: 'AI-powered paraphrasing tool that transforms scattered thoughts into polished prose. Preserves personal voice while improving clarity.',
    features: ['Context-based rewrite', 'Tone switching', 'AI continue writing', 'Multilingual', 'Summarization'],
    pricing: 'Free tier (10 rewrites/day), paid from $6.99/month',
    bestFor: 'Writers, bloggers, non-native speakers',
    pros: ['Preserves personal voice', 'Spices feature', 'Seamless integration', 'Effective summarization'],
    cons: ['Free tier limited', 'Sentence-level focus only'],
    lastUpdated: '2026-06-10'
  },
  {
    id: 'grammarly-go',
    name: 'Grammarly Go',
    category: 'writing',
    rating: 8.7,
    description: 'Advanced AI writing assistant that checks grammar, style, and tone. Integrated across browsers, docs, and mobile.',
    features: ['Grammar checking', 'Tone adjustment', 'AI writing suggestions', 'Plagiarism check', 'Cross-platform'],
    pricing: 'Free tier, paid from $12/month',
    bestFor: 'Professionals, students, content creators',
    pros: ['Best grammar checking', 'Cross-platform', 'Tone adjustment', 'Plagiarism detection'],
    cons: ['AI suggestions can be repetitive', 'Premium features expensive'],
    lastUpdated: '2026-05-20'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'writing',
    rating: 8.6,
    description: 'Built-in AI assistant within Notion workspace. Helps with writing, summarizing, and organizing content.',
    features: ['Content writing', 'Summarization', 'Translation', 'Action items', 'Workspace integration'],
    pricing: 'Free with Notion Plus ($8/month)',
    bestFor: 'Notion users, teams, content managers',
    pros: ['Deep workspace integration', 'Multi-functional', 'Affordable', 'Good for notes'],
    cons: ['Limited outside Notion', 'Less powerful standalone'],
    lastUpdated: '2026-06-05'
  },
  {
    id: 'sora-2',
    name: 'Sora 2',
    category: 'video',
    rating: 9.4,
    description: 'OpenAI\'s groundbreaking text-to-video model with long-form generation and consistent characters throughout.',
    features: ['Long-form video', 'Consistent characters', 'Text-to-video', 'Image-to-video', 'Storytelling'],
    pricing: 'Limited access, invitation-only',
    bestFor: 'Filmmakers, marketers, storytellers',
    pros: ['Best video quality', 'Consistent storytelling', 'Long-form capability', 'Photorealistic'],
    cons: ['Limited access', 'Expensive', 'Still early'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'runway-gen45',
    name: 'Runway Gen-4.5',
    category: 'video',
    rating: 9.1,
    description: 'The Photoshop of video with professional control over camera movement, effects, and editing.',
    features: ['Director Mode', 'Camera control', 'AI editing', 'Text-to-video', 'Storyboard'],
    pricing: 'Credit-based, $12/month+',
    bestFor: 'Video editors, filmmakers, content creators',
    pros: ['Professional control', 'Director Mode', 'Best editing features', 'Creative effects'],
    cons: ['High learning curve', 'Credit consumption'],
    lastUpdated: '2026-05-15'
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'video',
    rating: 8.8,
    description: 'All-in-one video editing platform with AI tools for creators. The final destination where all AI assets are assembled.',
    features: ['AI editing', 'Text-to-video', 'Templates', 'Collaboration', 'Cross-platform'],
    pricing: 'Freemium',
    bestFor: 'Social media creators, TikTok, YouTube',
    pros: ['Free tier generous', 'Easy to use', 'Template library', 'Great for short-form'],
    cons: ['Less professional features', 'Watermark on free tier'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'morgen',
    name: 'Morgen',
    category: 'productivity',
    rating: 9.2,
    description: 'Best task planner with calendar consolidation for busy individuals. Combines AI-assisted planning with full autonomy.',
    features: ['Calendar consolidation', 'AI planner', 'Frames', 'Task integration', 'Conflict resolution'],
    pricing: '$15/month',
    bestFor: 'Professionals, busy individuals',
    pros: ['Best overall planner', 'AI-assisted scheduling', 'Calendar sync', 'Full control'],
    cons: ['No team features', 'Pricey for individuals'],
    lastUpdated: '2026-05-20'
  },
  {
    id: 'reclaim-ai',
    name: 'Reclaim AI',
    category: 'productivity',
    rating: 8.9,
    description: 'Smart planner that automatically schedules around priorities, habits, and meetings.',
    features: ['Automatic scheduling', 'Priority-based', 'Habit-aware', 'Calendar automation', 'Team features'],
    pricing: 'Free, paid from $10/month',
    bestFor: 'Teams, individuals, Google Calendar users',
    pros: ['Free tier available', 'Automatic scheduling', 'Habit-aware', 'Good for teams'],
    cons: ['Less control', 'Google Calendar focused'],
    lastUpdated: '2026-05-25'
  },
  {
    id: 'perplexity-comet',
    name: 'Perplexity Comet',
    category: 'productivity',
    rating: 8.7,
    description: 'Research agent that browses the web like you would. Navigates pages, fills forms, extracts data autonomously.',
    features: ['Web browsing', 'Data extraction', 'Report compilation', 'Citation', 'Multi-source'],
    pricing: '$20/month',
    bestFor: 'Researchers, analysts, content creators',
    pros: ['Autonomous research', 'Web browsing', 'Cited sources', 'Fast analysis'],
    cons: ['Early stage', 'Occasional errors', 'Requires verification'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    category: 'productivity',
    rating: 9.0,
    description: 'Anthropic\'s flagship AI assistant with the largest context window. Best for deep thinking and complex tasks.',
    features: ['200K+ context', 'Deep analysis', 'Code generation', 'File upload', 'Multi-modal'],
    pricing: '$20/month',
    bestFor: 'Professionals, researchers, developers',
    pros: ['Largest context window', 'Deep analysis', 'Affordable', 'Code capabilities'],
    cons: ['No image generation', 'Less polished UI'],
    lastUpdated: '2026-06-10'
  },
  {
    id: 'chatgpt-pro',
    name: 'ChatGPT Pro',
    category: 'productivity',
    rating: 8.9,
    description: 'OpenAI\'s premium assistant with web browsing, image generation, and advanced reasoning capabilities.',
    features: ['Web browsing', 'DALL-E 3', 'Code interpreter', 'Advanced reasoning', 'Plugins'],
    pricing: '$20/month',
    bestFor: 'General users, developers, content creators',
    pros: ['All-in-one', 'Web browsing', 'Code interpreter', 'Large plugin ecosystem'],
    cons: ['Occasional hallucinations', 'Context limits'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    category: 'productivity',
    rating: 8.8,
    description: 'Google\'s multi-modal AI with strong integration into Google ecosystem. Best for users already in Google Workspace.',
    features: ['Multi-modal', 'Google integration', 'Code generation', 'Image analysis', 'Free tier'],
    pricing: 'Free tier available, paid from $19.99/month',
    bestFor: 'Google users, Workspace customers, developers',
    pros: ['Free tier', 'Google ecosystem', 'Strong multi-modal', 'Good for code'],
    cons: ['Inconsistent quality', 'Less polished'],
    lastUpdated: '2026-05-30'
  },
  {
    id: 'ideogram-3',
    name: 'Ideogram 3.0',
    category: 'image',
    rating: 8.4,
    description: 'Specializes in text-to-image conversion with clean, social-media-ready visuals. Best for posters and typography.',
    features: ['Text rendering', 'Typography', 'Social media optimized', 'Style options', 'Quick generation'],
    pricing: 'Free tier, paid from $15/month',
    bestFor: 'Social media creators, poster designers',
    pros: ['Best typography', 'Social media ready', 'Fast', 'Clean outputs'],
    cons: ['Limited style options', 'Less editing flexibility'],
    lastUpdated: '2026-05-10'
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'image',
    rating: 8.5,
    description: 'Adobe\'s AI image generator with legal safety and seamless integration into Creative Cloud.',
    features: ['Legal training data', 'Adobe integration', 'Text effects', 'Vector recoloring', 'Font matching'],
    pricing: 'Free tier, paid with Creative Cloud',
    bestFor: 'Adobe users, agencies, commercial use',
    pros: ['Legal safety', 'Adobe ecosystem', 'Good for brands', 'Font matching'],
    cons: ['Less creative', 'Tied to Adobe', 'Mid-tier quality'],
    lastUpdated: '2026-05-20'
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    category: 'video',
    rating: 8.6,
    description: 'Realistic motion and B-roll generation. The value king for long-form clips with impressive temporal consistency.',
    features: ['Long-form video', 'Temporal consistency', 'B-roll generation', 'Realistic motion', 'Affordable'],
    pricing: 'Freemium with expiring credits',
    bestFor: 'Content creators, marketers, filmmakers',
    pros: ['Good value', 'Long-form capability', 'Realistic motion', 'B-roll generation'],
    cons: ['Credits expire', 'Less control', 'Occasional glitches'],
    lastUpdated: '2026-06-05'
  },
  {
    id: 'choppity',
    name: 'Choppity',
    category: 'video',
    rating: 8.5,
    description: 'Text-based video editing for podcasts and talking heads. Loved for lack of "AI junk cuts".',
    features: ['Text-based editing', 'Podcast editing', 'Talking head', 'No AI junk cuts', 'Transcription'],
    pricing: 'Subscription',
    bestFor: 'Podcasters, content creators, editors',
    pros: ['Text-based editing', 'No junk cuts', 'Good for podcasts', 'Easy to use'],
    cons: ['Limited use cases', 'Not for creative editing'],
    lastUpdated: '2026-05-15'
  },
  {
    id: 'codex-53',
    name: 'Codex 5.3',
    category: 'coding',
    rating: 8.9,
    description: 'OpenAI\'s specialized code model with advanced reasoning and multi-language support.',
    features: ['Multi-language', 'Advanced reasoning', 'Code optimization', 'Bug detection', 'Documentation'],
    pricing: 'API-based',
    bestFor: 'Advanced developers, complex projects',
    pros: ['Best code reasoning', 'Multi-language', 'Optimization', 'Bug detection'],
    cons: ['API only', 'Cost at scale', 'Requires integration'],
    lastUpdated: '2026-06-01'
  },
  {
    id: 'zed-ai',
    name: 'Zed AI',
    category: 'coding',
    rating: 8.6,
    description: 'Fast IDE with built-in AI assistance. Uses Vulkan for razor-fast performance.',
    features: ['Fast performance', 'AI assistance', 'Vulkan engine', 'Collaboration', 'Terminal integration'],
    pricing: 'Free for individual use',
    bestFor: 'Developers, power users, teams',
    pros: ['Blazing fast', 'Free for individuals', 'Good AI', 'Collaboration features'],
    cons: ['Less mature', 'Smaller ecosystem', 'AI limited'],
    lastUpdated: '2026-05-25'
  },
  {
    id: 'nano-banana',
    name: 'Nano Banana',
    category: 'image',
    rating: 8.7,
    description: 'Google\'s fastest image model with 1-3 second generation time and top-tier quality.',
    features: ['Fast generation', 'Top-tier quality', 'Google ecosystem', 'Multi-modal', 'Free tier'],
    pricing: 'Free tier, paid from $7.99/month',
    bestFor: 'High-volume workflows, daily creative work',
    pros: ['Fastest generation', 'Good quality', 'Free tier', 'Google integration'],
    cons: ['Less creative', 'Occasional inconsistencies'],
    lastUpdated: '2026-06-10'
  },
  {
    id: 'lyria-3',
    name: 'Lyria 3',
    category: 'video',
    rating: 8.3,
    description: 'Google\'s AI music generator that creates high-fidelity audio tracks from text prompts.',
    features: ['Music generation', 'Text-to-audio', '30-second tracks', 'Multiple genres', 'Lyrics generation'],
    pricing: 'Free for Gemini users',
    bestFor: 'Musicians, content creators, marketers',
    pros: ['Free', 'Good quality', 'Lyrics generation', 'Multiple genres'],
    cons: ['Limited length', 'Music only', 'Occasional quality issues'],
    lastUpdated: '2026-02-18'
  },
  {
    id: 'heygpt',
    name: 'HeyGPT',
    category: 'productivity',
    rating: 8.5,
    description: 'Voice-powered AI assistant for hands-free interaction. Works across devices.',
    features: ['Voice interaction', 'Hands-free', 'Multi-device', 'Task automation', 'Natural language'],
    pricing: '$9.99/month',
    bestFor: 'Busy professionals, hands-free use',
    pros: ['Voice control', 'Hands-free', 'Multi-device', 'Affordable'],
    cons: ['Voice recognition issues', 'Limited functionality', 'Occasional errors'],
    lastUpdated: '2026-05-01'
  },
  {
    id: 'aura',
    name: 'Aura',
    category: 'productivity',
    rating: 8.4,
    description: 'AI-powered personal assistant that learns your habits and preferences over time.',
    features: ['Personalized', 'Habit learning', 'Proactive', 'Context-aware', 'Multi-task'],
    pricing: '$14.99/month',
    bestFor: 'Professionals, busy individuals',
    pros: ['Highly personalized', 'Proactive', 'Context-aware', 'Learns over time'],
    cons: ['Privacy concerns', 'Requires learning period', 'Expensive'],
    lastUpdated: '2026-05-20'
  },
];

export const faqs = [
  {
    question: "What is the best AI image generator in 2026?",
    answer: "GPT Image 2 leads overall with the best balanced performance and exceptional text rendering. Midjourney v8 remains the best choice for artistic quality, while FLUX.2 Pro excels at photorealism. Your choice depends on your specific needs - whether you prioritize text rendering, artistic style, or photorealism."
  },
  {
    question: "Are there any free AI tools worth using?",
    answer: "Yes! Several excellent free options exist in 2026. CapCut offers a generous free tier for video editing, Google Gemini has free access to its AI assistant, and FLUX.2 can be self-hosted for free. Many premium tools like Wordtune and Grammarly also offer capable free tiers for casual use."
  },
  {
    question: "Which AI writing tool is best for bloggers?",
    answer: "Wordtune is particularly strong for bloggers due to its ability to preserve personal voice while improving clarity. Its 'Spices' feature adds substantive facts and analogies that function as a creative thought partner. Notion AI is also excellent if you already use Notion for content management."
  },
  {
    question: "What AI tool should I use for coding?",
    answer: "Claude Code offers the best value and understanding of codebase structure at $20/month. Cursor provides the best UI/UX with its plan mode and debug integration, though it's more expensive for heavy use. GitHub Copilot remains a solid affordable option at $19/month with broad language support."
  },
  {
    question: "Is Sora 2 available to the public?",
    answer: "As of mid-2026, Sora 2 remains in limited access with invitation-only availability. OpenAI continues to expand access gradually to more users and developers. For most creators, Runway Gen-4.5 and Kling AI offer more accessible alternatives with strong video generation capabilities."
  },
  {
    question: "How do I choose between ChatGPT Pro and Claude Pro?",
    answer: "Choose ChatGPT Pro if you want an all-in-one assistant with web browsing, image generation (DALL-E 3), and a large plugin ecosystem. Choose Claude Pro if you need the largest context window (200K+ tokens), better code understanding, and deeper analytical capabilities at the same $20/month price point."
  },
  {
    question: "What is the best free AI video tool?",
    answer: "CapCut offers the best free video editing experience with AI tools for creators. It includes text-to-video, AI editing features, and a vast template library. The free tier is generous with only occasional watermarks. For more advanced users, Kling AI also has a freemium model with long-form video capabilities."
  },
  {
    question: "Are AI tools replacing human creators?",
    answer: "No, AI tools are augmenting rather than replacing human creators. The most successful creators in 2026 use AI as a force multiplier - handling repetitive tasks, generating ideas, and accelerating workflows while humans provide the creative direction, judgment, and unique voice that AI cannot replicate."
  },
];
