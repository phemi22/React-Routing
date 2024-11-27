import { Outlet } from "react-router-dom";

export default function JobsLayout(){

    return(

        <div>
            <h1>See All Our Job Openings Below</h1>
            <Outlet />
        </div>
    )
}