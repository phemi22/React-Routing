import { Link, useLoaderData } from "react-router-dom"

export default function Jobs(){

    const jobsData = useLoaderData()

    return(

        <div>
            {jobsData.map((job)=>(
                <div>
                    <Link>
                        <h3>{job.jobtitle}</h3>
                        <p>{job.location}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
    )
}

export const loader = async ()=>{
   const response = await fetch("http://localhost:3000/jobs")
   return response.json()
}