# React Hooks & JavaScript Fundamentals Tutorial

A comprehensive, interactive learning platform built with Next.js 14, TypeScript, and Tailwind CSS. This project provides hands-on examples and demonstrations of React hooks, state management patterns, and modern JavaScript concepts.

## 🎯 Learning Objectives

- Master React hooks: `useState`, `useReducer`, `useEffect`, `useMemo`, `useCallback`
- Understand state management patterns and component communication
- Learn performance optimization through memoization
- Build and use custom hooks for reusable logic
- Explore JavaScript fundamentals: ES6+, async/await, closures
- Practice modern React patterns and best practices

## 📚 What's Included

### Interactive Tutorial Sections

1. **Slide Presentation** - 11-slide interactive presentation covering all concepts
2. **Hooks Overview** - Visual cards explaining each React hook
3. **State Management** - `useState` and `useReducer` with practical examples
4. **Side Effects** - `useEffect` for lifecycle events, data fetching, and cleanup
5. **Memoization** - `useMemo` and `useCallback` for performance optimization
6. **Custom Hooks** - Four different custom hooks with real-world use cases
7. **Props & Communication** - Component patterns and data flow
8. **JavaScript Fundamentals** - ES6+ features and modern JavaScript concepts

### Custom Hooks Demonstrated

- **`useLocalStorage`** - Persist state in browser storage
- **`useApi`** - Handle API calls with loading/error states
- **`useCounterWithHistory`** - Counter with action history tracking
- **`useForm`** - Form state management with validation

### Interactive Features

- **Live Code Examples** - Working demonstrations you can interact with
- **Performance Monitoring** - Console logging to track re-renders
- **Real-time Updates** - Components that respond to user input
- **Navigation Controls** - Easy browsing through tutorial sections

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone or download the project
2. Install dependencies:

   ```bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│ ├── layout.tsx # Root layout with fonts and providers
│ ├── page.tsx # Main tutorial page
│ └── globals.css # Global styles and Tailwind config
├── components/
│ ├── ui/ # shadcn/ui component library (40+ components)
├── hooks/
│ ├── index.ts # Export all custom hooks
├── layouts/
│ ├── SlidePresentation.tsx # Interactive slide deck
│ ├── HooksOverview.tsx # React hooks overview cards
│ ├── StateManagement.tsx # useState & useReducer examples
│ ├── SideEffects.tsx # useEffect demonstrations
│ ├── Memoization.tsx # useMemo & useCallback examples
│ ├── CustomHooks.tsx # Custom hooks implementations
│ ├── Props.tsx # Props and component communication
│ └── jsFundamentals.tsx # Modern JavaScript concepts
└── lib/
└── utils.ts # Utility functions (cn, etc.)
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Typography**: Geist font family

## 📖 How to Use This Tutorial

### For Self-Learning

1. Start with the **Slide Presentation** for a structured overview
2. Work through each **Interactive Section** in order
3. Experiment with the **Live Examples**
4. Check the browser console for performance insights
5. Try modifying the code to see how it affects behavior

### For Teaching/Workshops

1. Use the **Slide Presentation** mode for structured lessons
2. Navigate between sections based on your curriculum
3. Encourage students to interact with the live examples
4. Use the console logs to demonstrate React's behavior
5. Reference the code examples for deeper understanding

## 🔍 Key Concepts Covered

### React Hooks

- **useState**: Managing simple and complex state
- **useReducer**: Complex state logic with actions
- **useEffect**: Side effects, cleanup, and dependencies
- **useMemo**: Expensive computation memoization
- **useCallback**: Function reference stability
- **Custom Hooks**: Reusable stateful logic

### JavaScript Fundamentals

- **ES6+ Features**: Destructuring, spread operator, template literals
- **Array Methods**: map, filter, reduce for immutable updates
- **Async/Await**: Promise handling and error management
- **Closures**: Function scope and memory management
- **Higher-Order Functions**: Function composition patterns

### React Patterns

- **Props**: All prop types and patterns
- **State Lifting**: Sharing state between components
- **Render Props**: Flexible component composition
- **Component Communication**: Data flow and event handling

## 🎯 Best Practices Demonstrated

- **Performance**: Proper use of memoization hooks
- **State Management**: When to use useState vs useReducer
- **Side Effects**: Proper cleanup and dependency management
- **Custom Hooks**: Extracting reusable logic
- **TypeScript**: Type-safe React development
- **Accessibility**: Semantic HTML and ARIA attributes

## 🤝 Contributing

This is an educational project. Feel free to:

- Add more examples or use cases
- Improve explanations or documentation
- Fix bugs or enhance performance
- Suggest new learning modules

## 📝 License

This project is open source and available under the MIT License.

---

**Perfect for**: React developers, bootcamp students, workshop facilitators, and anyone wanting to master React hooks through hands-on practice.
