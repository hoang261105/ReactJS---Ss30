import { useState, useEffect } from 'react'
import Job from './Job'

interface Job {
    name: string,
    id: number,
    status: boolean,
}

interface Prop {
    job: Job[]
}

export default function Jobs(prop: Prop) {
    const [jobs, setJobs] = useState<Job[]>([])
    // const { job } = prop
    // console.log(job);

    useEffect(() => {
        if (prop.job && prop.job.length > 0) {
            setJobs(prop.job);
        }
    }, [prop.job]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((item, index) => {
                        return <Job job={item} stt={index} key={index} />
                    })}
                </tbody>
            </table>


        </div>
    )
}
