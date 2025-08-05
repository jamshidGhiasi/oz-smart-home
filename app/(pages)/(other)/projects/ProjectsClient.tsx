"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import CallToAction from "@/components/shared/content/call-to-action";

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

const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleOutsideClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        const handleTabKey = (e: KeyboardEvent) => {
            if (!modalRef.current) return;

            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        if (open) {
            // Store the currently focused element
            previousActiveElement.current = document.activeElement as HTMLElement;

            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleTabKey);

            // Focus the modal and find the first focusable element
            setTimeout(() => {
                if (modalRef.current) {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0] as HTMLElement;
                    if (firstElement) {
                        firstElement.focus();
                    } else {
                        modalRef.current.focus();
                    }
                }
            }, 0);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleTabKey);

            // Restore focus to the previously focused element when modal closes
            if (previousActiveElement.current) {
                previousActiveElement.current.focus();
            }
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div
                ref={modalRef}
                className="bg-white text-black rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <button
                    className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default function ProjectsClient({ allProjects }: { allProjects: Project[] }) {
    const [filter, setFilter] = useState<string>("All");
    const [selected, setSelected] = useState<Project | null>(null);
    const filterOptions = Array.from(new Set(allProjects.map(p => p.type)));
    const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.type === filter);

    const handleProjectClick = (project: Project) => {
        setSelected(project);
    };

    const handleProjectKeyDown = (e: React.KeyboardEvent, project: Project) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleProjectClick(project);
        }
    };

    return (
        <>
            <ContentWrapper className="relative z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
                <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
                    <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Projects</span></h1>
                    <span className="mb-4 block text-md font-rhd">View Our Work</span>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    <button
                        onClick={() => setFilter("All")}
                        className={`px-4 py-2 rounded-lg border transition-all ${filter === "All"
                            ? "bg-[#E9C31E] text-black border-[#E9C31E] font-bold"
                            : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                            }`}
                    >
                        All
                    </button>
                    {filterOptions.map(opt => (
                        <button
                            key={opt}
                            onClick={() => setFilter(opt)}
                            className={`px-4 py-2 rounded-lg border transition-all ${filter === opt
                                ? "bg-[#E9C31E] text-black border-[#E9C31E] font-bold"
                                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                                }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <div className="relative z-20 text-lg w-full max-w-6xl mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.slug}
                                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#E9C31E] focus:ring-offset-2 focus:ring-offset-black border border-gray-700/50 hover:border-gray-600/50"
                                onClick={() => handleProjectClick(project)}
                                onKeyDown={(e) => handleProjectKeyDown(e, project)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View details for ${project.title}`}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-4 text-white">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-[#E9C31E] uppercase tracking-wider">{project.type}</span>
                                        <span className="text-xs text-gray-400">{project.date}</span>
                                    </div>
                                    <h2 className="font-bold text-lg mb-2 text-white group-hover:text-[#E9C31E] transition-colors duration-300">{project.title}</h2>
                                    <div className="mb-3 text-gray-300 leading-relaxed text-sm line-clamp-2">{project.shortDescription}</div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">Press Enter or Space to view details</span>
                                        <div className="w-6 h-6 rounded-full bg-[#E9C31E]/20 flex items-center justify-center group-hover:bg-[#E9C31E]/30 transition-colors duration-300">
                                            <svg className="w-3 h-3 text-[#E9C31E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selected && (
                    <Modal open={!!selected} onClose={() => setSelected(null)}>
                        <div className="p-6">
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-sm font-medium text-[#E9C31E] uppercase tracking-wider">{selected.type}</span>
                                    <span className="text-sm text-gray-500">{selected.date}</span>
                                </div>
                                <h2 id="modal-title" className="font-bold text-3xl mb-4 text-gray-900">{selected.title}</h2>
                                <div className="text-gray-700 leading-relaxed text-lg">{selected.longDescription}</div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-lg mb-3 text-gray-800">Project Gallery</h3>
                                <div className="flex gap-4 overflow-x-auto pb-4">
                                    {Array.isArray(selected.gallery) && selected.gallery.length > 0 ? (
                                        selected.gallery.map((img, i) =>
                                            img ? (
                                                <Image
                                                    key={i}
                                                    src={img}
                                                    alt={selected.title + " image " + (i + 1)}
                                                    width={400}
                                                    height={300}
                                                    className="rounded-xl shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
                                                />
                                            ) : null
                                        )
                                    ) : (
                                        <div className="flex items-center justify-center w-full py-8 text-gray-500 bg-gray-100 rounded-xl">
                                            <span>No images available</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                className="px-8 py-3 bg-[#E9C31E] text-gray-900 rounded-xl font-bold hover:bg-yellow-400 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                onClick={() => setSelected(null)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelected(null);
                                    }
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                )}
            </ContentWrapper>
            <CallToAction />
        </>
    );
} 