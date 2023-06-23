import Caafimaad from "./Caafimaad";
import Qayabaha from "./Qaybaha";

function Projects({ children }) {
  return (
    <>
      <div className="Projects">
        <div className="haye">
          <Qayabaha />
          <div className="prog_one">
            <Caafimaad />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
