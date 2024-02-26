import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  interface OSHContactReceiptEmailProps {
    username?: string;
  }
  
  const baseUrl = 'https://www.ozsmarthome.com.au/';
  
  export const OSHContactReceiptEmail = ({
    username,
  }: OSHContactReceiptEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Thanks for your inquiry.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={'https://www.ozsmarthome.com.au/apple-touch-icon.png'}
            width="32"
            height="32"
            alt="Oz Smart Home"
          />
  
          <Section style={section}>
            <Text style={text}>
              Hi <strong>{username}</strong>!
            </Text>
            <Text style={text}>
              Thanks for your interest in <Link href={'https://www.ozsmarthome.com.au'}>Oz Smart Home</Link> services. 
            </Text>
            <Text style={text}>
             We have received your inquiry and will get back to you as soon as possible. 
            </Text>
            <Text style={text}>
              Thanks
            </Text>
            <Text style={text}>
              <strong>Oz Smart Home</strong>
            </Text>
  
          </Section>
          <Text style={links}>
            <Link style={link} href={'https://www.ozsmarthome.com.au/services'}>Services</Link> ・{" "}
            <Link style={link} href={'https://www.ozsmarthome.com.au/projects'}>Projects</Link>・{" "}
            <Link style={link} href={'https://www.ozsmarthome.com.au/knowledge-hub'}>Knowledge Hub</Link>
          </Text>
  
          <Text style={footer}>
            Oz Smart Home
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  OSHContactReceiptEmail.PreviewProps = {
    username: "alanturing",
  } as OSHContactReceiptEmailProps;
  
  export default OSHContactReceiptEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  };
  
  const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const title = {
    fontSize: "24px",
    lineHeight: 1.25,
  };
  
  const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
  };
  
  const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  };
  
  const button = {
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "#fff",
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "12px 24px",
  };
  
  const links = {
    textAlign: "center" as const,
  };
  
  const link = {
    color: "#0366d6",
    fontSize: "12px",
  };
  
  const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "60px",
  };
  