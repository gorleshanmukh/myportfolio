import './resumebuilder.css';
import ResumeForm from "./resumeform/resumeform";
import ResumePreview from "./resumepreview/resumepreview";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

function ResumeBuilder() {
    const generatePDF = async () => {
        const contentDiv = document.getElementById('resume');
        const doc = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait' });

        if (contentDiv) {
            const canvas = await html2canvas(contentDiv);
            const imgData = canvas.toDataURL('image/png');

            // Set margins to zero
            doc.setMargins(0, 0, 0, 0);

            // Add the image without margins
            doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

            doc.save('resume.pdf');
        }
    };
    const resumePDF = generatePDF();
    console.log(resumePDF)
    return (
        <div className={"resume-builder-container"}>
            <div>
                <h1 className={"text-4xl"}>Resume Builder</h1>
            </div>
            <div className={"flex p-10 w-full h-full"}>
                <ResumeForm generatePDF={generatePDF}/>
                <ResumePreview generatedPDF={resumePDF} />
            </div>
        </div>
    );
}

export default ResumeBuilder;
