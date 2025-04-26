import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const {user}=useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { image, price, recipe, name,_id } = item;
    const handleAddToCart = food =>{
        if(user && user.email){
                 console.log(user.email,food)
                 const cartItem ={
                    menuId: _id,
                    email: user.email,
                    name,
                    image,
                    price
                 }
                axiosSecure.post('/carts',cartItem)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })

        }else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from: location}})
                }
              });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-black text-white absolute right-0 mr-4 mt-4 p-1 rounded-lg'>${price}</p>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className='text-center'>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={()=>handleAddToCart(item)} className='btn btn-outline border-0 hover:bg-black hover:text-white border-yellow-700 border-b-4 text-yellow-700 mt-2 '>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;