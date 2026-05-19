import { useState } from "react"

export default function ResumeForm() {
    const [resumeFile, setResumeFile] = useState(null)
    const [jobDescription, setJobDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!resumeFile || !jobDescription) {
            alert("Please upload a resume and enter a job description.")
            return
        }

        try{
            setLoading(true)
            console.log("Submitting form with:", { resumeFile, jobDescription })
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
        setJobDescription(e.target.value)
    }

    return (
        <div>
            <h2>Resume Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                <label>Upload Resume PDF</label>
                <br />
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                />
                </div>

                <div style={{ marginBottom: "20px" }}>
                <label>Enter Job Description</label>
                <br />
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="Paste the job description here..."
                    onChange={handleJobDescriptionChange}
                />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}