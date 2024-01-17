import React from "react";
import { motion } from "framer-motion";
import { Center, Box, Text } from "@chakra-ui/layout";

const PdfViewer = ({ pdfUrl, description }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        exit={{ opacity: 0, x: 50, transition: { type: "spring" } }}
      >
        <Center pb="20">
          <iframe
            title="Co-Author to Avian Song Identification Using CNN"
            src={pdfUrl}
            width="50%"
            height="600px"
          >
            This browser does not support PDFs. Please download the PDF to view
            it.
          </iframe>
        </Center>
      </motion.div>
      <Center pt="40" pb="40">
        <Box maxWidth="80%" display="flex">
          <Text
            fontSize="2.2vh"
            display="flex"
            lineHeight="1.7"
            className="quote"
            color="var(--body_color)"
          >
            {description}
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default PdfViewer;
