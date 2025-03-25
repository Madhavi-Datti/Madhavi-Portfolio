import { CheckCircle, Code, PenTool, Rocket, Globe, FileText, Settings, Database, Video } from "lucide-react";

const About = () => {
  return (
    <div>
        <section className="mt-5">
        <div className="container">
            <div className="text-center">
              <img 
                src="/images/my ai pic.jpg" 
                alt="My Profile" 
                className="profile-img animate-fade"
              />
            </div> 
            </div>
        </section>
        <section className="about-section text-justify">
  <div className="container my-5 p-4 bg-light shadow-lg rounded about-bg">
    
    {/* Header Section */}
    <h2 className="text-center text-warning fw-bold mb-4">
      <Rocket className="me-2" size={28} /> Java Full Stack Developer | Content Writer | Tech Enthusiast
    </h2>

    {/* About Me */}
    <p className="text-white text-justify">
      I am a passionate <strong>Java Full Stack Developer</strong> specializing in designing, developing, 
      and optimizing web applications. My expertise in Java-based backend systems and modern frontend 
      frameworks enables me to build scalable and user-friendly solutions.
    </p>
    <p className="text-white text-justify">
      Additionally, I have a strong background in SEO content writing, including article writing, blogs, FAQs,  
      and social media content that is optimized for both users and search engines.
    </p>

    {/* Tech Stack */}
    <p className="text-white mt-3">
      <Code className="me-2 text-primary" size={20} />
      <strong>Tech Stack:</strong> Java | Spring Boot | REST APIs | React | MySQL
    </p>

    {/* SEO Content Writing Experience */}
    <p className="text-white mt-3">
      <PenTool className="me-2 text-success" size={20} />
      <strong>SEO Content Writer:</strong> Former web content writer with expertise in crafting SEO-optimized 
      articles, blogs, and web content to enhance online presence.
    </p>

    {/* What I Bring to the Table */}
    <h3 className="text-white fw-bold mt-4">🎯 What I Bring to the Table:</h3>
    <ul className="list-group list-group-flush mt-3">
      <li className="list-group-item bg-transparent text-white text-justify d-flex align-items-start">
        <CheckCircle className="text-success me-2" size={20} />
        <strong className="me-2">End-to-End Development Expertise:</strong> From backend logic to interactive UIs.
      </li>

      <li className="list-group-item bg-transparent text-white text-justify d-flex align-items-start">
        <CheckCircle className="text-success me-2" size={20} />
        <strong className="me-2">Strong Problem-Solving Skills:</strong> Debugging, performance tuning, and scalable solutions.
      </li>

      <li className="list-group-item bg-transparent text-white text-justify d-flex align-items-start">
        <CheckCircle className="text-success me-2" size={20} />
        <strong className="me-2">Bridging Technology & Content:</strong> Merging technical skills with storytelling for impactful solutions.
      </li>

      <li className="list-group-item bg-transparent text-white text-justify d-flex align-items-start">
        <CheckCircle className="text-success me-2" size={20} />
        <strong className="me-2" >Passion for Continuous Learning:</strong> Staying updated with the latest tech trends.
      </li>

      <li className="list-group-item bg-transparent text-white text-justify d-flex align-items-start">
        <CheckCircle className="text-success me-2" size={20} />
        <strong className="me-2">Teamwork & Collaboration:</strong> Working with cross-functional teams to deliver high-quality products.
      </li>
    </ul>

    {/* Closing Statement */}
    <p className="text-white text-justify mt-4">
      I thrive on innovation, collaboration, and problem-solving. Whether it's developing powerful applications 
      or writing impactful content, I bring a unique blend of coding expertise and creativity to every project.  
      <br />
      <strong className="me-2">Let’s connect and bring ideas to life!</strong>
    </p>
  </div>
</section>
  </div>
  );
};

export default About;
