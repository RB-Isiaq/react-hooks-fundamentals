import { CustomHooksDemo } from "@/layouts/CustomHooks";
import { HooksOverview } from "@/layouts/HooksOverview";
import { JavaScriptFundamentals } from "@/layouts/JsFundamentals";
import { MemoizationDemo } from "@/layouts/Memoization";
import { PropsDemo } from "@/layouts/Props";
import { SideEffectsDemo } from "@/layouts/SideEffects";
import { SlidePresentation } from "@/layouts/SlidePresentation";
import { StateManagementDemo } from "@/layouts/StateManagement";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            React Hooks & JavaScript Fundamentals
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to React hooks, state management, side
            effects, memoization, and JavaScript fundamentals with interactive
            examples.
          </p>
        </header>

        <div className="space-y-16">
          <SlidePresentation />
          <HooksOverview />
          <StateManagementDemo />
          <SideEffectsDemo />
          <MemoizationDemo />
          <CustomHooksDemo />
          <PropsDemo />
          <JavaScriptFundamentals />
        </div>
      </div>
    </div>
  );
}
