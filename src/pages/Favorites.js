import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1> My Favorites</h1>
      <view>
        {favoritesCtx.totalFavorites === 0 ? (
          <text>You got no favorites yet</text>
        ) : (
          <MeetupList meetups={favoritesCtx.favorites} />
        )}
      </view>
    </section>
  );
}
export default FavoritesPage;
