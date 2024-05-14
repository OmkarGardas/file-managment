import { useState } from "react";
import "./App.css";
import explorer from "./FolderData/folderData";
import Folder from "./components/Folder/Folder";
import useTraverseTree from "./hook/use-traverse-hook";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree)
  };
  return (
    <>
      <div>
        <Folder explorer={explorerData} handleInsertNode={handleInsertNode}/>
      </div>
    </>
  );
}

export default App;
