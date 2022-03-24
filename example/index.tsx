import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Link, Bar, Box, Heading, Text, Paragraph } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
        quibusdam?
      </Text>
      <Text marked="fonGray" variant="small" color="brandPrimary">
        {' '}
        Lorem ipsum dolor sit amet.{' '}
      </Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, deserunt.
      <Paragraph marked="fonGray" color="brandSecondary" disableMargins>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, quam
        optio? Rem sapiente odit voluptas, quo ratione consequuntur voluptatem!
        Omnis nisi porro dicta repudiandae perspiciatis, sunt deleniti odit?
        Odit reprehenderit ipsa impedit assumenda praesentium numquam iste vero
        porro nam, molestiae modi similique obcaecati dolorum ex dignissimos
        perspiciatis eaque iure consectetur iusto sunt saepe? Doloremque totam
        itaque cupiditate nobis iste sed veniam, aliquam at? Consequuntur
        molestiae cum excepturi nulla, itaque magnam ab nam saepe enim esse aut
        mollitia sint dolorem dolores aliquid. Reiciendis quisquam provident cum
        libero laborum consequuntur repellendus quam voluptatum quae sit,
        incidunt placeat autem rerum inventore officia modi.
      </Paragraph>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
