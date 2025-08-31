/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function JavaScriptFundamentals() {
  const [arrayDemo, setArrayDemo] = useState([1, 2, 3, 4, 5]);
  const [objectDemo, setObjectDemo] = useState({
    name: "John",
    age: 25,
    city: "New York",
  });
  const [newItem, setNewItem] = useState("");
  const [counterValue, setCounterValue] = useState(0);
  const [promiseResult, setPromiseResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Array methods demonstration
  const doubledArray = arrayDemo.map((num) => num * 2);
  const filteredArray = arrayDemo.filter((num) => num % 2 === 0);
  const sum = arrayDemo.reduce((acc, num) => acc + num, 0);

  // Destructuring examples
  const [first, second, ...rest] = arrayDemo;
  const { name, age, ...otherProps } = objectDemo;

  // Spread operator examples
  const addToArray = () => {
    if (newItem.trim()) {
      setArrayDemo((prev) => [...prev, Number.parseInt(newItem) || 0]);
      setNewItem("");
    }
  };

  const updateObject = (key: string, value: any) => {
    setObjectDemo((prev) => ({ ...prev, [key]: value }));
  };

  // Higher-order functions
  const createMultiplier = (factor: number) => (num: number) => num * factor;
  const multiplyByThree = createMultiplier(3);

  // Closures example
  const createCounter = () => {
    let count = 0;
    return () => ++count;
  };

  const counter = createCounter();

  // Async/Promise example
  const simulateAsyncOperation = async () => {
    setLoading(true);
    try {
      // Simulate API call
      const result = await new Promise<string>((resolve) => {
        setTimeout(() => resolve(`Result: ${Math.random().toFixed(2)}`), 1000);
      });
      setPromiseResult(result);
    } catch (error) {
      setPromiseResult("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">JavaScript Fundamentals</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Array Methods & Immutability</CardTitle>
            <CardDescription>
              Essential array methods: map, filter, reduce, and immutable
              updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Original Array:</h4>
              <div className="flex flex-wrap gap-1 mb-2">
                {arrayDemo.map((num, index) => (
                  <Badge key={index} variant="outline">
                    {num}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  type="number"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add number"
                  className="w-32"
                />
                <Button onClick={addToArray} size="sm">
                  Add
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <strong>map (×2):</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {doubledArray.map((num, index) => (
                    <Badge key={index} variant="secondary">
                      {num}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <strong>filter (even numbers):</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {filteredArray.map((num, index) => (
                    <Badge key={index} variant="default">
                      {num}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <strong>reduce (sum):</strong> <Badge>{sum}</Badge>
              </div>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Immutable array updates</div>
              <div>
                {"setArrayDemo(prev => [...prev, parseInt(newItem) || 0])"}
              </div>
              <div></div>
              <div>// Array methods</div>
              <div>{"arrayDemo.map(num => num * 2)"}</div>
              <div>{"arrayDemo.filter(num => num % 2 === 0)"}</div>
              <div>{"arrayDemo.reduce((acc, num) => acc + num, 0)"}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Object Manipulation & Destructuring</CardTitle>
            <CardDescription>
              Object spread, destructuring, and immutable updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Object:</h4>
              <div className="bg-muted p-2 rounded text-sm font-mono mb-2">
                {JSON.stringify(objectDemo, null, 2)}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => updateObject("age", objectDemo.age + 1)}
                >
                  Age +1
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    updateObject(
                      "city",
                      objectDemo.city === "New York" ? "London" : "New York"
                    )
                  }
                >
                  Toggle City
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Destructuring:</h4>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Array:</strong> first = {first}, second = {second}
                </p>
                <p>
                  <strong>Rest:</strong> [{rest.join(", ")}]
                </p>
                <p>
                  <strong>Object:</strong> name = {name}, age = {age}
                </p>
                <p>
                  <strong>Other props:</strong> {JSON.stringify(otherProps)}
                </p>
              </div>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Object destructuring</div>
              <div>{"const { name, age, ...rest } = objectDemo"}</div>
              <div></div>
              <div>// Array destructuring</div>
              <div>{"const [first, second, ...remaining] = arrayDemo"}</div>
              <div></div>
              <div>// Spread operator</div>
              <div>{"setObjectDemo(prev => ({ ...prev, [key]: value }))"}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Functions & Closures</CardTitle>
            <CardDescription>
              Higher-order functions, closures, and function composition
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Higher-Order Function:</h4>
              <p className="text-sm mb-2">
                multiplyByThree(5) = {multiplyByThree(5)}
              </p>
              <div className="bg-muted p-2 rounded text-sm font-mono">
                {"const createMultiplier = (factor) => (num) => num * factor"}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Closure Example:</h4>
              <div className="flex items-center gap-4">
                <Button onClick={() => setCounterValue(counter())}>
                  Call Counter: {counterValue}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                The counter function remembers its internal count variable
              </p>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Closure</div>
              <div>{"const createCounter = () => {"}</div>
              <div className="ml-4">let count = 0</div>
              <div className="ml-4">{"return () => ++count"}</div>
              <div>{"}"}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Async/Await & Promises</CardTitle>
            <CardDescription>
              Asynchronous JavaScript with promises and async/await
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Button onClick={simulateAsyncOperation} disabled={loading}>
                {loading ? "Loading..." : "Simulate Async Operation"}
              </Button>

              {promiseResult && (
                <div className="p-2 bg-muted rounded">
                  <strong>Result:</strong> {promiseResult}
                </div>
              )}
            </div>

            <div className="space-y-2 text-sm">
              <h4 className="font-semibold">Key Concepts:</h4>
              <ul className="space-y-1">
                <li>
                  • <strong>Promise:</strong> Represents eventual completion of
                  async operation
                </li>
                <li>
                  • <strong>async/await:</strong> Syntactic sugar for working
                  with promises
                </li>
                <li>
                  • <strong>try/catch:</strong> Error handling for async
                  operations
                </li>
                <li>
                  • <strong>finally:</strong> Code that runs regardless of
                  success/failure
                </li>
              </ul>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>{"const fetchData = async () => {"}</div>
              <div className="ml-4">{"try {"}</div>
              <div className="ml-8">const result = await fetch(url)</div>
              <div className="ml-8">return await result.json()</div>
              <div className="ml-4">{"} catch (error) {"}</div>
              <div className="ml-8">console.error(error)</div>
              <div className="ml-4">{"} finally {"}</div>
              <div className="ml-8">setLoading(false)</div>
              <div className="ml-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
