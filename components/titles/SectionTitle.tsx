import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  img?: string;
};

const SectionTitle = ({ title, description, img }: Props) => {
  return (
    <section className='relative h-[300px] w-full flex items-center justify-center bg-primary overflow-hidden'>
      <Image
        src={img || '/img/map_img.webp'}
        alt='World Map'
        layout='fill'
        objectFit='cover'
        className='opacity-20'
      />
      <div className='relative z-10 text-center'>
        <h1 className='text-5xl font-bold text-white text-balance'>{title}</h1>
        {description && (
          <p className='text-lg text-white mt-4 text-pretty'>{description}</p>
        )}
      </div>
    </section>
  );
};
export default SectionTitle;
