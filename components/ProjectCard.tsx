import Image from "next/image";

interface ProjectCardProps {
  projectName: string;
  developerName: string;
  imageUrl: string;
  content: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  developerName,
  imageUrl,
  content,
  projectLink,
}) => {
  return (
    <div className="border rounded-lg shadow-sm p-6 max-w-md mx-auto">
      <Image
        src={imageUrl}
        alt={`${projectName} Image`}
        width={128}
        height={128}
      />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-slate-50">{projectName}</h2>
        <h3 className="text-lg text-gray-300">{developerName}</h3>
        <p className="text-md text-gray-400 mt-4">{content}</p>
      </div>
      <div className="mt-6">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;