import { useEffect } from "react";
import { useLinkNameHook } from "../hooks/useLinkNameHook";
import Layout from "../components/layout/Layout";

const AllQuiz = () => {
  const setLinkDispatch = useLinkNameHook();

  useEffect(() => {
    setLinkDispatch("Quiz");
  }, []);

  return (
    <Layout>
      <div>AllQuiz</div>
    </Layout>
  );
};

export default AllQuiz;
