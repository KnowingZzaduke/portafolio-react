import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
export function App() {
  return (
    <div className="content_components">
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}
