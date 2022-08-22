import { useRouter } from 'next/router';
import { useState } from 'react';



const Post = () => {
  let [count, setCount] = useState<number>(0);
  const router = useRouter();
  const { id } = router.query;

  function handleClick(): void {
    setCount(count += 1)
  }

  return <p onClick={handleClick}>Post: {id} {count}</p>
}

export default Post