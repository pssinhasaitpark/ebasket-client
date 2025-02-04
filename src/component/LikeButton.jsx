import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = ({ productId }) => {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  const [isLiked, setIsLiked] = useState(storedWishlist.includes(productId));

  const toggleLike = () => {
    let updatedWishlist = [...storedWishlist];

    if (isLiked) {
      updatedWishlist = updatedWishlist.filter((id) => id !== productId);
    } else {
      updatedWishlist.push(productId);
    }

    // Update the localStorage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    // Toggle the state
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <FaHeart
        className={`symbol-heart ${isLiked ? 'liked' : ''}`}
        onClick={toggleLike}
        style={{ color: isLiked ? 'red' : 'black' }}
      />
    </div>
  );
};

export default LikeButton;
