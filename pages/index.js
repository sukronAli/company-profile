import Head from 'next/head';
import { Element } from 'react-scroll';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Project from '../components/Project';
import { about, projects } from '../data';

export default function Home() {
  // const { locale, locales, defaultLocale, asPath } = useRouter();

  // console.log(locale, locales, defaultLocale, asPath);

  return (
    <>
      <Head>
        <title>Nauval Shidqi — Full Stack Developer</title>
      </Head>
      <div className="bg-gray-100">
        <Element name="hero" className="p-screen">
          <Nav />
          <Hero />
        </Element>

        {/* <div className="border border-gray-200 dark:border-dark-blue2"></div>

        <Element name="projects" className="p-screen">
          <div className="md:flex max-w-4xl mx-auto flex-wrap">
            {projects.map((project, i) => (
              <Project
                key={i}
                title={project.title}
                description={project.description}
                thumbnail={project.image.thumbnail}
                screenshots={project.image.screenshots}
                stacks={project.stacks}
                demo={project.link}
              />
            ))}
          </div>
        </Element>

        <div className="border border-gray-200 dark:border-dark-blue2"></div> */}

        <Element name="about" className="p-screen">
          <About photo={about.photoUrl} summary={about.summary} stacks={about.stacks} />
        </Element>

        <Element name="footer" className="p-screen">
          <Footer />
        </Element>
      </div>
    </>
  );
}
