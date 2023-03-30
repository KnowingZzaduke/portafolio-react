import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

export function Content() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
