import create from "zustand";

interface IGlobalStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
  showGameOverModal: boolean;
  setShowGameOverModal: (value: boolean) => void;
}

const useGlobalStore = create<IGlobalStore>((set) => ({
  loading: false,
  setLoading: (value) => {
    set(() => ({ loading: value }));
  },
  showGameOverModal: false,
  setShowGameOverModal: (value) => {
    set(() => ({ showGameOverModal: value }));
  },
}));

export { useGlobalStore };
