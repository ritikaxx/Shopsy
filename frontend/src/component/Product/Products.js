import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {getProduct } from "../../actions/productActions";
import Loader from "../layout/loader/loader";
import ProductCard from "../Home/ProductCard";
const Products = ({match}) => {

    const dispatch = useDispatch();

    const {
        products,
        loading,
      } = useSelector((state) => state.products);

      const keyword = match.params.keyword;
    useEffect(() => {

        dispatch(getProduct(keyword));
      }, [dispatch,keyword]);

    return (
        <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
    
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

         
        </Fragment>
      )}
    </Fragment>
    );
}


export default Products;