export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 p-4 m-2 rounded-lg">
      <p className="font-bold text-xl text-white">{name}</p>
      <p className="text-sm text-gray-300">
        Buy {quantity} in <span className="text-gray-400">{category}</span>
      </p>
    </li>
  );
}