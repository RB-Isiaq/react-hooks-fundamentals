/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useReducer } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Reducer for complex state management
interface TodoState {
  todos: { id: number; text: string; completed: boolean }[];
  filter: "all" | "active" | "completed";
}

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "SET_FILTER"; filter: TodoState["filter"] };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export function StateManagementDemo() {
  // useState example - simple counter
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useReducer example - todo list
  const [todoState, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: "all",
  });
  const [newTodo, setNewTodo] = useState("");

  const filteredTodos = todoState.todos.filter((todo) => {
    if (todoState.filter === "active") return !todo.completed;
    if (todoState.filter === "completed") return todo.completed;
    return true;
  });

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">State Management</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* useState Demo */}
        <Card>
          <CardHeader>
            <CardTitle>useState Hook</CardTitle>
            <CardDescription>
              Simple state management for primitive values and objects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Counter Example:</h4>
              <div className="flex items-center gap-4">
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <span className="text-2xl font-bold">{count}</span>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Input Example:</h4>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {name && <p className="mt-2">Hello, {name}!</p>}
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono">
              <div>const [count, setCount] = useState(0)</div>
              <div>const [name, setName] = useState('')</div>
            </div>
          </CardContent>
        </Card>

        {/* useReducer Demo */}
        <Card>
          <CardHeader>
            <CardTitle>useReducer Hook</CardTitle>
            <CardDescription>
              Complex state management with predictable state transitions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a todo"
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
              />
              <Button onClick={addTodo}>Add</Button>
            </div>

            <div className="flex gap-2">
              {(["all", "active", "completed"] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={todoState.filter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => dispatch({ type: "SET_FILTER", filter })}
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="space-y-2 max-h-40 overflow-y-auto">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-2 p-2 border rounded"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() =>
                      dispatch({ type: "TOGGLE_TODO", id: todo.id })
                    }
                  />
                  <span
                    className={
                      todo.completed ? "line-through text-muted-foreground" : ""
                    }
                  >
                    {todo.text}
                  </span>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", id: todo.id })
                    }
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>

            <div className="bg-muted p-3 rounded text-sm font-mono">
              <div>
                const [state, dispatch] = useReducer(reducer, initialState)
              </div>
              <pre>dispatch({`{ type: 'ADD_TODO', text: 'Learn React' }`})</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
