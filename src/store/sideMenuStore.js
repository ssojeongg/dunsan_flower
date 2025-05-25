import { create } from 'zustand';

const useSideMenuStore = create((set) => ({
  sideMenuOpen: false,
  openMenu: () => set({ sideMenuOpen: true }),
  closeMenu: () => set({ sideMenuOpen: false }),
}));

export default useSideMenuStore;
