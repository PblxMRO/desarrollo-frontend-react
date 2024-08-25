import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LandingHeader from './LandingHeader';
import LandingContent from './LandingContent';
import LandingFooter from './LandingFooter';
import { setContent } from '../../../redux/main/mainActions';

const LandingContainer = ({content}) => {
    return (
        <>
          <LandingHeader />
          <LandingContent content={content} />  
          <LandingFooter />
        </>
      );
}
  export default function App() {
     const content = useSelector((state) => state.main);
     const dispatch = useDispatch();
     useEffect(() => {
        dispatch(
            setContent([
              { id: 1, subtitle: "Bienvenido", content: "Este módulo se centra en el uso de [React,] incluyendo la creación de [componentes,] el manejo de [hooks] y el uso de [Redux.]", type: "text" },
              { id: 2, subtitle: "Temas Cubiertos", content: [
                  'Componentes funcionales y de clase ',
                  'Uso de [React] [hooks] como useState y useEffect',
                  'Creación de [custom] [hooks] como useForm',
                  'Creación de variables de estado con [useState]',
                  'Gestión de estado global con [Redux]',
                  'Integracion de [Redux] con [React]',
                  'Manejo de [Formularios] en [React]',
                  'Publicando nuestra [Página] con [GitHub] [Pages]'
              ], type: "grid" },
              { id: 3, subtitle: "Recursos Adicionales", content: "Para profundizar en los temas cubiertos, consulta los siguientes recursos:", type: "text" }
            ])
        )
    }, []);  
    return (
        <div className='container-md LadingContent'> <LandingContainer content={content.CONTENT} /></div>
    );
  }