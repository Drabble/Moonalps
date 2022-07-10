
import { getStaticPaths as lineupGetStaticPaths } from '../lineup/[year]'
import { getStaticPaths as galleriesGetStaticPaths } from '../galleries/[year]'

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

      // grab static paths using the same method Next.js would use
    const lineupStaticPaths : any = await lineupGetStaticPaths()
    // get an array of promises
    const lineupRevalidatePaths = lineupStaticPaths.map((path: any) =>
          res.unstable_revalidate(`/lineup/${path.params.slug}`)
    );
    await Promise.all(lineupRevalidatePaths);

      // grab static paths using the same method Next.js would use
      const galleriesStaticPaths : any = await galleriesGetStaticPaths()
      const galleriesRevalidatePaths = galleriesStaticPaths.map((path: any) =>
            res.unstable_revalidate(`/galleries/${path.params.slug}`)
      );
      await Promise.all(galleriesRevalidatePaths);

      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }