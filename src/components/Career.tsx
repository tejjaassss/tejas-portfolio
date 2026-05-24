import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA (Master of Computer Application)</h4>
                <h5>Bhartiya Vidhyapeeth's Institute of Management & IT</h5>
              </div>
              <h3>2025–27</h3>
            </div>
            <p>
              Pursuing Master's degree at Mumbai University, deepening expertise in software engineering, DevOps, Backend & Cloud Technologies. <em>[Pursuing]</em>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSC (Information Technology)</h4>
                <h5>Mumbai University</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Graduated with a solid foundation in programming, database management, networking, and web development. Developed strong problem-solving skills through real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC</h4>
                <h5>Maharashtra State Board</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Completed HSC with distinction, building a strong interest in technology and computers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Awards &<br />Certifications</h4>
                <h5>Hackathons & Courses</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              🏆 Problem Solver — passionate about solving real-world problems with efficient solutions.
              <br />
              🚀 Project Builder — building practical projects that turn ideas into impactful solutions.
              <br />
              Certifications: DevOps, Cloud Technologies, Backend Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
