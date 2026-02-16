'use client';

const navItems = [
  { key: 'home', icon: '🏠' },
  { key: 'discover', icon: '🧭' },
  { key: 'library', icon: '📚' },
  { key: 'profile', icon: '👤' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-around border-t bg-white">
      {navItems.map((item) => (
        <div key={item.key} className="flex flex-col items-center gap-1">
          <div className="text-2xl">{item.icon}</div>
        </div>
      ))}
    </nav>
  );
}
