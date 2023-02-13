import React from 'react';

import AboutMe from '../AboutMe';
import Footer from '../Footer';
import Header from '../Header';
import Projects from '../Projects';
import ShowCase from '../ShowCase';
import Technologies from '../Technologies';

/**
 * @export
 * @component
 * @name Container
 *
 * @description
 * Responsible for render all sections.
 */
export function Container(): JSX.Element {
  return (
    <>
      <Header />
      <ShowCase />
      <Projects />
      <Technologies />
      <AboutMe />
      <Footer />
    </>
  );
}
