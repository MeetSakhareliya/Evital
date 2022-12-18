import Item from "./Item";
import { useSelector } from "react-redux";
import '../CSS/item.css';

const ItemList = ({search}) => {
  const products = useSelector((state) => state.data.products);
  
  let filter_product=[...products];
  if(products.length && search.length){
    filter_product=products.filter((product)=>((product.name).toLowerCase()).includes(search.toLowerCase()));
  }
  
  console.log(filter_product);
  return (
    <>
    
      <div className="items_container">
        {filter_product.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
