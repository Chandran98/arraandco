import { FC } from 'react';
import { useRouter } from 'next/navigation';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CAREERCARDS } from '@/data';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    // <SectionOpacity  classes="flex flex-col justify-center h-screen">

<section id="careers" className="relative border-t border-gray-1 py-[6vw] md:py-[4vw]">
      <SectionTitle title="CAREERS" classes="text-right px-[6vw] md:px-[3vw] pt-[3vw]" />
        {CAREERCARDS.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
    </section>

     
    // </SectionOpacity>
  );
};
export default Index;
