import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "./Custom -hooks/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import { GrTrash } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cardSlice";

const Productlist = () => {
  let navigat = useNavigate();
  let { products, error, isloading, setProducts } = useFetch(
    "http://localhost:5000/product"
  );

  let handledelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        axios.delete(`http://localhost:5000/product/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        let productlist = products.filter((product) => product.id !== id);
        setProducts(productlist);
      } catch {
        error(error);
      }
    }
  };
  let dispatch = useDispatch();
  let addItemtoCard = (product) => {
    dispatch(addItem(product));
  };

  if (isloading) {
    return (
      <div>
        <center>
          <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <article style={{ display: "flex", justifyContent: "right" }}>
          <span>Create a new product</span>
          <Button
            onClick={() => {
              navigat("/newproduct");
            }}
          >
            Click me!
          </Button>
        </article>
        <h1>Product List</h1>
        <div className="bordername">
          {products.length !== 0 && (
            <section className=" products">
              {products.map((product) => (
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
                      variant="primary"
                      style={{ justifyContent: "space-evenly" }}
                      onClick={() => {
                        addItemtoCard(product);
                      }}
                    >
                      <MdAddShoppingCart />
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        navigat(`/update/${product.id}`);
                      }}
                    >
                      <LiaEdit />
                    </Button>
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
          )}
        </div>
        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default Productlist;
