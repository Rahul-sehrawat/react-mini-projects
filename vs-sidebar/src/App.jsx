import { useState } from "react"
import Folder from "./components/Folder"
import explorer from "./data/folderData"
import './App.css'
import useTraverseTree from "./Hooks/use-traverse-tree"

function App() {
  const [explorerData,setExplorerData] = useState(explorer)
  const {insertNode} = useTraverseTree();

  const handleInsetNode = (folderId,item,isFolder) =>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)
    setExplorerData(finalTree)
  }

  return (
      <div>
        <Folder handleInsetNode =  {handleInsetNode} explorer = {explorerData}/>        
      </div>  
  )
}

export default App
