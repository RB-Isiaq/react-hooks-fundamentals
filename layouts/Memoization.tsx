/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Expensive calculation function
const expensiveCalculation = (num: number): number => {
  console.log("🔥 Expensive calculation running...");
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += num * i;
  }
  return result;
};

// Child component to demonstrate useCallback
interface ChildProps {
  onIncrement: () => void;
  count: number;
}

const ChildComponent = ({ onIncrement, count }: ChildProps) => {
  console.log("🔄 ChildComponent re-rendered");

  return (
    <div className="p-4 border rounded bg-muted/50">
      <p className="text-sm mb-2">
        Child Component (check console for re-renders)
      </p>
      <p className="mb-2">Count from parent: {count}</p>
      <Button onClick={onIncrement} size="sm">
        Increment from Child
      </Button>
    </div>
  );
};

export function MemoizationDemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [multiplier, setMultiplier] = useState(1);
  const [otherState, setOtherState] = useState(0);

  // useMemo - memoizes expensive calculations
  const expensiveValue = useMemo(() => {
    return expensiveCalculation(multiplier);
  }, [multiplier]); // Only recalculates when multiplier changes

  // Without useMemo (for comparison)
  const nonMemoizedValue = expensiveCalculation(multiplier);

  // useCallback - memoizes functions
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Function reference stays the same

  // Without useCallback (for comparison)
  const handleIncrementNonMemoized = () => {
    setCount((prev) => prev + 1);
  };

  // Filtered list with useMemo
  const items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
  ];
  const filteredItems = useMemo(() => {
    console.log("🔍 Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  }, [input]);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">
        Memoization with useMemo & useCallback
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>useMemo Hook</CardTitle>
            <CardDescription>
              Memoizes expensive calculations to avoid unnecessary
              re-computations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Expensive Calculation:</h4>
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm">Multiplier:</label>
                <Input
                  type="number"
                  value={multiplier}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                  className="w-20"
                />
              </div>
              <div className="space-y-2">
                <div>
                  <Badge variant="default">
                    Memoized Result: {expensiveValue}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Open console and change other state - memoized value won't
                  recalculate
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Filtered List:</h4>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Filter fruits..."
                className="mb-2"
              />
              <div className="flex flex-wrap gap-1">
                {filteredItems.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setOtherState((prev) => prev + 1)}
              variant="outline"
            >
              Change Other State ({otherState})
            </Button>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>const memoizedValue = useMemo(() =&gt; {`{`}</div>
              <div className="ml-4">
                return expensiveCalculation(multiplier)
              </div>
              <div>{`}`}, [multiplier])</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>useCallback Hook</CardTitle>
            <CardDescription>
              Memoizes functions to prevent unnecessary child re-renders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Parent Component:</h4>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-lg">Count: {count}</span>
                <Button onClick={handleIncrement}>Increment</Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Child with useCallback:</h4>
              <ChildComponent onIncrement={handleIncrement} count={count} />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Performance Tip:</h4>
              <p className="text-sm text-muted-foreground">
                useCallback prevents the child component from re-rendering when
                the parent's other state changes, because the function reference
                remains stable.
              </p>
            </div>

            <Button
              onClick={() => setOtherState((prev) => prev + 1)}
              variant="outline"
            >
              Change Other State ({otherState})
            </Button>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>const memoizedCallback = useCallback(() =&gt; {`{`}</div>
              <div className="ml-4">setCount(prev =&gt; prev + 1)</div>
              <div>{`}`}, [])</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
