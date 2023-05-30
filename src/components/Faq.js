import { 
    Box,
    Container, 
    Accordion, 
    AccordionItem, 
    AccordionPanel, 
    AccordionButton 
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Faq = () => {
  const faqs = [
    {
      question: "What is the pricing model for your SaaS product?",
      answer: "We offer both monthly and annual subscription plans for our SaaS product. You can choose the plan that best fits your needs and budget."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. We do not impose any long-term contracts, and you are free to cancel whenever you want."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we provide a free trial period for new users. You can sign up for our free trial to explore the features and functionalities of our SaaS product before making a purchase decision."
    },
    {
      question: "Is customer support included in the subscription?",
      answer: "Absolutely! We offer customer support to all our subscribed users. Our support team is available to assist you with any questions or issues you may have."
    },
    {
      question: "Can I upgrade or downgrade my subscription plan?",
      answer: "Yes, you can easily upgrade or downgrade your subscription plan based on your requirements. Simply contact our support team, and they will guide you through the process."
    },
    {
      question: "Is my data secure with your SaaS product?",
      answer: "We take data security seriously. Our SaaS product employs robust security measures to protect your data. We implement encryption, regular backups, and other industry-standard practices to ensure the security and integrity of your data."
    }
  ];

  return (
    <Box bg="black">
      <Container maxW="container.lg">
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem paddingY={4}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='16px' />
                      ) : (
                        <AddIcon fontSize='16px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}

export default Faq;