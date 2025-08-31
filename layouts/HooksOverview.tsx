"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hooks = [
  {
    name: "useState",
    description: "Manages local component state",
    category: "State",
    example: "const [count, setCount] = useState(0)",
  },
  {
    name: "useReducer",
    description: "Manages complex state with reducer pattern",
    category: "State",
    example: "const [state, dispatch] = useReducer(reducer, initialState)",
  },
  {
    name: "useEffect",
    description: "Handles side effects and lifecycle events",
    category: "Side Effects",
    example: "useEffect(() => { /* effect */ }, [dependencies])",
  },
  {
    name: "useCallback",
    description: "Memoizes functions to prevent unnecessary re-renders",
    category: "Memoization",
    example: "const memoizedCallback = useCallback(() => {}, [deps])",
  },
  {
    name: "useMemo",
    description: "Memoizes expensive calculations",
    category: "Memoization",
    example: "const memoizedValue = useMemo(() => compute(), [deps])",
  },
  {
    name: "Custom Hooks",
    description: "Reusable stateful logic between components",
    category: "Custom",
    example: "const { data, loading } = useCustomHook()",
  },
];

export function HooksOverview() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">React Hooks Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hooks.map((hook) => (
          <Card key={hook.name} className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{hook.name}</CardTitle>
                <Badge variant="secondary">{hook.category}</Badge>
              </div>
              <CardDescription>{hook.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-2 rounded block font-mono">
                {hook.example}
              </code>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
