import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { FC } from 'react';

const Sidebar: FC = () => {
  const { t } = useTranslation();
  
  const navigation = [
    { name: t('nav.home'), href: '/', icon: '🏠' },
    { name: t('nav.builds'), href: '/builds', icon: '🛠️' },
    { name: t('nav.members'), href: '/members', icon: '👥' },
  ];
  return (
    <aside className="w-64 bg-zinc-900/50 backdrop-blur-sm border-r border-zinc-800 flex-shrink-0">
      <nav className="p-6 space-y-3">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => 
              `nav-link flex items-center space-x-4 w-full text-left ${
                isActive ? 'nav-link-active' : ''
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-base">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;