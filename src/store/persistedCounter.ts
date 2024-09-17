import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CounterStore } from '../api/counter';

export const usePersistedCounterStore = create<Omit<CounterStore, "computed">>()(
    persist(
        (set, get) => ({
            count: 0,
            increment: () => set(() => ({ count: get().count + 1 })),
            decrement: () => set(() => ({ count: get().count - 1 })),
        }),
        {
            name: 'counter-store',
        }
    )
)