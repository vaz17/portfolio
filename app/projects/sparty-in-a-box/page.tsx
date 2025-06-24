import Image from 'next/image';
import Link from 'next/link';

export default function SpartyInABoxPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Sparty in a Box</h1>
      <p className="text-lg text-gray-300 mb-8">
        A timed animation engine with interactive popping boxes, synchronized music, and scene transitions. Built in C++ using wxWidgets.
      </p>

      {/* Project Screenshot */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
        <Image
          src="/sparty.png"
          alt="Sparty in a Box Screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">
          Sparty in a Box is a scene-based animation engine built for orchestrating timed visuals and audio effects.
          Inspired by simple music-box mechanics, it features popping animated boxes with synced music, particle effects,
          and transition logic. The app is built in C++ with wxWidgets for GUI rendering and uses a timing system to coordinate multiple animated elements.
        </p>
      </div>

      {/* Animation Engine */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Animation Engine</h2>
        <p className="text-gray-300">
          The animation system is event-driven, using a clock-based timeline to trigger animations, audio, and box pops at precise moments.
          Scenes are modular, and transitions are handled with smooth fading and camera panning. This project emphasizes frame-accurate playback
          and synchronized audio-visual interactions — similar to how cutscenes or idle animations work in games.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Custom animation engine with frame-accurate timing</li>
          <li>Pop-up box animations synced to background music</li>
          <li>Scene-based engine with transitions and triggers</li>
          <li>Object-oriented C++ with wxWidgets for UI and rendering</li>
          <li>Extensible for future scenes or interactive features</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>C++</li>
          <li>wxWidgets</li>
          <li>Custom Animation Framework</li>
          <li>Audio Playback (platform-dependent)</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          href="https://github.com/vaz17/sparty_in_a_box"
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

