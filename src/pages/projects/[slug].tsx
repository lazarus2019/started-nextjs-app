import axios from 'axios';
import React, { FC } from 'react';
import { TProject, TProjectDetail } from 'utils/interface';

type Props = {};

export async function getStaticPaths() {
  const data = await axios
    .get('https://portfolio-social-server.vercel.app/api/project/laptrinhvien')
    .then((res): TProject[] => res.data.results);

  const paths = data.map((project) => {
    return {
      params: {
        slug: project.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await axios
    .get(`https://portfolio-social-server.vercel.app/api/project/s/${slug}`)
    .then((res): TProjectDetail => res.result);

  return {
    props: {
      project: data,
    },
  };
}

const DetailProject: FC<{ project: TProjectDetail }> = ({ project }) => {
  console.log(project);
  return <div>DetailProject</div>;
};
