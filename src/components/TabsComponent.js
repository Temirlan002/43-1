import { Tab, Tabs } from "react-bootstrap";

const TabsComponent = ({arrayTabs, value, setValue }) => {
    
    
    return (
        <div className="categoriesList">
            <Tabs
                defaultActiveKey={value}
                onSelect={(k) => setValue(k)}
            >
                {arrayTabs.map((tab) => 
                    <Tab 
                        className="categoriesTitle"
                        key={tab['value']}
                        eventKey={tab['value']}
                        title={tab['title']}
                    />
                )}
            </Tabs>
        </div>
    )
}

export default TabsComponent;