const ProductCategoryRow = ( { category } ) => {
    return (
        <tr>
          <th colSpan="2" className="categoria">
            {category}
          </th>
        </tr>
      );
};

export default ProductCategoryRow;