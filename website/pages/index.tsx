import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  prizes: { name: string; icon: string }[];
}

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
}

const projects: Project[] = [
  {
    name: "EthDrive",
    description:
      "Description description description description description description description description description description description description description description description",
    prizes: [
      { name: "ETHGlobal Superhack 2024", icon: "🥇" },
      { name: "ETHGlobal 🏆 Superhack 2024 Finalist", icon: "" },
      { name: "Optimism: Fork $OP", icon: "" },
      { name: "Base: Best build for onchain on Base", icon: "" },
      { name: "Worldcoin: Get Subscriptions with World ID & Weth", icon: "" },
      {
        name: "Forefront: Best use of Frames on the Superchain 3rd place",
        icon: "",
      },
      { name: "Celo: Best dApp Built for MiniPay 1st place", icon: "" },
      { name: "Chainlink: Best use of Chainlink CCIP", icon: "" },
      { name: "Blocknative: Build a dapp with Virtual Txnhash", icon: "" },
      { name: "Use Blocknative Block Explorer!", icon: "" },
      { name: "Conduit: Best RollUp on Conduit 1st place", icon: "" },
      { name: "Scroll: Best use of Scroll's 1st Place", icon: "" },
    ],
  },
  {
    name: "Ethereum Image Service",
    description:
      "Description description description description description description description description description description description description description description description",
    prizes: [
      { name: "Onchain Summer Buildathon", icon: "🏆" },
      { name: "Creator Tool Finalist", icon: "" },
      { name: "OnchainKit integration", icon: "" },
      { name: "Verifications integration", icon: "" },
    ],
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "A Concept of Hypercasual Finance",
    description:
      "Description description description description description description description description description description description description description description description",
    date: "09.18.2024",
    author: "By consome",
  },
  {
    title: "A Concept of Hypercasual Finance",
    description:
      "Description description description description description description description description description description description description description description description",
    date: "09.18.2024",
    author: "By consome",
  },
  {
    title: "A Concept of Hypercasual Finance",
    description:
      "Description description description description description description description description description description description description description description description",
    date: "09.18.2024",
    author: "By consome",
  },
];

// Header Component
const Header = () => (
  <header className="border-b border-gray-200 py-4">
    <nav className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Heterod0x</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="#about" className="hover:underline">
            Ab0ut
          </Link>
        </li>
        <li>
          <Link href="#team" className="hover:underline">
            Team
          </Link>
        </li>
        <li>
          <Link href="#portfolio" className="hover:underline">
            P0rtf0li0
          </Link>
        </li>
        <li>
          <Link href="#writing" className="hover:underline">
            Writing
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}
// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <div key={index} className="mb-8 flex">
    <div className="w-24 h-24 bg-blue-600 mr-4 flex-shrink-0"></div>
    <div>
      <h4 className="font-bold flex items-center">
        {project.name}
        <Link href="#" className="ml-2 text-sm text-blue-600 hover:underline">
          Website
        </Link>
        {index === 1 && <span className="ml-2 text-sm text-blue-600">x</span>}
      </h4>
      <p className="text-sm mb-2">{project.description}</p>
      <div className="text-sm">
        <span className="font-bold">Prizes</span>
        {project.prizes.map((prize, prizeIndex) => (
          <div key={prizeIndex}>
            {prize.icon && <span className="mr-1">{prize.icon}</span>}
            {prize.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface PortfolioSectionProps {
  projects: Project[];
}

// PortfolioSection Component
const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => (
  <section id="portfolio" className="mb-12">
    <h3 className="text-lg font-bold mb-4">P0rtf0li0</h3>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} index={index} />
    ))}
  </section>
);

interface BlogPostCardProps {
  post: BlogPost;
}

// BlogPostCard Component
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <div className="mb-8 flex">
    <div className="w-24 h-24 bg-gray-200 mr-4 flex-shrink-0 flex items-center justify-center text-xs">
      Thumbnail
    </div>
    <div>
      <h4 className="font-bold">{post.title}</h4>
      <p className="text-sm mb-2">{post.description}</p>
      <p className="text-sm text-gray-600">
        {post.date} | {post.author}
      </p>
    </div>
  </div>
);

interface WritingSectionProps {
  blogPosts: BlogPost[];
}

// WritingSection Component
const WritingSection: React.FC<WritingSectionProps> = ({ blogPosts }) => (
  <section id="writing">
    <h3 className="text-lg font-bold mb-4">Writing</h3>
    {blogPosts.map((post, index) => (
      <BlogPostCard key={index} post={post} />
    ))}
  </section>
);

// Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl mb-4">0nchain Pr0duct Studi0</h2>
        <PortfolioSection projects={projects} />
        <WritingSection blogPosts={blogPosts} />
      </main>
    </div>
  );
}
