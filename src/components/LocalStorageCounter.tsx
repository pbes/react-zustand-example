import { usePersistedCounterStore } from "../store/persistedCounter"

export default function LocalStorageCounter() {
    const count = usePersistedCounterStore((state) => state.count)
    const increment = usePersistedCounterStore((state) => state.increment)
    const decrement = usePersistedCounterStore((state) => state.decrement)

    return (
        <article className="card">
            <h1>Local Storage Counter</h1>
            <h2>{count}</h2>
            <div role="group">
                <button onClick={decrement}>
                    -1
                </button>
                <button onClick={increment}>
                    +1
                </button>
            </div>
            <h3>Double count: {count * 2}</h3>
        </article>
    )
}