import LandingCol from "./LandingCol";

const LandingGrid = ( { gridContent } ) => {
  const cols = [];
  gridContent.forEach((grid) => {
    cols.push(
     <LandingCol column={grid} key={grid}/>
    );
   });
    return (
      <div className="row LandingGrid">{cols}</div>
      );
};

export default LandingGrid;

