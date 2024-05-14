import { useState } from "react";
const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    folder: null,
  });
  const handleFolderFileInput = (e, is_folder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      folder: is_folder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //add logic
      handleInsertNode(explorer.id, e.target.value, showInput.folder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div className="rootFolder">
        <div className="folder">
          <h3
            style={{ fontWeight: "Normal", cursor: "pointer" }}
            onClick={() => setExpand(!expand)}
          >
            📁 {explorer.name}
          </h3>
          <div>
            <button onClick={(e) => handleFolderFileInput(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleFolderFileInput(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.folder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return (
              <div key={exp.id}>
                <Folder explorer={exp} handleInsertNode={handleInsertNode} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>📄 {explorer.name}</div>;
  }
};

export default Folder;
