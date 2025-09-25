
import React from 'react';
import type { Service, Project, BlogPost } from './types';
import { CodeBracketIcon, CpuChipIcon, CubeTransparentIcon, PaintBrushIcon } from './components/icons/FeatureIcons';

export const SERVICES_DATA: Service[] = [
  {
    icon: <CodeBracketIcon />,
    title: 'Custom WordPress Development',
    description: 'Scalable, optimized, and bespoke WordPress websites from scratch to meet your unique business needs.'
  },
  {
    icon: <CpuChipIcon />,
    title: 'AI Agent Automation',
    description: 'Ollama-based Agentic AI solutions to automate repetitive tasks, streamline workflows, and boost productivity.'
  },
  {
    icon: <PaintBrushIcon />,
    title: 'React Frontend Solutions',
    description: 'Fast, modern, and interactive web interfaces built with React for a seamless user experience.'
  },
  {
    icon: <CubeTransparentIcon />,
    title: 'Python Integrations',
    description: 'Custom automation scripts, powerful APIs, and robust backend workflows using Python.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    title: 'AI-Powered E-commerce Platform',
    description: 'Developed a custom WordPress e-commerce site with a React-based product customizer and an Ollama-powered AI agent for personalized customer support.',
    tech: ['WordPress', 'React', 'Ollama', 'Python', 'WooCommerce'],
    liveLink: '#'
  },
  {
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    title: 'Automated Content Generation System',
    description: 'Built a Python-based backend that integrates with a WordPress site to automatically generate and publish SEO-optimized blog posts using Agentic AI workflows.',
    tech: ['Python', 'FastAPI', 'Ollama', 'WordPress REST API'],
  },
  {
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    title: 'Headless CMS Corporate Website',
    description: 'Created a blazing-fast corporate website using WordPress as a headless CMS and a modern frontend built with React and Tailwind CSS for maximum performance.',
    tech: ['React', 'Tailwind CSS', 'Headless WordPress', 'GraphQL'],
    liveLink: '#'
  },
   {
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    title: 'Data Analytics Dashboard',
    description: 'A React-based dashboard that connects to multiple data sources via Python APIs, providing real-time business intelligence and visualizations.',
    tech: ['React', 'D3.js', 'Python', 'Flask', 'REST API'],
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    title: 'How AI Agents Can Automate 80% of Your Business Tasks',
    category: 'AI & Automation'
  },
  {
    title: 'Building Modern WordPress Sites with React and Gutenberg',
    category: 'Web Development'
  },
  {
    title: 'Python Automation for Entrepreneurs: A Starter Guide',
    category: 'Python & Backend'
  },
  {
    title: 'Ollama vs. OpenAI: Building Local, Private AI Agents',
    category: 'AI & Automation'
  }
];
