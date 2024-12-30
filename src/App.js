import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Introduction from './pages/Introduction';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ResumeMore from './pages/ResumeMore';
import './styles/Global.css';
const App = () => {
    return (_jsx("div", { children: _jsxs("div", { className: "page-wrapPrecaution", children: [_jsxs("div", { className: "IntroExpGradient", children: [_jsx(Introduction, {}), _jsx(Experience, {})] }), _jsxs("div", { className: "ProjResMoreGradient", children: [_jsx(Projects, {}), _jsx(ResumeMore, {})] })] }) }));
};
export default App;
