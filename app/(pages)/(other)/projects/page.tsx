
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";
import CallToAction from "@/components/shared/content/call-to-action";

export const metadata: Metadata = {
  title: `Projects - See Oz Smart Home's Smart Living Solutions in Action`,
  description: `Discover our smart home projects showcasing innovative solutions. Learn how we enhance residential living. View our project portfolio now.`,
  alternates: {
    canonical: "https://www.ozsmarthome.com.au/projects"
  }
};

type Project = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  gallery: string[];
  type: string;
  suburb: string;
  shortDescription: string;
  longDescription: string;
  content: string;
};

function getAllProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "content/projects");
  if (!fs.existsSync(projectsDir)) return [];
  const projectFolders = fs.readdirSync(projectsDir).filter(f => fs.statSync(path.join(projectsDir, f)).isDirectory());
  return projectFolders.map(folder => {
    const mdPath = path.join(projectsDir, folder, "index.md");
    if (!fs.existsSync(mdPath)) return null;
    const fileContent = fs.readFileSync(mdPath, "utf8");
    const { data, content } = matter(fileContent);
    if (!data.title || !data.coverImage) return null;
    return {
      slug: folder,
      title: data.title,
      date: data.date || '',
      excerpt: data.excerpt || '',
      coverImage: data.coverImage,
      gallery: data.gallery || [],
      type: data.type || 'Other',
      suburb: data.suburb || '',
      shortDescription: data.shortDescription || '',
      longDescription: data.longDescription || '',
      content: content || '',
    };
  }).filter((p): p is Project => !!p);
}

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  return <ProjectsClient allProjects={allProjects} />
}