import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div id="sidebar" className={isOpen ? "open" : ""}>
      Sidebar
    </div>
  );
}
