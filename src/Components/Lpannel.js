/* eslint-disable jsx-a11y/alt-text */
import './styles.css'

const Lpannel = () => {
    return(
        <div id="leftcard">
            <p id="header">Blocks</p>
            <div id="search"> <input type="text" placeholder="Search blocks" /></div>

            <div id="subnav" >
                <div id="triggers" className="navactive side"   >Triggers</div>
                <div id="actions" className="navdisabled side"  >Actions</div>
                <div id="loggers" className="navdisabled side"  >Loggers</div>
            </div>
            
            <div id="blocklist">
                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name='blockelemtype' className="blockelemtype" value="1" />

                    <div className="blockin">
                        <div className="blocktext">
                            <p className="blocktitle">New visitor</p>
                            <p className="blockdesc">Triggers when somebody visits a specified page</p>
                        </div>
                    </div>
                </div>

                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name='blockelemtype' className="blockelemtype" value="2" />
                    <div className="blockin">
                        <div className="blocktext">
                            <p className="blocktitle">Action is performed</p>
                            <p className="blockdesc">Triggers when somebody performs a specified action</p>
                        </div>
                    </div>
                </div>


                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name='blockelemtype' className="blockelemtype" value="3" />
                    
                    <div className="blockin">
                        <div className="blocktext">
                            <p className="blocktitle">Time has passed</p>
                            <p className="blockdesc">Triggers after a specified amount of time</p>
                        </div>
                    </div>
                </div>

                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name='blockelemtype' className="blockelemtype" value="4" />
                    <div className="blockin">
                        <div className="blocktext">
                            <p className="blocktitle">Error prompt</p>
                            <p className="blockdesc">Triggers when a specified error happens</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lpannel;