import ProductCard from '../ProductCard';
import productImg from '@assets/stock_images/elegant_minimal_dres_318cf44a.jpg';

export default function ProductCardExample() {
  return (
    <div className="max-w-xs">
      <ProductCard
        id="1"
        image={productImg}
        name="Minimal Dress"
        price="120"
      />
    </div>
  );
}
