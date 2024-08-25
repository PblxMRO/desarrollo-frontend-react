const LandingParagraph = ({ paragraph }) => {
  const line=[];
  const palabras = paragraph.split(' ');
  const regex = /\[([^\]]+)]/g;
  palabras.forEach((palabra) =>{
      const bold = palabra.match(regex) ? <span style={{ fontWeight: 'bold' }}> { palabra.slice(1, -1) } </span> : palabra+' ';
      line.push(bold);
      line.push('');
  })
  return (
    <div className="col LandingParagraph"><p>{ line }</p></div>
 );
 };
 
 export default LandingParagraph;