import ContactForm from '@/components/forms/ContactForm';
import ContactDetailCard from '@/components/sections/ContactDetailCard';
import SectionTitle from '@/components/titles/SectionTitle';

const ContactPage = () => {
  return (
    <main>
      <header className='!bg-primary pt-20'>
        <SectionTitle
          title='Hubungi Kami'
          description='Kami siap membantu Anda dengan kebutuhan alat berat dan spare parts.'
        />
      </header>

      <section className='py-16 bg-white text-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
