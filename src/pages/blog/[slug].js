import { useRouter } from 'next/router'
 
export default function BlogPost() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}