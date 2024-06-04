import Layout from "../../layouts/Layout";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { params } = useParams()
  return (
    <Layout>
      <div className="pt-20"></div>
      Ini Halaman Detail
      <p>{params}</p>
    </Layout>
  );
};

export default Detail;
