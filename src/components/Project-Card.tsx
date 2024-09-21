interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    url: string;
    technologies: string[];
}

export default function ProjectCard({ title, description, image, url, technologies }: ProjectCardProps) {
    return (
        <div 
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            className="flex flex-col md:flex-row items-center p-4 my-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img src={image} alt={title} className="w-full h-auto object-cover rounded" />
            </div>
            <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-3">{description}</p>
                <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <li key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}