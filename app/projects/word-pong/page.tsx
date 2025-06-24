import Image from 'next/image';
import Link from 'next/link';

export default function WordPongPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Word Pong</h1>
      <p className="text-lg text-gray-300 mb-8">
        LAN multiplayer typing game built with Pygame and sockets.
      </p>

      {/* Project Screenshot */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
        <Image
          src="/pong.png"
          alt="Word Pong Screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">
          Word Pong is a competitive two-player typing game played over LAN. Words fall from the top of the screen, and players must type them accurately to destroy blocks before they reach the bottom. The game is built using Pygame and Python’s socket library, ensuring responsive real-time synchronization between clients.
        </p>
      </div>

      {/* Gameplay */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Gameplay</h2>
        <p className="text-gray-300">
          Each player runs the game locally and connects through a local network. The server randomly generates word blocks that fall at increasing speed. Players must type the correct word to remove it from their screen. The game ends when a player lets too many blocks pile up. It is a fast-paced typing duel built for LAN parties.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Two-player LAN functionality with socket networking</li>
          <li>Real-time synchronization and block falling mechanics</li>
          <li>Dynamic word generation with timer logic</li>
          <li>Smooth Pygame rendering with custom UI</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Python</li>
          <li>Pygame</li>
          <li>Sockets (socket programming)</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          href="https://github.com/vaz17/wordPong"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          View Code on GitHub
        </Link>
        {/* Optional future demo */}
        {/* <Link
          href="https://your-demo-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Play Demo
        </Link> */}
      </div>
    </div>
  );
}

