import Tabs from './components/Tabs';
import './App.css';

function App() {
    const tabs = [
        {
            name: "Tab 1",
            selected: true,
            content: "Tab 1 content is showing here."
        },
        {
            name: "Tab 2",
            selected: false,
            content: "Tab 2 content is showing here."
        },
        {
            name: "Tab 3",
            selected: false,
            content: "Tab 3 content is showing here."
        },
        {
            name: "Tab 4",
            selected: false,
            content: "Tab 4 content is showing here."
        },
        {
            name: "Tab 5",
            selected: false,
            content: "Tab 5 content is showing here."
        }
    ]

    return (
        <div className="App">
            <Tabs tabs={ tabs }/>
        </div>
    );
}
export default App;