import React, { useState } from 'react';
import MenuItem from '../Menu-item/MenuItem';
import './Directory.style.scss';
import sections from './data';

const Directory = () => {
    const [section, setSection] = useState(sections)
    return (
        <div className='directory-menu'>

            {
                section.map(({ title, imageUrl, id, size })=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/> 
                ))
            }
           
        </div>
    )
}

export default Directory
