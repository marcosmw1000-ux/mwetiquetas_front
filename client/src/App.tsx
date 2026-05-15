import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Simulador from "./pages/Simulador";
import ComoFunciona from "./pages/ComoFunciona";
import Contato from "./pages/Contato";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/catalogo" component={Catalogo} />
      <Route path="/simulador" component={Simulador} />
      <Route path="/como-funciona" component={ComoFunciona} />
      <Route path="/contato" component={Contato} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
