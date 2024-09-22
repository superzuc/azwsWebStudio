import { Project } from '../../../types';
import { getAssetUrl } from '../lib/sanityImage';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const videoUrl = getAssetUrl(project.video.asset._ref);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Video con object-contain per gestire correttamente i video verticali */}
        <video
          src={videoUrl}
          controls
          className="w-full lg:w-1/2 max-h-[500px] mx-auto lg:max-h-[400px] object-contain"
        />
        <div className="p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
