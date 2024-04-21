import './index.css';

const ProductItems = ({ product }) => {
  const { title, image} = product ? product : "";
  return product ? (
    <li className='product_main '>
      <img className='img_style' src={image} alt={`${title}-avatar`} />
      <div className='name_section'>
        <p className='product_name'>{title.slice(0, 50)}</p>
      </div>
    </li>
  ) : null;
};

export default ProductItems;