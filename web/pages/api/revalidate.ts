import { IBand, IGallery } from '../../types';

const URL = process.env.STRAPI_URL;

export default async function handler(req: any, res: any) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.unstable_revalidate('/');
    await res.unstable_revalidate('/about');
    await res.unstable_revalidate('/contact');
    await res.unstable_revalidate('/news');
    await res.unstable_revalidate('/tickets');
    await res.unstable_revalidate('/info');

    console.log(`Fetching bands`);
    const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
    const { data: bands } = await bandsResponse.json();
    let years = [...new Set(bands.map((band: IBand) => band.attributes.year))];
    console.log(`Revalidation years ${years}`);
    for(const year of years){
      console.log(`Revalidate lineup ${year}`);
      await res.unstable_revalidate(`/lineup/${year}`);
    }

    console.log(`Fetching galleries`);
    const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
    const { data: galleries } = await galleriesResponse.json();
    years = [...new Set(galleries.map((gallery: IGallery) => gallery.attributes.year))];
    console.log(`Revalidation years ${years}`);
    for(const year of years){
      console.log(`Revalidate gallery ${year}`);
      await res.unstable_revalidate(`/galleries/${year}`);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
