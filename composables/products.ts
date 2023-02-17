import IProductDetails from '~~/interfaces/Product';

export const useProductDetails = () => {
  const productDetails = useState<IProductDetails>('productDetails', () => ({
    name: '',
    brand: '',
    originalPrice: 0,
    actualPrice: 0,
    availableQtd: 0,
    description: '',
    images: [],
  }));

  const setproductDetails = (product: IProductDetails) => {
    productDetails.value = product;
  };

  return {
    productDetails,
    setproductDetails,
  };
};
