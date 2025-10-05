export default function Card() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Card Title</h2>
      <figure>
        <img
          className="w-full h-48 object-cover rounded-md"
          src="/path/to/image.jpg"
          alt="Card Image"
        />
        <figcaption className="mt-2 text-sm text-gray-500">
          This is a description of the card content.
        </figcaption>
      </figure>
    </div>
  );
}
