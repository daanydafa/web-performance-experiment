export default function CategoryNav() {
  const categories = ["Teknologi", "Politik", "Ekonomi", "Hiburan", "Olahraga", "Kesehatan"];

  return (
    <nav className="overflow-x-auto whitespace-nowrap border-b px-4 py-2 bg-white">
      <ul className="flex gap-4 text-sm text-gray-700">
        {categories.map((category, index) => (
          <li
            key={index}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 cursor-default"
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
