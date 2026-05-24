export default function AnalyzeResult({ result }) {
    if (!result) {
        return null
    }

    return (
        <section className="result-dashboard">
            <div className="card ats-card">
                <h3>ATS Score</h3>
            <div className="score-bar">
            <div
                className="score-fill"
                style={{ width: `${result.ats_score}%` }}
            />
            <span className="score-text">{result.ats_score}%</span>
            </div>
            <div className="score-label">
            <span>{result.ats_score >= 80 ? "Great" : result.ats_score >= 60 ? "Good" : "Needs work"}</span>
            </div>
            </div>

            <div className="card skills-card">
            <h3>Missing Skills</h3>
            <ul className="pill-list">
            {result.missing_skills.map((skill) => (
                <li className="pill" key={skill}>{skill}</li>
            ))}
            </ul>
        </div>

        <div className="card strengths-card">
            <h3>Candidate Strengths</h3>
            <ul className="pill-list">
            {result.candidate_strengths.map((strength) => (
                <li className="pill" key={strength}>{strength}</li>
            ))}
            </ul>
        </div>

        <div className="card improvement-card">
            <h3>Resume Improvement Suggestions</h3>
            <ol>
            {result.resume_improvement_suggestions.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ol>
        </div>

        <div className="summary-card">
            <h3>Rewritten Resume Summary</h3>
            <p>{result.rewritten_resume_summary}</p>
        </div>
        </section>
    )
}