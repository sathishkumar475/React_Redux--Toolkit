import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GrTrash } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cardSlice";
const Wishlist = () => {
  let cardProduct = useSelector((state) => {
    return state.card;
  });

  // console.log(cardProduct);

  let dispatch = useDispatch();

  let handledelete = (reduxem) => {
    dispatch(removeItem(reduxem));
  };
  return (
    <div>
      {cardProduct.length !== 0 ? (
        <section className=" products">
          {cardProduct.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  ${product.price}
                </Card.Text>
              </Card.Body>

              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => {
                    handledelete(product.id);
                  }}
                >
                  <GrTrash />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      ) : (
        <h1 style={{ textAlign: "center", paddingTop: "100px", color: "red" }}>
          Please Purchas something
        </h1>
      )}
    </div>
  );
};

export default Wishlist;
