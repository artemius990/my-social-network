import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	 if (!props.profile) {
        return <Preloader />
    }
	
    return (
        <div>
            <div>
                <img className={s.img}
                    src='https://trawor.by/media/upload/image_20190726013709.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
			<img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;