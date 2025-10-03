import { IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

type Props = {
  title?: string;
  description?: string;
  ctaLink?: string;
  ctaText?: string;
  ctaIcon?: React.ReactNode;
};

const CTASection = ({
  title,
  description,
  ctaLink,
  ctaText,
  ctaIcon,
}: Props) => {
  return (
    <section className='mt-8'>
      <div className='max-w-7xl mx-auto rounded-xl overflow-hidden p-8 py-12 flex flex-col items-center text-center relative before:bg-[url("/img/img3.webp")] before:bg-cover before:bg-center before:contents-[""] before:absolute before:inset-0 before:brightness-[40%] before:-z-10'>
        <h3 className='text-3xl font-bold text-white mb-4'>
          {title || 'Siap Bermitra dengan Kami?'}
        </h3>
        <p className='text-lg text-gray-300 mb-8 max-w-2xl'>
          {description ||
            'Hubungi kami untuk konsultasi atau penawaran solusi alat berat dan spare parts.'}
        </p>
        <Link
          prefetch
          href={ctaLink || '/kontak'}
          className='bg-secondary text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors duration-200 flex items-center justify-center'
        >
          {ctaIcon || <IconPhone className='inline mr-2' size={20} />}
          {ctaText || 'Hubungi Kami'}
        </Link>
      </div>
    </section>
  );
};
export default CTASection;
