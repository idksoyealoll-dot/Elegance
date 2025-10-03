import ClothingRackAnimation from '../ClothingRackAnimation';

export default function ClothingRackAnimationExample() {
  return (
    <ClothingRackAnimation onComplete={() => console.log("Animation complete")} />
  );
}
