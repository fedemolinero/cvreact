import './Body.css';
import Sidebar from './sidebar/Sidebar';

function Body() {

  const data = [
    {
      id: 1,
      title: 'Habilidad 1',
      subtitle: 'Carpinteria',
      amount: 5
    },
    {
      id: 2,
      title: 'Habilidad 2',
      subtitle: 'Programacion',
      amount: 2
    }
  ];

  return (
    <div className="Body">
      <div className="Body-section">
        <Sidebar
          title={data[0].title}
          subtitle={data[0].subtitle}
        >
        </Sidebar>
        <Sidebar
          title={data[1].title}
          subtitle={data[1].subtitle}
        >
        </Sidebar>
      </div>

      <div className="Body-section">
        Default content
      </div>

    </div>
  );
}

export default Body;
