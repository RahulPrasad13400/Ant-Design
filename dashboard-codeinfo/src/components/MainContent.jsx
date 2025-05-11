import { Flex } from "antd";
import Banner from "./Banner";
import ProductsLists from "./ProductsLists";
import SellerLists from "./SellerLists";

export default function MainContent() {
  return (
    <div style={{flex : 1}}>
     <Flex vertical gap='large'>
      <Banner />
      <ProductsLists />
      <SellerLists />
     </Flex>
    </div>
  )
}
