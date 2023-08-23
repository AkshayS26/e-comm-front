import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProducts";
import Popup from "@/components/popup";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useEffect, useState } from "react";

export default function Home({ featuredProduct, newProducts }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Header />
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Featured product={featuredProduct} />
      <NewProduct products={newProducts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productId = "64e486a0766e770c79a3ac50"; //change id to change feautered product
  await mongooseConnect();

  const featuredProduct = await Product.findById(productId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
};
