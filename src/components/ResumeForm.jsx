import { useState } from "react"
import AnalyzeResult from "./AnalyzeResult"
import { mockResumeResponse } from "../mockData"
import LoadingSpinner from "./LoadingSpinner"

export default function ResumeForm() {
    const [resumeFile, setResumeFile] = useState(null)
    const [jobDescription, setJobDescription] = useState(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!resumeFile || !jobDescription) {
            alert("Please upload a resume and enter a job description.")
            return
        }

        try{
            setLoading(true)

            await new Promise(resolve => setTimeout(resolve, 1000))
            setResult(mockResumeResponse)
            console.log("Form submission result: ", mockResumeResponse)
            // const formData = new FormData()
            // formData.append("resume", resumeFile)
            // formData.append("jd_text", jobDescription)

            // const response = await fetch("http://127.0.0.1:8000/api/v1/resumes/analyze_resume", {
            //     method: "POST",
            //     body: formData
            // })
            // const res = await response.json()
            // setResult(res)
            // console.log("Form submission result:", res)
        }catch(error) {
            console.error("Error submitting form:", error)
            alert("An error occurred while submitting the form. Please try again.")
        }finally {
            setLoading(false)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file && file.type === "application/pdf") {
            setResumeFile(file)
        } else {
            alert("Please upload a valid PDF file.")
            e.target.value = null
        }
    }

    const handleJobDescriptionChange = (e) => {
        if(e.target.value){
            setJobDescription(e.target.value)
        }else{
            setJobDescription(null)
        }
    }

    return (
        <section id="center">
            <h1>AI Resume Intelligence</h1>
            {!result &&
             <form onSubmit={handleSubmit} className="resume-form">
            <div className="form-group">
            <label>Upload Resume PDF</label>
            <br />
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            </div>

            <div className="form-group">
            <label>Enter Job Description</label>
            <br />
            <textarea
                rows="5"
                cols="50"
                placeholder="Paste the job description here..."
                onChange={handleJobDescriptionChange}
                value={jobDescription}
            />
            </div>

            <button type="submit">Submit</button>
        </form>
            }
            
        {loading && <LoadingSpinner/>}
        {result && <>
            <AnalyzeResult result={result} />
            <button type="button" onClick={() => setResult(null)}>
            Analyze another resume
            </button>
     </>}
        </section>
        
    )
}