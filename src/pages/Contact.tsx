import { useEffect } from "react";
import { useLinkNameHook } from "../hooks/useLinkNameHook";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const setLinkDispatch = useLinkNameHook();

  useEffect(() => {
    setLinkDispatch("contact");
  }, []);

  return (
    <Layout>
      <div>Contact</div>
    </Layout>
  );
};

export default Contact;
