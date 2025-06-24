import Image from 'next/image';
import Link from 'next/link';

export default function SpartysBootsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Sparty's Boots</h1>
      <p className="text-lg text-gray-300 mb-8">
        A logic-based conveyor belt puzzle game built in C++ with wxWidgets. Players place logic gates to control Sparty's movement and complete levels.
      </p>

      {/* Project Screenshot */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
        <Image
          src="/boots.png"
          alt="Sparty's Boots Screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">
          Sparty's Boots is a puzzle game where players solve logic challenges using digital components like AND, OR, and NOT gates. The game features a conveyor belt system where players must guide Sparty to safety by wiring together the correct gate combinations. It was developed in C++ using the wxWidgets GUI framework and focuses on logical thinking and timing.
        </p>
      </div>

      {/* How It Works */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Gameplay</h2>
        <p className="text-gray-300">
          Each level starts with a broken circuit and a goal. Players drag and drop logic gates onto a board and wire them up to control motors, switches, and sensors. Once the player runs the simulation, Sparty begins moving across the conveyor system based on the circuit logic. Success means Sparty reaches the goal; failure triggers debugging and iteration.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Drag-and-drop interface with visual logic gates</li>
          <li>Interactive conveyor belt simulation</li>
          <li>Levels with increasing complexity and timing challenges</li>
          <li>Built entirely in C++ using wxWidgets</li>
          <li>Educational focus on digital logic concepts</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>C++</li>
          <li>wxWidgets</li>
          <li>OOP Design Principles</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          href="https://github.com/vaz17/SpartysBoots"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          View Code on GitHub
        </Link>
      </div>
    </div>
  );
}

