import Link from 'next/link'
import SubSectionHero from '../reusable/SubSectionHero'
import LegalHero from '../icon/Privacy/LegalHero'

export default function Legal() {
  return (
    <div className='mb-100px' id='legal-policy'>
      <SubSectionHero
        header='We reveal the cards - this imprint works for your work'
        subheader='Serious websites use a disclaimer. It state that we have nothing to hide. We publish the open source project to the best of our knowledge and judgement.'
        illustration={<LegalHero width='100%' height='100%' />}
      />
      <h2>Imprint</h2>
      <p className='mb-0px'>Information according to § 5 TMG</p>
      <p className='mb-0px'>z.H. CODE University of Applied Sciences</p>
      <p className='mb-0px'>Lohmühlenstr. 65</p>
      <p className='mb-0px'>12435 Berlin</p>
      <p className='mb-0px'>Represented by (student): Severin Glaser</p>
      <Link href='/contact'>Contact</Link>
      <p>
        E-mail: <a href='mailto:info@omencss.dev'>info@omencss.dev</a>
      </p>

      <h2>Disclaimer:</h2>
      <h3>Liability for links</h3>
      <p>
        Our website contains links to external websites of third parties over whose content we have no influence.
        Therefore, we cannot assume any liability for these external contents. The respective provider or operator of
        the pages is always responsible for the content of the linked pages. The linked pages were checked for possible
        legal violations at the time of linking. Illegal contents were not recognisable at the time of linking. However,
        permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a
        legal violation. If we become aware of any infringements of the law, we will remove such links immediately.
      </p>
      <h3>Copyright</h3>
      <p>
        The contents and works on these pages created by the site operators are subject to German copyright law.
        Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the
        copyright law shall require the prior written consent of its respective author or creator. Downloads and copies
        of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not
        created by the operator, the copyrights of third parties are respected. In particular, third-party content is
        marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly.
        If we become aware of any infringements, we will remove such content immediately.
      </p>
      <h3>Data protection</h3>
      <p>
        As a rule, it is possible to use our website without providing personal data. Insofar as personal data (e.g.
        name, address or e-mail addresses) is collected on our pages, this is always done on a voluntary basis as far as
        possible. This data will not be passed on to third parties without your express consent. We would like to point
        out that data transmission on the Internet (e.g. communication by e-mail) can have security gaps. Complete
        protection of data against access by third parties is not possible. The use of contact data published within the
        framework of the imprint obligation by third parties for the purpose of sending advertising and information
        material not expressly requested is hereby expressly prohibited. The operators of this website expressly reserve
        the right to take legal action in the event of the unsolicited sending of advertising information, e.g. via spam
        mails.
      </p>
      <p>
        Website imprint created by{' '}
        <Link href='https://www.impressum-generator.de/'>
          <a target='_blank' rel='nofollow noopener noreferrer'>
            impressum-generator.de
          </a>
        </Link>{' '}
        from{' '}
        <Link href='https://www.kanzlei-hasselbach.de/'>
          <a target='_blank' rel='nofollow noopener noreferrer'>
            Kanzlei Hasselbach
          </a>
        </Link>
      </p>
    </div>
  )
}
