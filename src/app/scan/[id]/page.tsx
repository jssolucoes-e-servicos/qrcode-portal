import { redirect } from 'next/navigation';
import { getLink } from './get-link';

export default async function Page({ params }: { params: { id: string } }) {
  const link  = await getLink(params.id);
  if ( link !== null ) {
   redirect(link);
  }
  
  return <div>link: <b> {params.id} </b>not found</div>
}