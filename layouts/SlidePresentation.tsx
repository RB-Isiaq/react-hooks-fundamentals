/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "React Hooks & JavaScript Fundamentals",
    subtitle: "A Comprehensive Tutorial for React Developers",
    content: (
      <div className="text-center space-y-6">
        <div className="text-6xl">⚛️</div>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Master React's foundational concepts through hands-on examples
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">useState</Badge>
            <Badge variant="secondary">useReducer</Badge>
            <Badge variant="secondary">useEffect</Badge>
            <Badge variant="secondary">useMemo</Badge>
            <Badge variant="secondary">useCallback</Badge>
            <Badge variant="secondary">Custom Hooks</Badge>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "What are React Hooks?",
    subtitle: "Functions that let you use state and lifecycle features",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-green-600">
              ✅ With Hooks (Functional)
            </h4>
            <pre className="bg-muted p-4 rounded font-mono text-sm">
              {`function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-orange-600">
              ❌ Without Hooks (Class)
            </h4>
            <pre className="bg-muted p-4 rounded font-mono text-sm">
              {`class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  
  render() {
    return (
      <button onClick={() => 
        this.setState({count: this.state.count + 1})
      }>
        Count: {this.state.count}
      </button>
    )
  }
}`}
            </pre>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Key Benefits:</strong> Simpler syntax, better reusability,
            easier testing, and improved performance optimization
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "useState Hook",
    subtitle: "Managing local component state",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Basic Syntax</h4>
            <div className="bg-muted p-4 rounded font-mono text-sm space-y-2">
              <div className="text-green-600">// Declare state variable</div>
              <div>{"const [state, setState] = useState(initialValue)"}</div>
              <div className="text-green-600">// Update state</div>
              <div>{"setState(newValue)"}</div>
              <div>{"setState(prev => prev + 1)"}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Common Patterns</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">
                  Number state
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"const [count, setCount] = useState(0)"}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm text-green-800 dark:text-green-200">
                  Object state
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"const [user, setUser] = useState(null)"}
                </pre>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                <div className="font-semibold text-sm text-purple-800 dark:text-purple-200">
                  Array state
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"const [items, setItems] = useState([])"}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded">
          <p className="text-yellow-800 dark:text-yellow-200">
            <strong>Remember:</strong> State updates are asynchronous and may be
            batched. Use functional updates when the new state depends on the
            previous state.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "useReducer Hook",
    subtitle: "Managing complex state with predictable updates",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">When to use useReducer?</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Complex state logic with multiple sub-values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>State transitions depend on previous state</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Multiple components need to update the same state</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>State updates follow predictable patterns</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Basic Pattern</h4>
            <pre className="bg-muted p-4 rounded font-mono text-sm">
              {`// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
      return state
  }
}

// In component
const [state, dispatch] = useReducer(reducer, { count: 0 })`}
            </pre>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded">
          <p className="text-purple-800 dark:text-purple-200">
            <strong>Pro Tip:</strong> useReducer is like useState's more
            powerful cousin - use it when useState becomes unwieldy!
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "useEffect Hook",
    subtitle: "Handling side effects and lifecycle events",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded">
            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
              No Dependencies
            </h4>
            <pre className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded">
              {`useEffect(() => {
  // Runs after every render
})`}
            </pre>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
            <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
              Empty Dependencies
            </h4>
            <pre className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded">
              {`useEffect(() => {
  // Runs once on mount
}, [])`}
            </pre>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded">
            <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200">
              With Dependencies
            </h4>
            <pre className="font-mono text-xs bg-white dark:bg-gray-800 p-2 rounded">
              {`useEffect(() => {
  // Runs when deps change
}, [dep1, dep2])`}
            </pre>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Common Use Cases</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="bg-muted p-3 rounded">
                <div className="font-semibold text-sm">Data Fetching</div>
                <div className="text-xs text-muted-foreground">
                  API calls, loading external data
                </div>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-semibold text-sm">Subscriptions</div>
                <div className="text-xs text-muted-foreground">
                  WebSocket connections, event listeners
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-muted p-3 rounded">
                <div className="font-semibold text-sm">Timers</div>
                <div className="text-xs text-muted-foreground">
                  setInterval, setTimeout
                </div>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-semibold text-sm">DOM Manipulation</div>
                <div className="text-xs text-muted-foreground">
                  Focus management, scroll position
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
          <p className="text-red-800 dark:text-red-200">
            <strong>Important:</strong> Always clean up side effects to prevent
            memory leaks! Return a cleanup function from useEffect.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "useMemo & useCallback",
    subtitle: "Performance optimization through memoization",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded">
            <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
              useMemo
            </h4>
            <p className="text-sm mb-3">Memoizes expensive calculations</p>
            <pre className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
              {`const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])`}
            </pre>
            <div className="mt-3 text-xs text-blue-700 dark:text-blue-300">
              ✓ Use for expensive computations
              <br />✓ Prevents recalculation on every render
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
              useCallback
            </h4>
            <p className="text-sm mb-3">Memoizes function references</p>
            <pre className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
              {`const handleClick = useCallback(() => {
  doSomething(value)
}, [value])`}
            </pre>
            <div className="mt-3 text-xs text-green-700 dark:text-green-300">
              ✓ Prevents child re-renders
              <br />✓ Stable function references
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">When NOT to use memoization</h4>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded">
            <ul className="space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
              <li>
                • Simple calculations (adding numbers, string concatenation)
              </li>
              <li>• Values that change on every render anyway</li>
              <li>• When the dependency array changes frequently</li>
              <li>• Premature optimization without performance issues</li>
            </ul>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded">
          <p className="text-purple-800 dark:text-purple-200">
            <strong>Remember:</strong> Memoization has overhead! Only use it
            when you have actual performance problems.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Custom Hooks",
    subtitle: "Reusable stateful logic between components",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">What are Custom Hooks?</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>JavaScript functions that start with "use"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Can call other hooks inside them</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Share stateful logic between components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Extract complex logic into reusable functions</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Example: useCounter</h4>
            <pre className="bg-muted p-4 rounded font-mono text-sm">
              {`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}`}
            </pre>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Popular Custom Hook Patterns</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded">
              <h5 className="font-semibold text-sm mb-2">useLocalStorage</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Sync state with localStorage
              </p>
              <pre className="font-mono text-xs">
                {
                  'const [value, setValue] = useLocalStorage("key", defaultValue)'
                }
              </pre>
            </div>
            <div className="bg-muted p-4 rounded">
              <h5 className="font-semibold text-sm mb-2">useFetch</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Handle API requests with loading states
              </p>
              <div className="font-mono text-xs">
                {"const { data, loading, error } = useFetch(url)"}
              </div>
            </div>
            <div className="bg-muted p-4 rounded">
              <h5 className="font-semibold text-sm mb-2">useToggle</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Toggle boolean state
              </p>
              <div className="font-mono text-xs">
                {"const [isOpen, toggle] = useToggle(false)"}
              </div>
            </div>
            <div className="bg-muted p-4 rounded">
              <h5 className="font-semibold text-sm mb-2">useDebounce</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Debounce rapidly changing values
              </p>
              <pre className="font-mono text-xs">
                {"const debouncedValue = useDebounce(value, 500)"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Props & Component Communication",
    subtitle: "Passing data and functions between components",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Types of Props</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">
                  Data Props
                </div>
                <pre className="font-mono text-xs mt-1">
                  {'<User name="John" age={25} />'}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm text-green-800 dark:text-green-200">
                  Function Props
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"<Button onClick={() => {}} />"}
                </pre>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                <div className="font-semibold text-sm text-purple-800 dark:text-purple-200">
                  Children Props
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"<Card>{children}</Card>"}
                </pre>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded">
                <div className="font-semibold text-sm text-orange-800 dark:text-orange-200">
                  Render Props
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"<DataProvider render={data => <div>{data}</div>} />"}
                </pre>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Communication Patterns</h4>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-sm mb-2">Parent → Child</div>
                <div className="bg-muted p-3 rounded font-mono text-xs">
                  {"<Child data={someData} />"}
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm mb-2">Child → Parent</div>
                <div className="bg-muted p-3 rounded font-mono text-xs">
                  {"<Child onUpdate={() => {}} />"}
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm mb-2">
                  Sibling Components
                </div>
                <div className="bg-muted p-3 rounded font-mono text-xs">
                  // Lift state up to common parent
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded">
          <p className="text-indigo-800 dark:text-indigo-200">
            <strong>Best Practice:</strong> Keep props simple and focused. If
            you're passing too many props, consider component composition or
            context.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "JavaScript Fundamentals",
    subtitle: "Essential JS concepts for React development",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Array Methods</h4>
            <div className="space-y-2">
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">map()</div>
                <div className="text-xs text-muted-foreground">
                  Transform each element
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"arr.map(item => item * 2)"}
                </pre>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">filter()</div>
                <div className="text-xs text-muted-foreground">
                  Select elements by condition
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"arr.filter(item => item > 5)"}
                </pre>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">reduce()</div>
                <div className="text-xs text-muted-foreground">
                  Accumulate to single value
                </div>
                <div className="font-mono text-xs mt-1">
                  {"arr.reduce((sum, item) => sum + item, 0)"}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">ES6+ Features</h4>
            <div className="space-y-2">
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">Destructuring</div>
                <pre className="font-mono text-xs mt-1">
                  {"const { name, age } = user"}
                </pre>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">Spread Operator</div>
                <pre className="font-mono text-xs mt-1">
                  {"const newArr = [...oldArr, newItem]"}
                </pre>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">Template Literals</div>
                <pre className="font-mono text-xs mt-1">
                  {"`Hello ${name}, you are ${age} years old`"}
                </pre>
              </div>
              <div className="bg-muted p-3 rounded">
                <div className="font-mono text-sm">Arrow Functions</div>
                <pre className="font-mono text-xs mt-1">
                  {"const add = (a, b) => a + b"}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Async JavaScript</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
              <div className="font-semibold text-sm text-red-800 dark:text-red-200 mb-2">
                Promises
              </div>
              <pre className="font-mono text-xs">
                {`fetch(url)
  .then(res => res.json())
  .catch(err => console.error(err))`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
              <div className="font-semibold text-sm text-green-800 dark:text-green-200 mb-2">
                Async/Await
              </div>
              <pre className="font-mono text-xs">
                {`try {
  const data = await fetch(url)
  const json = await data.json()
} catch (err) {
  console.error(err)
}`}
              </pre>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
              <div className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">
                Error Handling
              </div>
              <pre className="font-mono text-xs">
                {`const [data, setData] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Best Practices & Common Pitfalls",
    subtitle: "Tips for writing better React code",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-green-600">
              ✅ Best Practices
            </h4>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Use functional updates
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"setCount(prev => prev + 1)"}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Include all dependencies
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"useEffect(() => {}, [dep1, dep2])"}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Clean up side effects
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"return () => clearInterval(timer)"}
                </pre>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Use custom hooks for reusability
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"const { data, loading } = useFetch(url)"}
                </pre>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-red-600">
              ❌ Common Pitfalls
            </h4>
            <div className="space-y-3">
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Mutating state directly
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"state.push(item) // ❌"}
                </pre>
                <div className="font-mono text-xs">
                  {"setState([...state, item]) // ✅"}
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Missing dependencies
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"useEffect(() => fetch(url), []) // ❌"}
                </pre>
                <div className="font-mono text-xs">
                  {"useEffect(() => fetch(url), [url]) // ✅"}
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                <div className="font-semibold text-sm">Infinite re-renders</div>
                <pre className="font-mono text-xs mt-1">
                  {"useEffect(() => setState({})) // ❌"}
                </pre>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                <div className="font-semibold text-sm">
                  Premature optimization
                </div>
                <pre className="font-mono text-xs mt-1">
                  {"useMemo(() => a + b, [a, b]) // ❌"}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded">
          <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
            Key Takeaways
          </h4>
          <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>• Start with useState, move to useReducer for complex state</li>
            <li>• Always include dependencies in useEffect</li>
            <li>• Use memoization only when you have performance issues</li>
            <li>• Extract reusable logic into custom hooks</li>
            <li>• Keep components small and focused</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Thank You!",
    subtitle: "Questions & Discussion",
    content: (
      <div className="text-center space-y-8">
        <div className="text-6xl">🎉</div>
        <div className="space-y-4">
          <p className="text-xl">You've completed the React Hooks tutorial!</p>
          <p className="text-lg text-muted-foreground">
            Now you have a solid foundation in React's core concepts
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">⚛️</div>
            <div className="font-semibold text-sm">React Hooks</div>
          </div>
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-semibold text-sm">State Management</div>
          </div>
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-semibold text-sm">Side Effects</div>
          </div>
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-sm">Performance</div>
          </div>
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">🔧</div>
            <div className="font-semibold text-sm">Custom Hooks</div>
          </div>
          <div className="bg-muted p-4 rounded text-center">
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold text-sm">Best Practices</div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold">Ready for Questions!</p>
          <p className="text-muted-foreground">
            Let's discuss what you've learned
          </p>
        </div>
      </div>
    ),
  },
];

export function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  let interval: NodeJS.Timeout | null = null;
  if (isAutoPlay) {
    interval = setInterval(nextSlide, 10000); // 10 seconds per slide
  }

  const currentSlideData = slides[currentSlide];

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold"> Presentation</h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2"
          >
            {isAutoPlay ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            {isAutoPlay ? "Pause" : "Auto Play"}
          </Button>
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Main Slide */}
      <Card className="min-h-[600px] mb-6">
        <CardHeader className="text-center border-b">
          <CardTitle className="text-2xl">{currentSlideData.title}</CardTitle>
          <CardDescription className="text-lg">
            {currentSlideData.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">{currentSlideData.content}</CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </Button>

        <div className="flex items-center gap-1 md:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`size-2 md:size-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`p-3 text-left rounded border transition-colors ${
              index === currentSlide
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50 hover:bg-muted/50"
            }`}
          >
            <div className="font-semibold text-sm truncate">{slide.title}</div>
            <div className="text-xs text-muted-foreground truncate">
              {slide.subtitle}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
