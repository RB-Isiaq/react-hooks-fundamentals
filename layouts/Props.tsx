/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

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

// Component demonstrating different types of props
interface UserCardProps {
  name: string;
  age: number;
  email: string;
  isActive?: boolean;
  hobbies: string[];
  onEdit: (field: string, value: any) => void;
  children?: React.ReactNode;
}

function UserCard({
  name,
  age,
  email,
  isActive = false,
  hobbies,
  onEdit,
  children,
}: UserCardProps) {
  return (
    <div className="p-4 border rounded bg-card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{name}</h3>
        <Badge variant={isActive ? "default" : "secondary"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <div>
          <strong>Hobbies:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
            {hobbies.map((hobby) => (
              <Badge key={hobby} variant="outline" className="text-xs">
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <Button size="sm" onClick={() => onEdit("age", age + 1)}>
          Age +1
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onEdit("isActive", !isActive)}
        >
          Toggle Status
        </Button>
      </div>

      {children && <div className="mt-3 p-2 bg-muted rounded">{children}</div>}
    </div>
  );
}

// Component demonstrating prop drilling and lifting state up
interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function Counter({ count, onIncrement, onDecrement }: CounterProps) {
  return (
    <div className="flex items-center gap-4">
      <Button onClick={onDecrement}>-</Button>
      <span className="text-xl font-bold">{count}</span>
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
}

function CounterDisplay({ count }: { count: number }) {
  return (
    <div className="text-center p-4 bg-muted rounded">
      <p className="text-sm text-muted-foreground">
        Current count from parent:
      </p>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}

// Component demonstrating render props pattern
interface RenderPropsExampleProps {
  children: (data: {
    loading: boolean;
    data: string | null;
    refetch: () => void;
  }) => React.ReactNode;
}

function DataProvider({ children }: RenderPropsExampleProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData(`Data fetched at ${new Date().toLocaleTimeString()}`);
      setLoading(false);
    }, 1000);
  };

  return <>{children({ loading, data, refetch: fetchData })}</>;
}

export function PropsDemo() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    isActive: true,
    hobbies: ["Reading", "Gaming", "Cooking"],
  });

  const [count, setCount] = useState(0);
  const [newHobby, setNewHobby] = useState("");

  const handleUserEdit = (field: string, value: any) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const addHobby = () => {
    if (newHobby.trim()) {
      setUser((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, newHobby.trim()],
      }));
      setNewHobby("");
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">
        Props & Component Communication
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Props Types & Patterns</CardTitle>
            <CardDescription>
              Different types of props: primitives, objects, arrays, functions,
              and children
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <UserCard
              name={user.name}
              age={user.age}
              email={user.email}
              isActive={user.isActive}
              hobbies={user.hobbies}
              onEdit={handleUserEdit}
            >
              <p className="text-sm">This is children prop content!</p>
            </UserCard>

            <div>
              <h4 className="font-semibold mb-2">Add Hobby:</h4>
              <div className="flex gap-2">
                <Input
                  value={newHobby}
                  onChange={(e) => setNewHobby(e.target.value)}
                  placeholder="Enter hobby"
                  onKeyPress={(e) => e.key === "Enter" && addHobby()}
                />
                <Button onClick={addHobby}>Add</Button>
              </div>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>interface Props {`{`}</div>
              <div className="ml-4">name: string</div>
              <div className="ml-4">age: number</div>
              <div className="ml-4">isActive?: boolean</div>
              <div className="ml-4">hobbies: string[]</div>
              <div className="ml-4">
                {"onEdit: (field: string, value: any) => void"}
              </div>
              <div className="ml-4">children?: React.ReactNode</div>
              <div>{`}`}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>State Lifting & Prop Drilling</CardTitle>
            <CardDescription>
              Sharing state between components by lifting it to common parent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                Parent Component (manages state):
              </h4>
              <Counter
                count={count}
                onIncrement={handleIncrement}
                onDecrement={() => setCount((prev) => prev - 1)}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Child Component (receives props):
              </h4>
              <CounterDisplay count={count} />
            </div>

            <div className="bg-muted p-3 rounded text-sm">
              <p className="font-medium mb-2">Key Concepts:</p>
              <ul className="space-y-1 text-xs">
                <li>• State lives in the parent component</li>
                <li>• Data flows down via props</li>
                <li>• Events bubble up via callback props</li>
                <li>• Multiple children can share the same state</li>
              </ul>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Parent manages state</div>
              <div>const [count, setCount] = useState(0)</div>
              <div></div>
              <div>// Pass down as props</div>
              <pre>
                {"<Counter count={count} onIncrement={handleIncrement} />"}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Render Props Pattern</CardTitle>
            <CardDescription>
              Sharing logic between components using a function as children
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DataProvider>
              {({ loading, data, refetch }) => (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button onClick={refetch} disabled={loading}>
                      {loading ? "Loading..." : "Fetch Data"}
                    </Button>
                    {data && <Badge variant="outline">{data}</Badge>}
                  </div>

                  <div className="bg-muted p-3 rounded">
                    <p className="text-sm font-medium mb-2">
                      Render Props Benefits:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Reusable logic without component inheritance</li>
                      <li>• Consumer controls how data is rendered</li>
                      <li>• More flexible than higher-order components</li>
                      <li>• Clear data flow and dependencies</li>
                    </ul>
                  </div>
                </div>
              )}
            </DataProvider>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>{"<DataProvider>"}</div>
              <pre className="ml-4">
                {"{ ({ loading, data, refetch }) => ("}
              </pre>
              <div className="ml-8">// Your JSX here</div>
              <pre className="ml-4">{")"}</pre>
              <pre>{"</DataProvider>"}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
