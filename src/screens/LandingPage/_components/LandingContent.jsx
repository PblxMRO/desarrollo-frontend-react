import LandingSubtitle from './LandingSubtitle';
import LandingParagraph from './LandingParagraph';
import LandingGrid from './LandingGrid';


const LandingContent = ({ content }) => {
  const rows = [];
  content.forEach((contents) => {
   
    rows.push(
      <LandingSubtitle subtitle={contents.subtitle}  key={contents.subtitle} />
    );
     if(contents.type === 'text'){
      rows.push(
      <LandingParagraph paragraph={contents.content}  key={contents.id} />
      );
     }else{
      rows.push(
        <LandingGrid gridContent={contents.content}  key={contents.id}/>
        );
     }
  });

  return (
    <>
      <div>{rows}</div>
    </>
  );
};

export default LandingContent;







