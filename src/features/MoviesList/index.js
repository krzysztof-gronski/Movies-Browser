import { MainContainer } from "../../common/MainContainer";
import { Tile } from "../../common/Tile";
import poster from "../../images/poster.png";

export const MoviesList = () => {
  return (
    <MainContainer content={<><Tile poster={poster}/><Tile/><Tile /><Tile /><Tile/><Tile /><Tile /><Tile/></>}/>
  );
};
