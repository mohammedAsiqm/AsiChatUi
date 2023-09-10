import React from 'react';
import SettingLayout from "./settingLayout";
import ViewProfile from '../../components/shared/viewProfile';

function Profile() {
    return (
       <SettingLayout>
            <ViewProfile postContainerHeight={"53vh"} />
       </SettingLayout> 
    );
}

export default Profile;