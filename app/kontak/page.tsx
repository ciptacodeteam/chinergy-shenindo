import ContactForm from '@/components/forms/ContactForm';
import ContactDetailCard from '@/components/sections/ContactDetailCard';
import SectionTitle from '@/components/titles/SectionTitle';

const ContactPage = () => {
  return (
    <main>
      <SectionTitle
        title='Hubungi Kami'
        description='Kami siap membantu Anda dengan kebutuhan alat berat dan spare parts.'
      />

      <section className='py-16 bg-white text-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-primary mb-4 text-balance'>
              Mari Berdiskusi
            </h2>
            <p className='text-base text-gray-600 max-w-3xl mx-auto text-pretty'>
              Kami selalu terbuka untuk pertanyaan, kolaborasi, dan peluang
              baru. Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-start'>
            <ContactDetailCard />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
