export default function Plant({
  plant,
  type,
}: {
  plant: string;
  type: string;
}) {
  return (
    <div>
      <h2>Name: {plant}</h2>
      <h2>Type: {type}</h2>
    </div>
  );
}
