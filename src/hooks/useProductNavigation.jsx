import { useNavigate } from 'react-router-dom';

const useProductNavigation = () => {
  const navigate = useNavigate();

  const handleCardClick = async (id) => {
    try {
      const response = await fetch(`http://192.168.0.111:3001/items/itembyid/${id}`);
      const productDetails = await response.json();
      navigate(`/productDetail/${id}`, { state: { productDetails } });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return handleCardClick;
};

export default useProductNavigation;