import WorkBranchComponent from "../components/WorkBranchComponent";
import "./WorkPage.css"

function WorkPage()
{
    return (<div className="work-main">
                <div className="work-circle">現在</div>
                <WorkBranchComponent />
            </div>);
}

export default WorkPage;