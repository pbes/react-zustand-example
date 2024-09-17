import { create } from 'zustand';
import { CounterStore } from '../api/counter';

export const useCounterStore = create<CounterStore>((set, get) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
    computed: {
        get doubleCount() {
            return get().count * 2;
        }
    }
}));