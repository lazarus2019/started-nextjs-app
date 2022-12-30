import axios from 'axios';
import Image from 'next/image';
import { FC } from 'react';
import { convertStringToShortDate } from 'utils/helper';
import { TProject } from 'utils/interface';

const Project: FC<{ projects: TProject[] }> = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
          <Image
            src={project.thumbnail}
            width={250}
            height={150}
            alt={project.title}
          />
          <p>Date: {convertStringToShortDate(project.createdAt)}</p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await axios
    .get('https://portfolio-social-server.vercel.app/api/project/laptrinhvien')
    .then((res): TProject[] => res.data.results);

  return {
    props: {
      projects: data,
    },
  };
}

export default Project;
