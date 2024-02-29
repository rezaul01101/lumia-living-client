
import { IoBagHandleOutline } from "react-icons/io5";
interface ProductProps{
    item:any;
}
const Product:React.FC<ProductProps> =({item})=>{
  return (
    <div
      className="product relative w-full sm:h-[450px] h-[350px] overflow-hidden rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url('${item.image.src}')` }}
    >
      <div className="absolute bottom-4 left-4">
        <h3 className="text-2xl text-white font-semibold capitalize">
          {item.name}
        </h3>
        <h4 className="text-xl text-white font-semibold capitalize">
          {item.category}
        </h4>
        <h2 className="text-4xl text-white font-bold ">{item.price}</h2>
      </div>
      <div className="bg-white w-[70px] h-[70px] rounded-lg absolute bottom-0 right-0 p-2">
        <div className="bg-lumiaPrimary-600 w-full h-full rounded-md flex items-center justify-center cursor-pointer">
          <IoBagHandleOutline className="text-3xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Product;
