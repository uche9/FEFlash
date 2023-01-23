import {Link, Outlet} from 'react-router-dom'
export default function NicheButton({el}){

    
        return (
            <button className='niche--tabs'>
                <Link to = {el.way} className="niche_tabs"   > {el.wayName}</Link> 
            <Outlet />
            </button> 
        )
    }