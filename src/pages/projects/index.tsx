import { useRouter } from 'next/router';
import Link from 'next/link';

const Project = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/projects/username/1');
  };
  return (
    <div>
      <div>Project</div>
      <Link href="/login">Go to Login</Link>
      <button onClick={handleOnClick}>Go To Username</button>
    </div>
  );
};

export default Project;
