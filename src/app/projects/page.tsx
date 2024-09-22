import React from 'react';
import { getData } from '../lib/data';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../../../types';
import { urlFor } from '../lib/sanityImage';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    title: "AZWS Web Studio | Siti Web e App Mobile Personalizzati - Projects",
    description: "Antonio Zuccon Ghiotto è un web developer e web designer con sede a Vicenza, specializzato nella creazione di siti web e app mobile personalizzate. Questa è la pagina dei suoi progetti",
  };

export default async function Projects() {
  const data = await getData();

  return (
    <div className="h-full min-h-screen bg-gray-50 bg-contain bg-center" style={{ backgroundImage: `url(${urlFor(data.backimage4.asset)})` }}>
      <Navbar data={data} />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">I Miei Progetti</h1>
        <div className="space-y-12">
          {data.projects.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-700">
          &copy; {new Date().getFullYear()} Sede legale: Via N. Sauro, 34 - 36100 Vicenza - P.IVA: 04545880249 - email: webstudio.azws@gmail.com - tel: +393493238483
        </div>
      </footer>
    </div>
  );
}
