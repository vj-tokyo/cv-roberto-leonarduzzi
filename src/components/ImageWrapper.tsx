import React from "react";

interface ImageWrapperProps {
  src?: string;
  alt?: string;
  onImageClick?: (src: string, alt?: string) => void;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  onImageClick,
}) => (
  <div>
    <img
      src={src}
      alt={alt}
      className="w-full rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer hover:scale-[1.02] hover:opacity-95"
      loading="lazy"
      onClick={() => onImageClick && onImageClick(src || "", alt)}
    />
    {alt && (
      <div className="mt-2 text-sm text-gray-600 bg-white/50 p-4 text-left italic leading-relaxed rounded-sm">
        {alt}
      </div>
    )}
  </div>
);

export default ImageWrapper;
