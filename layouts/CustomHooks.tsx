"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  useApi,
  useCounterWithHistory,
  useForm,
  useLocalStorage,
} from "@/hooks";

export function CustomHooksDemo() {
  // Using custom hooks
  const [name, setName] = useLocalStorage("user-name", "");
  const [theme, setTheme] = useLocalStorage("app-theme", "light");

  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useApi<any[]>("https://jsonplaceholder.typicode.com/posts?_limit=3");

  const { count, history, increment, decrement, reset } =
    useCounterWithHistory(0);

  const {
    values,
    errors,
    handleChange,
    validate,
    reset: resetForm,
  } = useForm({
    email: "",
    password: "",
  });

  const handleFormSubmit = () => {
    const isValid = validate({
      email: (value) =>
        !value
          ? "Email is required"
          : !value.includes("@")
          ? "Invalid email"
          : undefined,
      password: (value) =>
        !value
          ? "Password is required"
          : value.length < 6
          ? "Password too short"
          : undefined,
    });

    if (isValid) {
      alert("Form is valid!");
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Custom Hooks</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>useLocalStorage Hook</CardTitle>
            <CardDescription>
              Persists state in browser's localStorage with automatic sync
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name (persisted):
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {name && <p className="mt-2">Hello, {name}!</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Theme:</label>
              <div className="flex gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Refresh the page - your preferences are saved!
              </p>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>
                const [value, setValue] = useLocalStorage('key', defaultValue)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>useApi Hook</CardTitle>
            <CardDescription>
              Handles API calls with loading, error, and data states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={refetch} disabled={loading}>
              {loading ? "Loading..." : "Fetch Posts"}
            </Button>

            {error && (
              <div className="p-2 bg-destructive/10 text-destructive rounded">
                Error: {error}
              </div>
            )}

            {posts && (
              <div className="space-y-2">
                {posts.map((post) => (
                  <div key={post.id} className="p-2 border rounded">
                    <h5 className="font-medium text-sm">{post.title}</h5>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>
                const {`{ data, loading, error, refetch }`} = useApi(url)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>useCounterWithHistory Hook</CardTitle>
            <CardDescription>
              Counter with history tracking and multiple actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Button onClick={decrement}>-</Button>
              <span className="text-2xl font-bold">{count}</span>
              <Button onClick={increment}>+</Button>
              <Button onClick={reset} variant="outline">
                Reset
              </Button>
            </div>

            <div>
              <h5 className="font-medium mb-2">History:</h5>
              <div className="flex flex-wrap gap-1">
                {history.map((value, index) => (
                  <Badge key={index} variant="outline">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>
                const {`{ count, history, increment, decrement, reset }`} =
                useCounterWithHistory(0)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>useForm Hook</CardTitle>
            <CardDescription>
              Form state management with validation and error handling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <Input
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter email"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password:
              </label>
              <Input
                type="password"
                value={values.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Enter password"
                className={errors.password ? "border-destructive" : ""}
              />
              {errors.password && (
                <p className="text-sm text-destructive mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <Button onClick={handleFormSubmit}>Submit</Button>
              <Button onClick={resetForm} variant="outline">
                Reset
              </Button>
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
              <div>
                const {`{ values, errors, handleChange, validate }`} =
                useForm(initialValues)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
