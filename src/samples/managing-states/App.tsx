import Index from "./reacting-to-inputs-with-states/Index";

export default function App() {
  console.log("App rendered");
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-500">
      <Index />
    </div>
  );
}
