import './styles.css'

const RightPannel = () =>{
    return(
        <div id="propwrap">
            <div id="properties">
            
                <div id="close">
                    <img src="./Assets/close.svg" alt="C3-1"/>
                </div>
                
                <p id="header2">Properties</p>
            
                <div id="propswitch">
                    <div id="dataprop">Data</div>
                    <div id="alertprop">Alerts</div>
                    <div id="logsprop">Logs</div>
                </div>
                
                <div id="proplist">
                    <p className="inputlabel">Select database</p>
                    <div className="dropme">Database 1 <img src="./Assets/dropdown.svg" alt="C3-2"/></div>
                    <p className="inputlabel">Check properties</p>
                    <div className="dropme">All<img src="./Assets/dropdown.svg" alt="C3-3" /></div>
                    <div className="checkus"><img src="./Assets/checkon.svg" alt="C3-4" /><p>Log on successful performance</p></div>
                    <div className="checkus"><img src="./Assets/checkoff.svg" alt="C3-5" /><p>Give priority to this block</p></div>
                </div>
                
                <div id="divisionthing"></div>
            <div id="removeblock">Delete blocks</div>
        </div>
    </div>
        
    );
}

export default RightPannel;