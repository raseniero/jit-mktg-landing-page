import { Code, Compass, Lightbulb, Layers, Workflow } from "lucide-react";
import Link from "next/link";

const trainingPrograms = [
  {
    id: 1,
    title: "Low-Code/No-Code using Bubbi.io",
    description:
      "Learn to build powerful applications without writing code using the Bubbi.io platform.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Leading SAFe",
    description:
      "Master the Scaled Agile Framework and lead your organization through agile transformations.",
    icon: <Workflow className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Web Development with Bubbio.io",
    description:
      "Create responsive web applications using the intuitive Bubbio.io development platform.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Introduction to Sitecore Fundamentals",
    description:
      "Learn the basics of Sitecore CMS and how to build and manage digital experiences.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Introduction to Prompt Engineering",
    description:
      "Master the art of crafting effective prompts for AI systems to generate desired outputs.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
];

export default function TrainingCatalog() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trainingPrograms.map((program) => (
        <div
          key={program.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
        >
          <div className="text-blue-600 mb-4">{program.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
          <p className="text-gray-600 mb-6">{program.description}</p>
          <Link
            href="#register"
            className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
