import { useState } from "react";
import TabsComponent from "../components/TabsComponent";
import Admin from "../components/Admin";
import Teachers from "../components/Teachers";

const VALUES = {
    admin: 'admin',
    teachers: 'teachers',
    students: 'students',
    marketing: 'marketing',
    security: 'security'
}

const GetTab = ({ tab }) => {
    if (tab === VALUES.admin) {
        return <Admin />
    } else if (tab === VALUES.teachers) {
        return <Teachers />
    }
}

const Main = () => {


    const arrayTabs = [
        {value: VALUES.admin, title: 'Администрация'},
        {value: VALUES.teachers, title: 'Учителя'},
        {value: VALUES.students, title: 'Ученики'},
        {value: VALUES.marketing, title: 'Маркетинг'},
        {value: VALUES.security, title: 'Охрана'},
    ]

    const [value, setValue] = useState(arrayTabs?.[0].value)

    return (
        <div>
            <TabsComponent value={value} setValue={setValue} arrayTabs={arrayTabs} />
            <GetTab tab={value} />
        </div>
    )
}

export default Main;