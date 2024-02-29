import PageTitle from "@/app/components/PageTitle";
import Product from "@/app/components/Product";
import { Products, furnitureProduct } from "@/app/data/data";

const Furniture = () => {
  return (
    <div>
      <PageTitle title="Furniture Shop" />
      <div className="grid grid-cols-2 container mx-auto my-5 px-3">
        <div className="my-8">
          <h1 className="text-3xl font-bold">All Furniture</h1>
        </div>
        <div className="col-span-2 mb-4">
          <div className="grid sm:grid-cols-3 gap-4">
            {Products.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
