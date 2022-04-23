import React from 'react';
import { Link } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xl m-auto px-4 mt-10 transition">
      <div className="space-x-4 flex">
        <p>
          Lorem ipsum{' '}
          <Link href="" variant="outlined">
            dolor
          </Link>{' '}
          sit amet consectetur adipisicing elit. Optio molestiae perferendis
          possimus deserunt eum odio laborum corporis{' '}
          <Link href="" variant="outlined" color="secondary">
            totam
          </Link>{' '}
          ab aperiam. Repudiandae quidem et porro vero, ducimus magni dolorem
          nobis sapiente <Link href="">fugit</Link> odio iste quaerat aperiam
          mollitia, quisquam sunt rerum consequatur magnam? Iure officiis nobis
          nisi et enim id quidem quod eius, cum porro deserunt aperiam a sit
          ullam iusto similique, perspiciatis totam at mollitia libero
          laboriosam ut. Praesentium{' '}
          <Link href="" color="secondary">
            perferendis
          </Link>{' '}
          distinctio ut modi nostrum, assumenda suscipit eius itaque laudantium
          repellat consequatur mollitia{' '}
          <Link href="" variant="contained">
            voluptatum
          </Link>{' '}
          doloribus necessitatibus voluptates, perspiciatis deserunt beatae?
          Sint quasi recusandae illo esse aut nobis modi libero,{' '}
          <Link href="" variant="contained" color="secondary">
            reprehenderit
          </Link>{' '}
          consectetur aperiam?
        </p>
      </div>
    </div>
  );
};

export default App;
