
import { getStaticPaths as lineupGetStaticPaths } from '../lineup/[year]'
import { getStaticPaths as galleriesGetStaticPaths } from '../galleries/[year]'
import { IGallery } from '../../types'

export default async function handler(req: any, res: any) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    try {
      await res.unstable_revalidate('/')
      await res.unstable_revalidate('/about')
      await res.unstable_revalidate('/contact')
      await res.unstable_revalidate('/news')
      await res.unstable_revalidate('/tickets')
      await res.unstable_revalidate('/info')


      const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
      const { data: bands } = await bandsResponse.json();
      let years = [...new Set(bands.map((gallery: IGallery) => gallery.attributes.year))];
      years.forEach((year: any) =>
            res.unstable_revalidate(`/lineup/${year}`)
      );
      
      const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
      const { data: galleries } = await galleriesResponse.json();
      years = [...new Set(galleries.map((gallery: IGallery) => gallery.attributes.year))];
      years.forEach((year: any) =>
            res.unstable_revalidate(`/galleries/${year}`)
      );

      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }