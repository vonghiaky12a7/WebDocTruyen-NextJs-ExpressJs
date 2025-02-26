"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Story {
  storyId: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genreIds: number[];
  chapters: number;
  rating: number | null;
  releaseDate: string;
}

export default function StoryList() {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8092/stories");
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const data = await response.json();
        setStories(data);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching stories. Please try again later.");
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto my-10 px-6">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto my-10 px-6 text-red-500">{error}</div>
    );
  }

  return (
    <section className="container mx-auto my-10 px-6">
      <h2 className="text-2xl font-bold mb-4">Truyện Mới Cập Nhật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stories.map((story) => (
          <div
            key={story.storyId}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={story.coverImage || "/placeholder.svg"}
              alt={story.title}
              width={200}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{story.title}</h3>
              <p className="text-sm text-gray-600">{story.author}</p>
              <p className="text-sm text-gray-500 mt-1">
                Chapters: {story.chapters}
              </p>
              {story.rating !== null && (
                <p className="text-sm text-yellow-500 mt-1">
                  Rating: {story.rating.toFixed(1)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
