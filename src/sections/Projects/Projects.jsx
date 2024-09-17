import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import website from '../../assets/web-site.png'
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import house from '../../assets/house.png'

function Projects() {
  return (
    <section data-aos="fade-left" id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://musicanny.netlify.app"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={house}
          link="https://main--home-rentals-agency.netlify.app"
          h3="House Agency"
          p="Home Rentals"
        />
        <ProjectCard
          src={website}
          link="https://xelerondeployment.vercel.app"
          h3="Bitcoin"
          p="Mining App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
