export type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    computed: {
        doubleCount: number;
    };
}