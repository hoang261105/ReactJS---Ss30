interface Prop {
    name: string,
    id: number,
    status: boolean,
}

interface Job {
    job: Prop
    stt: number
}

export default function Job(prop: Job) {
    const { job, stt } = prop
    return (
        <tr>
            <td>{stt + 1}</td>
            <td>{job.name}</td>
            <td>{job.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
        </tr>
    )
}
