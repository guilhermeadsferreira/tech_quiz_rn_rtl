import Main from "./src";
import useLoadResources from "./src/hooks/useLoadResources";

export default function App() {
  const loadedResources = useLoadResources();

  if (!loadedResources) {
    return null;
  }

  return <Main />;
}
