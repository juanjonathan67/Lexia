import Sidebar from '../menu/Sidebar';

function Dashboard() {
    return (
        <>
            
            <div className="flex">
                <Sidebar />
                <div className="pl-10 pt-8">
                <h1 className="text-5xl font-inter">
                    Dashboard
                </h1>
            </div>
            </div>
        </>
    );
    }
    
    export default Dashboard;

