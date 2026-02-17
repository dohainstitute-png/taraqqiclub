'use client';

import { useState, type ReactNode, Children, isValidElement } from 'react';

interface TabProps {
  title: string;
  children: ReactNode;
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

interface TabsProps {
  children: ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = Children.toArray(children).filter(isValidElement) as React.ReactElement<TabProps>[];

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.props.title}
              onClick={() => setActiveIndex(index)}
              className={`${
                index === activeIndex
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.props.title}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {tabs[activeIndex]}
      </div>
    </div>
  );
}
