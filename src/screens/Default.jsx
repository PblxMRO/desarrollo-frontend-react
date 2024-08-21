import Logo from './Default/_components/Logo';
import Description from './Default/_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from '../components/LessonInfo';
import Contador from './Default/_components/Contador';

const Default = () => {
  return (
        <>
          <header className="App-header">
                <Contador/>
                <Logo/>
                <Description/>
                <OpenLink title="Learn React" url="https://reactjs.org"/>
                <OpenLink title="Mi proyecto React (Github)" url="https://github.com/PblxMRO/desarrollo-frontend-react"/>
                <LessonInfo unidad="1" text="Introducción a React y estructura del proyecto"/>
                <LessonInfo unidad="2" text="Context API para la gestión del estado global en aplicaciones React"/>
           </header>
        </>
    );

};

export default Default;