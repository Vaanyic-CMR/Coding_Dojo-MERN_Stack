import React, { useState } from 'react'
import './Tabs.css'

function Tabs( props ) {
    const [ tabList, setTabList ] = useState( props.tabs );

    function selectTab(e) {
        setTabList( tabList.map( (tab, index) => {
            if (e.target.name == index) { tab.selected = true }
            else { tab.selected = false }
            return tab
        }))
    }

    return (
        <div>
            <div>
            {
                tabList.map( (tab, index) => 
                    tab.selected?
                    <button name={index} onClick={ selectTab } className="btn btn-active">{ tab.name }</button>
                    :<button name={index} onClick={ selectTab } className="btn btn-inactive">{ tab.name }</button>
                )
            }
            </div>
            {
                tabList.map( (tab, index) =>
                    tab.selected?
                    <p className="content">{ tab.content }</p>
                    :null
                )
            }
        </div>
    );
}
export default Tabs;