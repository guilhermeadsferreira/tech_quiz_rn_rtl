import Main from "./src";
import useLoadResources from "./src/hooks/useLoadResources";

export default function App() {
  const loadedResources = useLoadResources();

  console.log("loadedResources: ", loadedResources);

  if (!loadedResources) {
    return null;
  }

  return <Main />;
}
