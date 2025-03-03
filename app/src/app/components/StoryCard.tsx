import Image from "next/image";

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

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Số sao đầy
    const hasHalfStar = rating % 1 !== 0; // Kiểm tra có nửa sao không
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Số sao rỗng

    return (
      <div className="flex items-center">
        {/* Sao đầy */}
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
        {/* Nửa sao */}
        {hasHalfStar && <span className="text-yellow-400 text-lg">☆</span>}
        {/* Sao rỗng */}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i + fullStars} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-transparent hover:border-red-300 shadow-md border border-gray-50 rounded-xl overflow-hidden flex flex-col">
      {/* Ảnh Cố Định */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        <Image
          src={story.coverImage || "/placeholder.svg"}
          alt={story.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Nội Dung */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-600 dark:text-white line-clamp-2">
          {story.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white">{story.author}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-gray-500 dark:text-white">
            📖 {story.chapters} chương
          </p>
          {story.rating !== null && (
            <div className="flex items-center gap-2">
              {renderStars(story.rating)}
              <span className="text-sm text-gray-600 dark:text-white">
                ({story.rating.toFixed(1)})
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
