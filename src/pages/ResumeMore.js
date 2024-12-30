import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ResumeMore.css';
import resumePreview from '../images/resumepreview.png';
import image1 from '../images/python.png';
import image2 from '../images/react.png';
import image3 from '../images/cpp.png';
import image4 from '../images/java.png';
import image5 from '../images/sql.png';
import image6 from '../images/matlab.png';
import image7 from '../images/verilog.png';
import image8 from '../images/pytorch.png';
import image9 from '../images/html.png';
import image10 from '../images/css.png';
import image11 from '../images/excel.png';
import image12 from '../images/rprog.png';
import image13 from '../images/git.png';
import image14 from '../images/assembly.png';
import image15 from '../images/jupyter.png';
import image16 from '../images/ds.png';
const images = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
    image9, image10, image11, image12,
    image13, image14, image15, image16,
];
const ResumeMore = () => {
    return (_jsx("div", { id: "resume", className: "section", children: _jsxs("div", { className: "resumeMore-main-container", children: [_jsxs("div", { className: "resume-twoCardContainer", children: [_jsx("div", { className: "resume-firstCardBase", children: _jsx("div", { className: "resume-secondCardOverlay", children: _jsx("a", { href: "https://drive.google.com/file/d/10LTy_wFm6PX57irwz237lQBWxZObY3ns/view?usp=sharing", children: _jsx("img", { src: resumePreview, alt: "Resume", className: "resume-secondCardOverlay-image" }) }) }) }), _jsx("div", { className: "resume-cardText", children: "TL;DR? Here's my Resume + A Visual Summary Below for Good Measure :)" })] }), _jsxs("div", { className: "more-cardsFormat", children: [_jsxs("div", { className: "more-cardContainer", children: [_jsx("h3", { className: "more-cardHeading", children: "Technology I'm Proficient In:" }), _jsx("div", { className: "more-cardsBase", children: _jsx("div", { className: "grid-container", children: images.map((image, index) => (_jsx("div", { className: "grid-item", children: _jsx("img", { src: image, alt: `Image ${index + 1}` }) }, index))) }) })] }), _jsxs("div", { className: "more-cardContainer", children: [_jsx("h3", { className: "more-cardHeading", children: "My Other Achievements + Passions:" }), _jsx("div", { className: "more-cardsBase", children: _jsx("div", { className: "more-hobbiesDescription", children: _jsxs("ul", { children: [_jsxs("li", { children: ["I love to ", _jsx("span", { className: "more-description-highlight", children: "work out" }), " and run!", _jsxs("ul", { children: [_jsxs("li", { children: ["I was a finisher of the ", _jsx("span", { className: "more-description-highlight", children: "La Jolla Half Marathon" }), " in May of 2024"] }), _jsx("li", { children: "Working on training for a full marathon in 2025!" })] })] }), _jsxs("li", { children: ["I love listening to ", _jsx("span", { className: "more-description-highlight", children: "music" }), ".", _jsxs("ul", { children: [_jsxs("li", { children: ["My favorite genres are ", _jsx("span", { className: "more-description-highlight", children: "Hip-Hop" }), " and ", _jsx("span", { className: "more-description-highlight", children: "Soul" }), ". "] }), _jsx("li", { children: "If you have recommendations, please connect with me!" })] })] }), _jsxs("li", { children: ["I love exploring new ", _jsx("span", { className: "more-description-highlight", children: "food" }), " venues.", _jsxs("ul", { children: [_jsx("li", { children: "My friends always look to me for recommendations" }), _jsx("li", { children: "Here's my running list of places I've explored, ranked!" })] })] })] }) }) })] })] }), _jsxs("div", { className: "resume-navBar", children: [_jsx("div", { className: "resume-navText", children: _jsx("a", { href: "#introduction", children: "INTRODUCTION" }) }), _jsx("div", { className: "resume-navText", children: _jsx("a", { href: "#experience", children: "EXPERIENCE" }) }), _jsx("div", { className: "resume-navText", children: _jsx("a", { href: "#projects", children: "PROJECTS" }) })] })] }) }));
};
export default ResumeMore;
