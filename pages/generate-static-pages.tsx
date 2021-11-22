import { GetStaticProps } from "next";

interface Props {
  quote: any;
}

const GenerateStaticPages = (props: Props) => {
  const { quote } = props;

  return (<div>Test: {JSON.stringify(quote)}</div>)
}

export const getStaticProps: GetStaticProps = async () => {
  // fetch data and create static pages
  const quote = await fetch(
    "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  ).then((resp) => resp.json());

  return {
    props: {
      quote,
    },
  };
};

export default GenerateStaticPages;
