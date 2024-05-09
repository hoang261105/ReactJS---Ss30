import Exercise1 from './components/B1/Exercise1'
import Exercise2 from './components/B2/Exercise2'
import Exercise3 from './components/B3/Exercise3'
import Exercise4 from './components/B4/Exercise4'
import Exercise5 from './components/B5/Exercise5'
import Exercise6 from './components/B6/Exercise6'
import JOB from './components/B11/Jobs'
import { useState } from 'react'
export default function App() {
  const [name, setName] = useState<string>("")
  const [job, setJob] = useState<any[]>([])
  const addJob = () => {
    let newJob = {
      name: name,
      id: Math.ceil(Math.random() * 1000),
      status: false
    }
    setJob([...job, newJob])

    const updateJob = [...job, newJob]
    setJob(updateJob)
    localStorage.setItem("listJob", JSON.stringify(updateJob))
  }
  return (
    <div>
      <Exercise1 />
      <br />
      <Exercise2 />
      <br />
      <Exercise3 />
      <br />
      <Exercise4 />
      <br />
      <Exercise5 />
      <br />
      <Exercise6 />
      <br />
      <h2>Danh sách công viêc</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addJob}>Thêm</button>
      <JOB job={job} />
      <p>Danh sách việc đã hoàn thành</p>
    </div>
  )
}
