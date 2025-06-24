import Image from 'next/image';
import Link from 'next/link';

export default function SchedulerPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Scheduler</h1>
      <p className="text-lg text-gray-300 mb-8">
        A desktop scheduling app built with PyQt5 and SQLite. It helps managers generate weekly employee schedules based on staff availability and shift constraints.
      </p>

      {/* Project Screenshot */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
        <Image
          src="/scheduler.png"
          alt="Scheduler App Screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300">
          Scheduler is a local desktop app designed for small teams and managers. With a drag-and-drop GUI and database-backed logic, it simplifies shift generation by accounting for employee preferences and availability. Built with PyQt5 for the UI and SQLite for storage, it’s optimized for speed and usability without relying on cloud services.
        </p>
      </div>

      {/* How It Works */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <p className="text-gray-300">
          Managers input availability and role preferences through form-based dialogs. The app uses logical rules and constraints to generate valid schedules automatically, preventing double-bookings and respecting time-off requests. Users can review, adjust, and export the final schedule in a clean printable format.
        </p>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Drag-and-drop GUI with PyQt5</li>
          <li>Availability input with form validation</li>
          <li>SQLite database for local persistence</li>
          <li>Auto-scheduling logic with customizable constraints</li>
          <li>Schedule export to PDF or print format</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Python</li>
          <li>PyQt5</li>
          <li>SQLite</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link
          href="https://github.com/vaz17/scheduler"
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

