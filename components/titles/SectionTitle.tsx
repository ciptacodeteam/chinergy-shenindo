import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  img?: string;
};

const SectionTitle = ({ title, description, img }: Props) => {
  return (
    <section className='relative h-[200px] lg:h-[300px] w-full flex items-center justify-center bg-primary overflow-hidden'>
      <Image
        src={img || '/img/map_img.webp'}
        alt='World Map'
        layout='fill'
        objectFit='cover'
        className='opacity-20'
      />
      <div className='relative z-10 text-center'>
        <h1 className='lg:text-5xl font-bold text-white text-balance text-3xl'>
          {title}
        </h1>
        {description && (
          <p className='lg:text-lg text-white mt-4 text-pretty mx-4 lg:mx-0 text-sm'>
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
export default SectionTitle;
