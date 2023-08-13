import './resumepreview.css';
import {useEffect, useState, useRef} from "react";

function ResumePreview({generatedPDF}) {
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [scalingFactor, setScalingFactor] = useState(1);

    const updateScale = () => {
        const parentHeight = parentRef.current.offsetHeight;
        const childHeight = childRef.current.offsetHeight;
        const newScalingFactor = parentHeight / childHeight;
        setScalingFactor(newScalingFactor-.1);
        console.log(newScalingFactor)
    };
    useEffect(() => {
        window.addEventListener('resize', updateScale);
        updateScale();
        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, []);

    return (
        <div className={"resume-preview-container"}>
            <div className={"resume-container"} ref={parentRef}>
                <div className={"resume"}
                     id={"resume"}
                     style={{
                         transform: `scale(${scalingFactor}) translate(-50%, -50%)`,
                         transformOrigin: 'top left',
                         position: 'relative',
                         left: '50%',
                         top: '50%',
                     }}
                     ref={childRef}>
                    <div className={"text-xs font-bold"}>Shanmukh Gorle</div>
                </div>
            </div>
        </div>
    );
}

export default ResumePreview;
