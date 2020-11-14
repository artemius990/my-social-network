import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                    src='https://sharespro.ru/sites/default/files/styles/catalog_big/public/images_1711?itok=1bYoKB1R'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;