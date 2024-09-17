import { useCounterStore } from "../store/counter"

export default function Counter() {
    const count = useCounterStore((state) => state.count)
    const doubleCount = useCounterStore((state) => state.computed.doubleCount)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

    return (
        <article className="card">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div role="group">
                <button onClick={decrement}>
                    -1
                </button>
                <button onClick={increment}>
                    +1
                </button>
            </div>
            <h3>Double value: {doubleCount}</h3>
        </article>
    )
}