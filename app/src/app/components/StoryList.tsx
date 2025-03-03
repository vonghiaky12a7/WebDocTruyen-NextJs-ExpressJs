"use client";

import { useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import LoadingError from "./LoadingError";

interface Story {
  storyId: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  genreIds: number[];
  chapters: number;
  rating: number | 0;
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

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Truyện Mới Cập Nhật</h2>
      <LoadingError isLoading={isLoading} error={error} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stories.map((story) => (
          <StoryCard key={story.storyId} story={story} />
        ))}
      </div>
    </section>
  );
}
