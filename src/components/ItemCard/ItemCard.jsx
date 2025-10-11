import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likedHeart from "../../assets/likedheart.png";
import unlikedHeart from "../../assets/unlikedheart.png";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const userId = currentUser?._id;
  const likesArray = Array.isArray(item.likes) ? item.likes : [];

  const isAuthorized = !!userId;
  const isLiked = isAuthorized ? likesArray.includes(userId) : false;

  const itemLikeButtonClassName = `item-card__like-button${
    isLiked ? " item-card__like-button_liked" : ""
  }${!isAuthorized ? " item-card__like-button_hidden" : ""}`;

  return (
    <div className="item-card">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="item-card__image"
        onClick={() => onCardClick(item)}
      />
      <div className="item-card__info">
        <div className="item-card__info-row">
          <h3 className="item-card__name">{item.name}</h3>
          <button
            className={itemLikeButtonClassName}
            onClick={() => onCardLike({ id: item._id, isLiked: isLiked })}
          >
            <img
              src={isLiked ? likedHeart : unlikedHeart}
              alt={isLiked ? "Liked" : "Not liked"}
              className="item-card__heart"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
