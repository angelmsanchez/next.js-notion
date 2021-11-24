import { Client } from "@notionhq/client";

interface Props {
  recipe: any;
}

const RecipePageDetail = (props: Props) => {
  const { recipe } = props;

  return <pre>{JSON.stringify(recipe, null, 2)}</pre>;
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID || '',
  });

  const paths: any[] = [];

  data.results.forEach((result) => {
    if (result.type === "child_page") {
      console.log('result: ', result.id);
      paths.push({
        params: {
          id: result.id,
        },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  // fetch details for recipe
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const page: any = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  const title: string = page.properties.title.title[0].plain_text;
  const ingredients: string[] = [];

  blocks.results.forEach((block) => {
    if (block.type === "bulleted_list_item") {
      ingredients.push(block.bulleted_list_item.text[0].plain_text);
    }
  });

  return {
    props: {
      recipe: {
        title,
        ingredients,
      },
    },
  };
};

export default RecipePageDetail;
