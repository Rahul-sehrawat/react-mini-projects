import { useState } from "react"

function Folder({handleInsertNode =()=>{},explorer}){
    const [expand,setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible :false,
        isFolder :false
    });

    const handleNewFolder = (e, isFolder)=>{
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder
        });
    };
    
    const OnAddFolder = (e)=>{
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput, visible:false});
        }
    };


    if(explorer.isFolder){
    return (
    <div style={{marginTop: 5}}>
        <div className="folder" onClick={()=>setExpand(!expand)}> 
            <span>📁{explorer.name} </span>
            <div>
                <button onClick={(e)=> handleNewFolder(e, true)}>Folder +</button>
                <button onClick={(e)=> handleNewFolder(e, false)}> file +</button>
            </div>
        </div>

        <div style={{display: expand? 'block':'none', paddingLeft: 25}}>
            {
                showInput.visible && (
                    <div className="inputContainer">
                    <span>{showInput.isFolder? "📁" :"📄"}</span>
                    <input 
                        className="inputContainer_input"
                        type="text" 
                        onKeyDown={OnAddFolder}
                        autoFocus
                        onBlur={()=>setShowInput({...showInput, visible:false})}/>
                    </div>
                )
            }
            {explorer.items.map((exp)=>{
                    return( 
                    <Folder 
                    handleInsetNode={handleInsertNode}
                    explorer={exp} 
                    key={exp.id}/>
                    )
                
})}
        </div>
    </div>
    )}
    else{
        return <span className="file"> 📄 {explorer.name}</span>
    }
}

export default Folder