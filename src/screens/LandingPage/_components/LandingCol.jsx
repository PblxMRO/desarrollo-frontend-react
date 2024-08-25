const LandingCol = ({ column }) => {
    const line=[];
    const palabras = column.split(' ');
    const regex = /\[([^\]]+)]/g;
    palabras.forEach((palabra) =>{
        const bold = palabra.match(regex) ? <span style={{ fontWeight: 'bold' }}> { palabra.slice(1, -1) } </span> : palabra+' ';
        line.push(bold);
        line.push('');
    })
    return (
      <div className="col"><p>{ line }</p></div>
   );
};

export default LandingCol;