import { Box, Image } from '@chakra-ui/react';

const LogoBar = () => {
  return (
    <Box bg="black" p={4} display="flex" justifyContent="space-around">
      <Image src="/microsoft-logo.png" alt="Microsoft Logo" h={8} />
      <Image src="/vercel-logo.png" alt="Vercel Logo" h={8} />
      <Image src="/aws-logo.png" alt="AWS Logo" h={8} />
      <Image src="/google-cloud-logo.png" alt="Google Cloud Logo" h={8} />
      <Image src="/github-logo.png" alt="GitHub Logo" h={8} />
    </Box>
  );
};

export default LogoBar;