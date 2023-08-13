import './resumeform.css';
import jsPDF from 'jspdf';
function ResumeForm({ generatePDF }) {
    return (
        <div className={"resume-form-container"}>
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    );
}

export default ResumeForm;
