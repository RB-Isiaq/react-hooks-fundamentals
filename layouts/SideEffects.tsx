/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SideEffectsDemo() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Effect with no dependencies - runs after every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  // Effect with empty dependencies - runs once on mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect with dependencies - runs when dependencies change
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Data fetching effect
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Side Effects with useEffect</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Document Title & Window Resize</CardTitle>
            <CardDescription>
              Effects that run on every render and on mount/unmount
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                Document Title (runs every render):
              </h4>
              <div className="flex items-center gap-4">
                <Button onClick={() => setCount(count + 1)}>
                  Increment Count: {count}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Check the browser tab title - it updates with the count!
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Window Width (runs once on mount):
              </h4>
              <Badge variant="outline">{windowWidth}px</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Resize your browser window to see it update
              </p>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Runs after every render</div>
              <div>useEffect(() =&gt; {`{`}</div>
              <div className="ml-4">document.title = `Count: ${count}`</div>
              <div>{`}`})</div>
              <br />
              <div>// Runs once on mount</div>
              <div>useEffect(() =&gt; {`{`}</div>
              <div className="ml-4">// setup and cleanup</div>
              <div>{`}`}, [])</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timer & Data Fetching</CardTitle>
            <CardDescription>
              Effects with dependencies and async operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                Timer (depends on isRunning):
              </h4>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">{timer}s</span>
                <Button onClick={() => setIsRunning(!isRunning)}>
                  {isRunning ? "Stop" : "Start"}
                </Button>
                <Button onClick={() => setTimer(0)} variant="outline">
                  Reset
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Data Fetching:</h4>
              <Button onClick={fetchPosts} disabled={loading}>
                {loading ? "Loading..." : "Fetch Posts"}
              </Button>

              {posts.length > 0 && (
                <div className="space-y-2 mt-4">
                  {posts.map((post) => (
                    <div key={post.id} className="p-2 border rounded">
                      <h5 className="font-medium text-sm">{post.title}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>// Runs when isRunning changes</div>
              <div>useEffect(() =&gt; {`{`}</div>
              <div className="ml-4">// timer logic</div>
              <div className="ml-4">return () =&gt; cleanup()</div>
              <div>{`}`}, [isRunning])</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
