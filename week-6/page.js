// /app/week-6/page.js
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}