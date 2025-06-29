import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-200 min-h-screen">
      <nav className="space-y-2">
        <h2 className="text-lg font-semibold mb-2">Navigation</h2>
        <Link href="/" className="block p-2 hover:bg-gray-200 rounded">
          Home
        </Link>
        <Link href="/profile" className="block p-2 hover:bg-gray-200 rounded">
          Profile
        </Link>
        {/* Add more sidebar links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
