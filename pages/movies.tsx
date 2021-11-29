import { useState } from "react";

import { Client } from "@notionhq/client";

interface Props {
  movies: any[];
}

const MoviesPage = (props: Props) => {
  const { movies } = props;

  const [movie, setMovie] = useState(null);

  const chooseMovie = () => {
    const randomNumber = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomNumber]);
  };

  return (
    <>
      <button onClick={chooseMovie}>Choose movie</button>
      {movie && <pre>{JSON.stringify(movie, null, 2)}</pre>}
    </>
  );
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID || '',
    filter: {
      property: "Watched",
      checkbox: {
        equals: false,
      },
    },
  });

  const movies = data.results.map((movie) => {
    return {
      id: movie.id,
      url: movie.url,
    };
  });

  return {
    props: {
      movies,
    },
  };
};

export default MoviesPage;
