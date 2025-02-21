import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqs from "@/constants/faq";

const Faq = () => {
  return (
    <>
        <h1 className="text-4xl text-purple-500 font-bold text-center m-8">FAQs</h1>
      <div className="p-3 max-w-5xl mx-auto bg-white rounded-lg m-8">
        {faqs.map((faq) => (
          <Accordion type="single" collapsible key={faq.question}>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-gray-700">{faq.question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-900">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Faq;
