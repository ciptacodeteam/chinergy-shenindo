import CTASection from '@/components/sections/CTASection';
import SectionTitle from '@/components/titles/SectionTitle';

const FabricationPage = () => {
  return (
    <>
      <header className='!bg-primary pt-20'>
        <SectionTitle
          title='Pabrikasi'
          description='Kami menyediakan layanan pabrikasi berkualitas tinggi untuk memenuhi kebutuhan industri Anda.'
        />
      </header>

      {/* Add more sections as needed like Product List with filter */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <h2 className='text-2xl font-extrabold text-primary mb-6'>
          Daftar Produk
        </h2>
        {/* Product filter and list components go here */}
      </section>

      <CTASection
        title='Ingin Mendiskusikan Proyek Pabrikasi Anda?'
        description='Kami siap membantu Anda merencanakan dan melaksanakan proyek pabrikasi yang sukses.'
      />
    </>
  );
};
export default FabricationPage;
