'use client';

import { useRouter } from 'next/navigation'; // ✅ NOT 'next/router'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Word Pong',
		description: 'LAN multiplayer typing game built with Pygame and sockets.',
    image: '/pong.png',
		link: 'https://github.com/vaz17/wordPong', // this opens GitHub
    internalLink: '/projects/word-pong',
		demo: '', // leave blank if no live demo
	},
	{
		id: 2,
		title: 'Scheduler',
		description: 'Desktop employee scheduling app using PyQt5 and SQLite.',
		image: '/scheduler.png',
		link: 'https://github.com/vaz17/scheduler',
    internalLink: '/projects/scheduler',
		demo: '',
	},
	{
		id: 3,
		title: 'Spartys Boots',
		description: 'C++ logic-based conveyor belt game featuring flip-flops and logic gates built with wxWidgets.',
    image: '/boots.png',
		link: 'https://github.com/vaz17/SpartysBoots',
    internalLink: '/projects/spartys-boots',
		demo: '',
	},
	{
		id: 4,
		title: 'Sparty in a Box',
		description: 'Animated scene engine with timed music and popping boxes.',
		image: '/sparty.png',
		link: 'https://github.com/vaz17/sparty_in_a_box',
    internalLink: '/projects/sparty-in-a-box',
		demo: '',
	},
];

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => router.push(project.internalLink)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden cursor-pointer"
          >
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()} // prevent parent click
                  >
                    View Project
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    onClick={(e) => e.stopPropagation()} // prevent parent click
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

