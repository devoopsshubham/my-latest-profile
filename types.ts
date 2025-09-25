
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
}

export interface BlogPost {
  title: string;
  category: string;
}
