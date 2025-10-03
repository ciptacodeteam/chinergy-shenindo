'use client';

import CTASection from '@/components/sections/CTASection';
import FabricationProductListSection from '@/components/sections/FabricationProductListSection';
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
      <FabricationProductListSection />

      <CTASection
        title='Ingin Mendiskusikan Proyek Pabrikasi Anda?'
        description='Kami siap membantu Anda merencanakan dan melaksanakan proyek pabrikasi yang sukses.'
      />
    </>
  );
};
export default FabricationPage;
